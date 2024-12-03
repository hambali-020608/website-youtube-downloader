'use client'
import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import axios from "axios"
import { useRouter } from "next/navigation"
import Card from "../component/card"
import Tutorial from "../component/tutorial"
const formatAudio = [ 'mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav', '4k' ];
function Downloadmp3(){
    const router = useRouter()
    const [url,setUrl] = useState("")
    const[quality,setQuality] = useState('mp3')
    const [loading,setLoading]=useState(false)
    const [link,setLink]=useState(false)
    function handleinput(e){
        setUrl(e.target.value)
        
    }

    function handleQuality(e){
        setQuality(e.target.value)
    }


   async function download(){
    setLoading(true)
    try{
        const youtube = await fetch(`/api/youtube?url=${url}&format=${quality}`) 
        const data = await youtube.json()
        setLink(data)
        
        // const video = await data.resultUrl;
        //  setLink(video)
    //     if (video.mp4) {
    //         setLink(<a href={video.mp4} className='btn btn-danger ms-5' style={{ position: 'relative', top: '10rem' }} download>download</a>);
    //     } else {
    //         setLink(<p>Video tidak ditemukan.</p>);
        
    // }
        } catch(error){
            console.error(error)
        }finally{
            setLoading(false)
        }
                // setLink(<a href={data.data.mp4} className='btn btn-danger ms-5' style={{position:'relative',top:'10rem'}}>Download!!!</a>)
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
        
 <Layout format="mp3">
 <div className="col">

 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />

 </div>
 
 <div className="col-12 col-md-auto mt-2 mt-md-0 text-md-end">
            <button className="btn btn-primary w-100 w-md-auto" type="button" onClick={download}>Search</button>
        </div>
</Layout> 
<h2 className="mt-5" align="center">Hasil download ada di bawah</h2>
<p align="center"> 👇👇👇</p>

<div style={{minHeight:'50vh'}} className="d-flex align-items-center justify-content-center mt-5">
  
  
  {loading && <div className="d-flex align-items-center">
    <strong role="status">Loading...</strong>
    <div className="spinner-border ms-auto" aria-hidden="true"></div>
  </div>}
 
  {!loading && link && (
    <Card link={link} type='mp3'/>
  )}
  </div>

<Tutorial title="Audio"/> 


</div>
    )
}
export default Downloadmp3