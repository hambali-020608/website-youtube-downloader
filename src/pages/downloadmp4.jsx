import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderFormat from "../component/Header"
import space from '../assets/space.jpg'
import Layout from "../layout/layout"


function Downloadmp4(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p>silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
        const youtube = await fetch (`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev/download?url=${encodeURIComponent(url)}`,{
            method:'GET'
        }) 
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
        
<Layout format="mp4">


  <input type="text" className=" me-2 rounded-2 input" placeholder="Masukan url youtube..." value={url} onChange={handleinput} aria-label="Recipient's username" aria-describedby="button-addon2"/>
<button className=" rounded-2" type="button" id="button-addon2" onClick={download} style={{
    }}>Search</button>
</Layout>

{link}

</div>
    )
}
export default Downloadmp4