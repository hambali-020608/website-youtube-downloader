import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderFormat from "../component/Header"
import space from '../assets/space.jpg'

function Downloadmp4(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
        const youtube = await fetch (`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev/download?url=${encodeURIComponent(url)}`) 
        const blob= await youtube.blob()
        const urlfile=window.URL.createObjectURL(blob)
        const contentDisposition = youtube.headers.get('Content-Disposition');
        const fileName = contentDisposition
                ? contentDisposition.split('filename=')[1].replace(/"/g, '')
                : 'download.mp4';
        setLink(<a href={urlfile} download={fileName} className='btn btn-danger'>Download!!!</a>)

    }
    

    return(
        <div>






            
        <HeaderFormat format="Mp4"/>
        
        <div className="input-group mb-3">
  <input type="text" className="form-control me-2 rounded-4 " style={{height:'2.5rem', width:'10rem'}} placeholder="Masukan url youtube..." value={url} onChange={handleinput} aria-label="Recipient's username" aria-describedby="button-addon2"/>
<button className="text-white rounded-4" type="button" id="button-addon2" onClick={download} style={{ 
    backgroundColor:"#000000",
    cursor: 'pointer',
    width:'5rem',
    height:'2.5rem'
    }}>Search</button>
</div>
       {link}
       <img alt="" />
       </div>
    )
}
export default Downloadmp4