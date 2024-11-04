import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import Layout from "../layout/layout"

function Downloadmp3(){
    const [url,setUrl] = useState("")
    const [link,setLink]=useState(<p align="center" style={{position:'relative',top:'10rem'}} >silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)

    function handleinput(e){ 
        setUrl(e.target.value)
    }



 
    async function download(){
        try{
            const youtube = await fetch(`/api/youtube?url=${url}`) 
            const data = await youtube.json()
            const video = data.data;
    
            if (video.mp3) {
                setLink(<a href={video.mp3} className='btn btn-danger ms-5' style={{ position: 'relative', top: '10rem' }} download>download</a>);
            } else {
                setLink(<p>Video tidak ditemukan.</p>);
            
        }
            } catch(error){
                console.error(error)
            }
           
            
         
                   
        }
        

    return(
      
           <div className="position-relative" style={{top:'3rem'}}>
      <Layout format="mp3">  
        
      <input type="text" className=" me-2 form-control" placeholder="Masukan url youtube..." value={url} onChange={handleinput} aria-label="Recipient's username" aria-describedby="button-addon2"/>
<button className=" rounded-2" type="button" id="button-addon2" onClick={download} style={{ 
   
    }}>Download</button>
    
       
       </Layout>
{link}
</div>
    )
}
export default Downloadmp3