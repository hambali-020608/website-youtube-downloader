'use client'
import { useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import axios from "axios"
import { useRouter } from "next/navigation"
import Card from "../component/card"
const formatVideo = [ '720','360', '480', '1080', '1440' ];
function Downloadmp4(){
    const router = useRouter()
    const [url,setUrl] = useState("")
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState('')
    const[quality,setQuality] = useState('720')
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
        setError('')
        } catch(error){
            console.error(error)
            
            setLink(false)
        }finally{
          setLoading(false)
        }
        
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
        
 <Layout format="mp4">
 <div className="col">

 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />

 </div>
 <div className="col-md-auto">

 <select value={quality}  onChange={handleQuality} className="form-select " aria-label="Default select example">
 
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
 <div className="d-flex align-items-center justify-content-center mt-5">
  
  
{loading && <div className="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div className="spinner-border ms-auto" aria-hidden="true"></div>
</div>}

{!loading && link && (
  <Card link={link} type='mp4'/>
)}
</div>

 


</div>
    )
}
export default Downloadmp4