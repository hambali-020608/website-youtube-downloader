'use client'
import { useRef, useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Card from "../component/card"
import Tutorial from "../component/tutorial"

function Downloadmp4() {
    const formats = [
        { value: '144', label: '144p' },
        { value: '240', label: '240p' },
        { value: '360', label: '360p' },
        { value: '480', label: '480p' },
        { value: '720', label: '720p HD' },
        { value: '1080', label: '1080p HD' },
        { value: 'mp3', label: 'MP3 Audio' }
    ];
    const [format, setFormat] = useState('360');
    const [url, setUrl] = useState("");
    const [error, setError] = useState(false);
    const loadingRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [link, setLink] = useState(false);

    function handleInput(e) {
        setUrl(e.target.value);
        if (error) setError(false);
    }

    function handleFormatChange(e) {
        setFormat(e.target.value);
    }

    async function download() {
        if (!url) {
            setError(true);
            setMessage('Please enter a YouTube URL');
            return;
        }

        setError(false);
        setLoading(true);
        setLink(false);
        loadingRef.current.scrollIntoView({ behavior: 'smooth' });
        
        try {
            const youtube = await fetch(`https://profesor-api.vercel.app/api/youtube/v1/detail?url=${url}&format=${format}`);
            const data = await youtube.json();
            setLink(data.data);
            setMessage('');
        } catch (error) {
            console.error(error);
            setLink(false);
            setMessage('Failed to download. Please check your URL and try again.');
        } finally {
            setLoading(false);
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            download();
        }
    }

    return (
        <div className="position-relative" style={{ top: '3rem' }}>
            <Layout format="mp4">
                <div className="container-fluid px-3 px-md-5 py-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="d-flex flex-column gap-3">
                                {/* Input URL */}
                                <div className="position-relative">
                                 <input
  type="text"
  className={`form-control text-light form-control-lg ${error ? 'is-invalid' : ''}`}
  style={{
    borderRadius: '15px',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#1e1e1e', // warna gelap agar teks putih terlihat
    color: 'white', // teks input jadi putih
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    border: error ? '2px solid #ef4444' : '2px solid rgba(59, 130, 246, 0.3)',
  }}
  placeholder="🔗 Paste your YouTube URL here..."
  value={url}
  onChange={handleInput}
  onKeyPress={handleKeyPress}
/>

                                    {error && (
                                        <div className="invalid-feedback d-block mt-2 ms-2" style={{fontSize: '0.9rem'}}>
                                            <strong>⚠️ {message}</strong>
                                        </div>
                                    )}
                                </div>
                                
                                {/* Format and Download Button */}
                                <div className="d-flex flex-column flex-sm-row gap-3">
                                    <select
                                        className="form-select form-select-lg"
                                        style={{
                                            border: '2px solid rgba(59, 130, 246, 0.3)',
                                            padding: '1rem 1.2rem',
                                            fontSize: '1rem',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                            borderRadius: '15px',
                                            flex: '1'
                                        }}
                                        value={format}
                                        onChange={handleFormatChange}
                                    >
                                        {formats.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                    <button
                                        style={{
                                            borderRadius: '15px',
                                            padding: '1rem 2.5rem',
                                            border: 'none',
                                            fontSize: '1rem',
                                            fontWeight: '700',
                                            whiteSpace: 'nowrap',
                                            minWidth: '200px',
                                            boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)'
                                        }}
                                        className="btn btn-lg"
                                        type="button"
                                        onClick={download}
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2" style={{display: 'inline-block', verticalAlign: 'middle'}}>
                                                    <path d="M10 2V12M10 12L6 8M10 12L14 8M2 16H18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                Download
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            {/* Result Section */}
            <div className="container mt-5">
                <div className="text-center mb-4">
                    <h2 className="mb-2 text-white" style={{fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '800'}}>
                        Download Result
                    </h2>
                    <p className="text-secondary" style={{fontSize: '3rem', margin: '0', lineHeight: '1'}}>
                        ⬇️
                    </p>
                </div>
            </div>

            <div 
                style={{ minHeight: '50vh' }} 
                ref={loadingRef} 
                className="d-flex align-items-center justify-content-center mt-4 mb-5"
            >
                {loading && <Loading />}
                {message && !loading && !link && (
                    <div className="text-center p-4">
                        <div className="alert alert-danger d-inline-block" role="alert" style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '2px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '15px',
                            padding: '1.5rem 2rem'
                        }}>
                            <h4 className="mb-0">❌ {message}</h4>
                        </div>
                    </div>
                )}
                {!loading && link && <Card link={link} quality={format} />}
            </div>

            <Tutorial title="Video" />
        </div>
    )

    function Loading() {
        return (
            <div className="text-center p-5">
                <div className="spinner-border mb-3" style={{width: '4rem', height: '4rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h3 className="mt-3" style={{color: 'var(--light-blue)', fontWeight: '600'}}>
                    ⚡ Processing your request...
                </h3>
                <p className="text-secondary mt-2">Please wait while we fetch your video</p>
            </div>
        )
    }
}

export default Downloadmp4