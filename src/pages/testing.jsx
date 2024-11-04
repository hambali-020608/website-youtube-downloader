import React, { useState } from 'react';

function DownloadComponent() {
    const [videoUrl, setVideoUrl] = useState('');

    const handleDownload = () => {
        if (videoUrl) {
            window.location.href = `http://localhost:3000/proxy?url=${encodeURIComponent(videoUrl)}`;
        } else {
            alert('URL video diperlukan!');
        }
    };

    return (
        <div style={{ padding: '20px' }} top>
            <h1>YouTube Video Downloader</h1>
            <input
                type="text"
                placeholder="Masukkan URL video YouTube"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                style={{ width: '300px', padding: '10px' }}
            />
            <button onClick={handleDownload} style={{ padding: '10px' }}>
                Download Video
            </button>
        </div>
    );
}

export default DownloadComponent;
