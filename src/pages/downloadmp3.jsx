import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderFormat from "../component/Header"
import '../App.css'

function Downloadmp3(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
        const youtube = await fetch (`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev/downloadmp3?url=${encodeURIComponent(url)}`) 
        const blob= await youtube.blob()
        const urlfile=window.URL.createObjectURL(blob)
        const contentDisposition = youtube.headers.get('Content-Disposition');
        const fileName = contentDisposition
                ? contentDisposition.split('filename=')[1].replace(/"/g, '')
                : 'download.mp3';
        setLink(<a href={urlfile} download={fileName} className='btn btn-danger'>Download!!!</a>)

    }
    

    return(
        <div>
        <HeaderFormat format="Mp3"/>
      
       {link}
       </div>
    )
}
export default Downloadmp3