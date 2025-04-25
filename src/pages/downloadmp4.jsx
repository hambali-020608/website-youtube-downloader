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
        loadingRef.current.scrollIntoView({ behavior: 'smooth' });
        try {
            const youtube = await fetch(`https://profesor-api.vercel.app/api/youtube/v4/download?url=${url}&format=${format}`);
            const data = await youtube.json();
            setLink(data.result);
            setMessage('');
        } catch (error) {
            console.error(error);
            setLink(false);
            setMessage('Failed to download. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="position-relative" style={{ top: '3rem' }}>
            <Layout format="mp4">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="d-flex flex-column flex-md-row gap-2">
                                <input
                                    type="text"
                                    className={`form-control form-control-lg ${error ? 'is-invalid' : ''}`}
                                    style={{
                                        borderRadius: '15px',
                                        padding: '0.8rem 1.2rem',
                                        fontSize: '1rem',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                        border: '1px solid #e0e0e0',
                                        flex: '1 1 auto'
                                    }}
                                    placeholder="Paste your YouTube URL here..."
                                    value={url}
                                    onChange={handleInput}
                                />
                                
                                <div className="d-flex flex-row flex-md-column gap-2">
                                    <select
                                        className="form-select form-select-lg"
                                        style={{
                                            border: '1px solid #e0e0e0',
                                            padding: '0.8rem',
                                            fontSize: '1rem',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                            borderRadius: '15px',
                                            minWidth: '120px'
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
                                            backgroundColor: '#98FF98',
                                            borderRadius: '15px',
                                            padding: '0.8rem 1.5rem',
                                            border: 'none',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap'
                                        }}
                                        className="btn btn-lg"
                                        type="button"
                                        onClick={download}
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                            {error && <div className="text-danger mt-2">{message}</div>}
                        </div>
                    </div>
                </div>
            </Layout>

            <h2 className="mt-5 text-center">Hasil download ada di bawah</h2>
            <p className="text-center">👇👇👇</p>
            <div style={{ minHeight: '50vh' }} ref={loadingRef} className="d-flex align-items-center justify-content-center mt-5">
                {loading && <Loading />}
                {message && <h1 className="text-center">{message}</h1>}
                {!loading && link && <Card link={link} type='mp4' />}
            </div>

            <Tutorial title="Video" />
        </div>
    )

    function Loading() {
        return (
            <div className="d-flex align-items-center">
                <strong role="status">Loading...</strong>
                <div className="spinner-border ms-auto" aria-hidden="true"></div>
            </div>
        )
    }
}

export default Downloadmp4