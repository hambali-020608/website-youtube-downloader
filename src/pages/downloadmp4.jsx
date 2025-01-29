'use client'
import { useRef, useState } from "react"
import "../App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from "../layout/layout"
import Card from "../component/card"
import Tutorial from "../component/tutorial"

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
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control form-control-lg border-2" 
                    style={{
                        borderRadius: '15px 0 0 15px',
                        padding: '0.8rem 1.2rem',
                        fontSize: '1rem',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        border: '1px solid #e0e0e0'
                    }}
                    placeholder="Paste your YouTube URL here..." 
                    value={url} 
                    onChange={handleinput}
                />
                <button 
                    style={{
                        backgroundColor:'#98FF98',
                        borderRadius: '0 15px 15px 0',
                        padding: '0.8rem 1.5rem',
                        border: 'none',
                        transition: 'all 0.3s ease'
                    }} 
                    className="btn btn-lg" 
                    type="button" 
                    onClick={download}
                >
                    Download
                </button>
            </div>
        </div>
    </Layout>

    <h2 className="mt-5" align="center">Hasil download ada di bawah</h2>
    <p align="center"> 👇👇👇</p>
    <div style={{minHeight:'50vh'}} ref={loadingRef} className="d-flex align-items-center justify-content-center mt-5">
    
    {loading && <Loading/>}

    <h1>{message}</h1>


    {!loading && link &&  (
    <Card link={link} type='mp4'/>
    )}

    </div>


    <Tutorial title="Video"/>

    </div>
    )

    function Loading() {
      return(
        <div  className="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div className="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
      )
      
    }
}


export default Downloadmp4