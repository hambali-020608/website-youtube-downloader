'use client'
import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import axios from "axios"
import { useRouter } from "next/navigation"

function Downloadmp4(){
    const router = useRouter()
    const [url,setUrl] = useState("")
    const [datas,setDatas]= useState([])

    const [link,setLink]=useState(<p align="center" style={{position:'relative',top:'10rem'}} >silahkan masukan url terlebih dahulu lalu tunggu teks ini berubah jadi tombol download</p>)
    function handleinput(e){
        setUrl(e.target.value)
        
    }



   async function download(){
    try{
        const youtube = await fetch(`/api/youtube?url=${url}`) 
        const data = await youtube.json()
        const video = data.data;
        setDatas(data)
    
    //     if (video.mp4) {
    //         setLink(<a href={video.mp4} className='btn btn-danger ms-5' style={{ position: 'relative', top: '10rem' }} download>download</a>);
    //     } else {
    //         setLink(<p>Video tidak ditemukan.</p>);
        
    // }
        } catch(error){
            console.error(error)
        }
       
        
     
                // setLink(<a href={data.data.mp4} className='btn btn-danger ms-5' style={{position:'relative',top:'10rem'}}>Download!!!</a>)
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
  
        
 <Layout format="mp4">
 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />
 <button className="btn btn-primary" type="button" onClick={download}>Search</button>

</Layout> 
perubahan 2
 {datas.map((video,i)=>{
console.log(video.url)
return(
    <div key={i}>
        <a href={video.url}>video</a>
    </div>
)
 })}
{link}

</div>
    )
}
export default Downloadmp4