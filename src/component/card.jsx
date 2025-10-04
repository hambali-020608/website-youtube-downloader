"use client";

import { useEffect, useState } from "react";

export default function Card({ link, quality }) {
  const [loading, setLoading] = useState(false);
  const [downloadResult, setDownloadResult] = useState(null);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  async function checkProgress(progressUrl) {
    try {
      let progressData = await fetch(progressUrl).then((res) => res.json());

      while (progressData.success < 1) {
        await new Promise((r) => setTimeout(r, 1000)); // delay 1 detik
        progressData = await fetch(progressUrl).then((res) => res.json());
        console.log(progressData.progress)
        // Jika API punya field progress percent, kamu bisa ambil di sini
        if (progressData.progress) {
          setProgress(progressData.progress / 10);
        }
      }

      // Setelah sukses
      return progressData;
    } catch (err) {
      throw err;
    }
  }

  async function downloadVideo() {
    setLoading(true);
    setError(false);
    try {
      const result = await checkProgress(link.progress_url);
      const downloadUrl = result.download_url || result.data?.download_url;

      if (downloadUrl) {
        setDownloadResult(downloadUrl);
      } else {
        console.error("Download URL tidak ditemukan:", result);
        setError(true);
      }
    } catch (error) {
      console.error("Error saat memeriksa progress:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    downloadVideo();
  }, []);

  return (
    <div
      className="card w-100"
      style={{
        maxWidth: "900px",
        borderRadius: "25px",
        overflow: "hidden",
        border: "2px solid rgba(59, 130, 246, 0.3)",
        background: "rgba(51, 65, 85, 0.8)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="row g-0">
        {/* Thumbnail Section */}
        <div className="col-md-5">
          <div className="p-3 h-100 d-flex align-items-center">
            <img
              className="img-fluid rounded"
              src={link?.info?.image}
              alt={link?.title || "Thumbnail"}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                border: "2px solid rgba(59, 130, 246, 0.3)",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="col-md-7">
          <div className="card-body p-4">
            <div className="mb-4">
              <h5
                className="text-uppercase mb-3"
                style={{
                  color: "var(--light-blue)",
                  fontSize: "0.85rem",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                📹 Video Information
              </h5>

              {/* Title */}
              <div
                className="mb-3 p-3"
                style={{
                  background: "rgba(30, 41, 59, 0.6)",
                  borderRadius: "12px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                <div className="d-flex align-items-start gap-2">
                  <span style={{ fontSize: "1.2rem" }}>🎬</span>
                  <div className="flex-grow-1">
                    <small
                      className="text-secondary d-block mb-1"
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Title
                    </small>
                    <p
                      className="mb-0"
                      style={{
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                        lineHeight: "1.5",
                        fontWeight: "500",
                      }}
                    >
                      {link?.title || "No title available"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality */}
              <div
                className="mb-3 p-3"
                style={{
                  background: "rgba(30, 41, 59, 0.6)",
                  borderRadius: "12px",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
              >
                <div className="d-flex align-items-center gap-2">
                  <span style={{ fontSize: "1.2rem" }}>⚡</span>
                  <div className="flex-grow-1">
                    <small
                      className="text-secondary d-block mb-1"
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Quality
                    </small>
                    <span
                      className="badge"
                      style={{
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                        padding: "0.5rem 1rem",
                        fontSize: "0.9rem",
                        fontWeight: "700",
                      }}
                    >
                      {quality === "mp3" ? "MP3 Audio" : `${quality}p Video`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="text-center">
                {loading && (
                  <button
                    className="btn w-100"
                    disabled
                    style={{
                      background: "rgba(30, 41, 59, 0.8)",
                      border: "2px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "15px",
                      padding: "1rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                      ></span>
                      <span style={{ fontWeight: "600" }}>
                        ⏳ Preparing Download...{" "}
                        {progress ? `(${progress}%)` : ""}
                      </span>
                    </div>
                  </button>
                )}

                {!loading && downloadResult && (
                  <a
                    href={downloadResult}
                    className="btn w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                      border: "none",
                      borderRadius: "15px",
                      padding: "1rem",
                      color: "white",
                      fontWeight: "700",
                      fontSize: "1rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                    }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="me-2"
                      >
                        <path
                          fill="#ffffff"
                          fillRule="evenodd"
                          d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68z"
                        ></path>
                      </svg>
                      <span>Download Now</span>
                    </div>
                  </a>
                )}

                {!loading && !downloadResult && error && (
                  <div
                    className="alert alert-danger"
                    role="alert"
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "2px solid rgba(239, 68, 68, 0.3)",
                      borderRadius: "12px",
                      color: "#ef4444",
                      fontWeight: "600",
                    }}
                  >
                    ❌ Failed to get download link. Please try again.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
