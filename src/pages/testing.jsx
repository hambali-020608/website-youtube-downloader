import React, { useState } from 'react';
import Cookies from 'js-cookie'

function DownloadComponent() {

//   const handleSetCookie = () => {
//     // Set cookie di klien tanpa Secure
//     Cookies.set('myCookie', 'cookieValue', { 
//       expires: 7,
//       sameSite: 'Lax'}) // atau 'Strict'
// };

// const fetchData = async () => {
//     const response = await fetch('http://localhost:5000/api/endpoint', {
//         method: 'GET',
//         credentials: 'include', // Sertakan cookie
//     });
//     const data = await response.json();
//     console.log(data);
// };

// return (
//     <div>
//         <button onClick={handleSetCookie}>Set Cookie</button>
//         <button onClick={fetchData}>Fetch Data</button>
//     </div>
// );
  const [url, setUrl] = useState('');
  const [videoInfo, setVideoInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
// const clientcookies= document.cookie
  // Function to handle form submit
  const handleDownload = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setVideoInfo(null); // Reset videoInfo
    Cookies.set(('mycookie','cookievalue',{
      expires: 7,
      sameSite: 'Lax'
    }))
    try {
      // Request to backend server
      

      const response = await fetch(`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev:3000/download?url=${url}`, {
        method: 'GET', // atau POST, PUT, dll.
        credentials: 'include', // Sertakan cookie
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log(data);
      // const response = await fetch(`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev:5000/download?url=${encodeURIComponent(url)}`, {
      //   method: 'GET',
      //   credentials:'include',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Cookie':clientcookies
      //   },
      // });

      // if (!response.ok) {
      //   throw new Error('Error fetching video information');
      // }

      // const data = await response.json();
      setVideoInfo(data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch video information');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Download YouTube Video Info</h1>
      <form onSubmit={handleDownload}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter YouTube video URL"
          required
        />
        <button type="submit">Get Video Info</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {videoInfo && (
        <div>
          <h2>Video Title: {videoInfo.title}</h2>
          <p>Duration: {Math.floor(videoInfo.lengthSeconds / 60)} minutes {videoInfo.lengthSeconds % 60} seconds</p>
          <h3>Available Video Formats:</h3>
          <ul>
            {/* Filter the formats by mimeType containing 'video' */}
            {videoInfo.formats
              .filter(format => format.mimeType && format.mimeType.includes('video'))
              .map((format, index) => (
                <li key={index}>
                  {format.qualityLabel || 'Unknown Quality'} - {format.mimeType} - {format.container} - 
                  {format.url && (
                    <a href={format.url} download={`video.${format.container}`}>
                      Download
                    </a>
                  )}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DownloadComponent;
