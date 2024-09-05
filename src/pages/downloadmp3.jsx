import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderFormat from "../component/Header"

function Downloadmp3(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
        const youtube = await fetch (`http://localhost:3000/downloadmp3?url=${encodeURIComponent(url)}`) 
        const blob= await youtube.blob()
        const urlfile=window.URL.createObjectURL(blob)
        setLink(<a href={urlfile} download="video.mp3" className='btn btn-danger'>Download!!!</a>)

    }
    

    return(
        <div>
        <HeaderFormat format="Mp3"/>
        <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Masukan url youtube..." value={url} onChange={handleinput} aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button class="btn btn-primary" type="button" id="button-addon2" onClick={download}>Search</button>
</div>
       {link}
       </div>
    )
}
export default Downloadmp3