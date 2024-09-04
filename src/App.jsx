import { useState } from 'react'
import cuyLogo from './assets/logo.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }

   async function download(){
        const youtube = await fetch (`http://localhost:3000/download?url=${encodeURIComponent(url)}`) 
        const blob= await youtube.blob()
        const urlfile=window.URL.createObjectURL(blob)
        setLink(<a href={urlfile} download="video.mp4">Download!!!</a>)

    }


    return (
        <>
        <h1>Youtube Downloader</h1>
        <input type="text" placeholder='masukan url youtube...' value={url} onChange={handleinput}/>
        <button onClick={download}>download video</button>    
       {link}
        </>
    )
}

export default App
