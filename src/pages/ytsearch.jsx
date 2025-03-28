'use client'
import { useRef, useState } from "react"
import "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Card from "../component/ytsearch/card"
import Tutorial from "../component/tutorial"

const formatVideo = [ '720','360', '480', '1080', '1440' ];
function YtSearch(){
    const [url,setUrl] = useState("")
    const [error,setError]=useState(false)
    const loadingRef=useRef(null)
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [link,setLink]=useState([])
    function handleinput(e){
        setUrl(e.target.value)
        
    }

    function handleQuality(e){
        setQuality(e.target.value)
    }


   async function download(){
     setLoading(true)
     loadingRef.current.scrollIntoView({behavior:'smooth'})
    try{
        const youtube = await fetch(`/api/youtube/search?q=${url}`) 
        
        const data = await youtube.json()

        if(data.seconds >= 3600){
          setMessage('Video/Audio Tidak Boleh Lebih Dari 1 Jam')
          setLink(false)
          setLoading(false)
        }
        else{
        setMessage('')
         setLink(data)
        }
        } catch(error){
            console.error(error)
            setLink(false)
        }finally{
          setLoading(false)
        }
        
    }
    

    return(
    <div className="position-relative" style={{top:'3rem'}}>    
        
 <Layout format="Search">
 <div className="col">

 <input type="text" className="form-control me-2" placeholder="Search..." value={url} onChange={handleinput}  />

 </div>
 <div className="col-12 col-md-auto mt-2 mt-md-0 text-md-end">
            <button style={{backgroundColor:'#98FF98'}} className="btn w-100 w-md-auto" type="button" onClick={download}>Search</button>
        </div>
</Layout> 
 <h2 className="mt-5" align="center">Hasil download ada di bawah</h2>
<p align="center"> 👇👇👇</p>
 <div style={{minHeight:'50vh'}} ref={loadingRef} className="d-flex align-items-center justify-content-center mt-5">
  
{loading && <div  className="d-flex align-items-center">
  <strong role="status">Loading...</strong>
  <div className="spinner-border ms-auto" aria-hidden="true"></div>
</div>}

<h1>{message}</h1>

{/* {!loading && link &&  (
  <Card link={link} type='mp4'/>
)} */}

<div className="container">
<div className="d-block gap-3 d-lg-flex justify-content-sm-center">
  {link.map((video,i)=>{
    
    return  (
      <div key={i}>
    <Card link={video}/>
    </div>
      
    )
})}
</div>

</div>
</div>

{/* <Card  link={link}/> */}

<Tutorial title="Video"/>





</div>
    )
}
export default YtSearch