"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Loading from "../loading";
import Button from "../button"

export default function Card({ link }) {
  const router = useRouter();

  const downloadLinkRef = useRef(""); // Gunakan ref untuk menyimpan downloadLink
  const [loading, setLoading] = useState(false);
  const [button, setButton] = useState(
    <>
      <Button HandleClick={() => handleDownload("mp4")} title="Download Mp4" />
      <Button HandleClick={() => handleDownload("mp3")} title="Download Mp3" />
    </>
  );

  const handleRedirect = (e) => {
    e.preventDefault();

    const downloadLink = downloadLinkRef.current; // Ambil nilai dari ref
    if (!downloadLink) {
      alert("Silakan pilih format terlebih dahulu.");
      return;
    }

    console.log("Redirecting to:", downloadLink); // Debug log
    router.push(downloadLink);
  };

  const handleDownload = async (format) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/youtube?url=${link.url}`);
      if (!response.ok) {
        throw new Error("Gagal mengambil data download.");
      }
      const data = await response.json();

      if (format === "mp4") {
        setButton(
          <>
            <select
              className="form-select"
              onChange={(e) => (downloadLinkRef.current = e.target.value)} // Update nilai ref
              aria-label="Pilih format video"
            >
              <option value="">Pilih Format</option>
              {data.video.map((v, index) => (
                <option key={index} value={v.downloadLink}>
                  {v.fileType}
                </option>
              ))}
            </select>
            <Button HandleClick={handleRedirect} title="Download Mp4" />
          </>
        );
      } else if (format === "mp3") {
        setButton(
          <>
            <select
              className="form-select"
              onChange={(e) => (downloadLinkRef.current = e.target.value)} // Update nilai ref
              aria-label="Pilih format audio"
            >
              <option value="">Pilih Format</option>
              {data.audio.map((v, index) => (
                <option key={index} value={v.downloadLink}>
                  {v.fileType}
                </option>
              ))}
            </select>
            <Button HandleClick={handleRedirect} title="Download Mp3" />
          </>
        );
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-3 w-100">
      <div className="row g-0">
        <div>
          <img
            className="img-fluid rounded-start"
            src={link.thumbnail}
            alt={link.title}
          />
        </div>
        <div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                <div className="row">
                  <h4 className="col card-title border-end">Title</h4>
                  <h5 className="col">{link.title}</h5>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <h4 className="col card-title border-end">Author</h4>
                  <h5 className="col">{link.author.name}</h5>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <h4 className="col card-title border-end">Duration</h4>
                  <h5 className="col">{link.timestamp}</h5>
                </div>
              </li>
              <div className="row gap-4">
                {loading && <Loading />}
                {!loading && button}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
