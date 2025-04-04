"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";



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

  function Loading() {
    return(
      <div  className="d-flex align-items-center">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
    )
    

  }
  function Button({HandleClick,title}) {
    return(
        <button onClick={HandleClick} className="col btn btn-primary h-75 mt-3">
        <div className="d-flex justify-content-center align-items-center">
        <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fillRule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path> </g></svg>
          <div className="ms-2">{title}</div>
        </div>
    
        </button>
    
    )
    
}
}
