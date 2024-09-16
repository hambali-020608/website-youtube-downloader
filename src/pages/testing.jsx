import React, { useState } from 'react';

function DownloadComponent() {
    const [videoUrl, setVideoUrl] = useState('');

    const handleDownload = async () => {
        try {
            const response = await fetch(`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev/download?url=${encodeURIComponent(videoUrl)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Melakukan download secara langsung melalui browser
            const blob = await response.blob();
            const downloadUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;

            // Mendapatkan nama file dari header 'Content-Disposition'
            const contentDisposition = response.headers.get('Content-Disposition');
            const fileName = contentDisposition
                ? contentDisposition.split('filename=')[1].replace(/"/g, '')
                : 'download.mp4';

            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="Enter YouTube URL"
            />
            <button onClick={handleDownload}>Download Video</button>
        </div>
    );
}

export default DownloadComponent;
