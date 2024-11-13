'use client'
import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import axios from "axios"
import { useRouter } from "next/navigation"
const formatVideo = [ '720','360', '480', '1080', '1440' ];
function Downloadmp4(){
    const router = useRouter()
    const [url,setUrl] = useState("")
    const[quality,setQuality] = useState('')
    const [link,setLink]=useState(false)
    function handleinput(e){
        setUrl(e.target.value)
        
    }

    function handleQuality(e){
        setQuality(e.target.value)
    }


   async function download(){
    try{
        const youtube = await fetch(`/api/youtube?url=${url}&format=${quality}`) 
        const data = await youtube.json()
        console.log(data)
        console.log(quality)
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
        }
                // setLink(<a href={data.data.mp4} className='btn btn-danger ms-5' style={{position:'relative',top:'10rem'}}>Download!!!</a>)
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
        
 <Layout format="mp4">
 <div className="col">

 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />

 </div>
 <div className="col-md-auto">

 <select value={quality} defaultValue={'720'} onChange={handleQuality} class="form-select " aria-label="Default select example">
 
  {formatVideo.map((f,i)=>{
    return(
        <option value={f} key={i}>{f}p</option>
    )
  })}
</select>

 </div>
 <div className="col-12 col-md-auto mt-2 mt-md-0 text-md-end">
            <button className="btn btn-primary w-100 w-md-auto" type="button" onClick={download}>Search</button>
        </div>
</Layout> 
 {console.log(link)}
{link ? (
    <div class="card mb-3 w-75" style={{height:''}} >
    <div class="row g-0">
      <div class="col-md-4">
        <img src={link.thumbnail} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
        <ul class="list-group">       
    <li class="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">Title</h4>
          <h5 className="col">{link.title}</h5>
      </div>
    </li>
    <li class="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">Quality</h4>
          <h5 className="col">{link.format}p</h5>
      </div>
    </li>
    <li class="list-group-item">
      <div className="row">
          <h4 className="col card-title border-end">Format</h4>
          <h5 className="col">Video/Mp4</h5>
      </div>
    </li>
   
    <a href={link.downloadUrl} className="btn btn-primary h-75 mt-3">
      <div className="d-flex justify-content-center align-items-center">
      <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#000000" fill-rule="evenodd" d="M11 2a1 1 0 10-2 0v7.74L5.173 6.26a1 1 0 10-1.346 1.48l5.5 5a1 1 0 001.346 0l5.5-5a1 1 0 00-1.346-1.48L11 9.74V2zm-7.895 9.204A1 1 0 001.5 12v3.867a2.018 2.018 0 002.227 2.002c1.424-.147 3.96-.369 6.273-.369 2.386 0 5.248.236 6.795.383a2.013 2.013 0 002.205-2V12a1 1 0 10-2 0v3.884l-13.895-4.68zm0 0L2.5 11l.605.204zm0 0l13.892 4.683a.019.019 0 01-.007.005h-.006c-1.558-.148-4.499-.392-6.984-.392-2.416 0-5.034.23-6.478.38h-.009a.026.026 0 01-.013-.011V12a.998.998 0 00-.394-.796z"></path> </g></svg>
        <div className="ms-2">Download To Your Device </div>
      </div>

      </a>
    
  </ul>
        </div>
      </div>
    </div>
  </div>

): (
  ''
)}


 


</div>
    )
}
export default Downloadmp4