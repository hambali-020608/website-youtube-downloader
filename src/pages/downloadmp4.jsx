import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import axios from "axios"


function Downloadmp4(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p align="center" style={{position:'relative',top:'10rem'}} >silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
        const youtube = await fetch(`https://ef7606c5-873f-4284-9c57-a11cd7c69ce6-00-4merq8dnmhkp.pike.replit.dev/download?url=${url}`) 
        const data = await youtube.json()
        console.log(data)
        
        // const blob= await youtube.blob()
        // const urlfile=window.URL.createObjectURL(blob)
        // const contentDisposition = youtube.headers.get('Content-Disposition');
        // const fileName = contentDisposition
        //         ? contentDisposition.split('filename=')[1].replace(/"/g, '')
        //         : 'download.mp4';
                setLink(<a href={data.data.mp4} className='btn btn-danger ms-5' style={{position:'relative',top:'10rem'}}>Download!!!</a>)
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
        
 <Layout format="mp4">
 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />
 <button className="btn btn-primary" type="button" onClick={download}>Search</button>

</Layout> 
 
{link}

</div>
    )
}
export default Downloadmp4