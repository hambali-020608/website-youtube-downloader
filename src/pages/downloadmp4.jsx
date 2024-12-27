'use client'
import { useRef, useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Card from "../component/card"
import Tutorial from "../component/tutorial"
import Benefit from "../component/benefit"
const formatVideo = [ '720','360', '480', '1080', '1440' ];
function Downloadmp4(){
    const [url,setUrl] = useState("")
    const [error,setError]=useState(false)
    const loadingRef=useRef(null)
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [link,setLink]=useState(false)
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
        const youtube = await fetch(`/api/youtube?url=${url}`) 
        
        const data = await youtube.json()

         setLink(data)
        
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
{console.log(link)}


{!loading && link &&  (
  <Card link={link} type='mp4'/>
)}

</div>


<Tutorial title="Video"/>





</div>
    )
}
export default Downloadmp4