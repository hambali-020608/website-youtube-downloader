
import { useState,useRef,useEffect } from 'react'
import '../App.css'
import Typed from 'typed.js'
import Navbar from '../component/navbar'
import Downloadmp3 from '../pages/downloadmp3'
import DownloadMp4 from '../pages/downloadmp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Spotify from '../pages/spotifyDownload'
function App() {
    const [tabs,setTabs]= useState("ytmp4")
    const el = useRef(null)
    const typed = useRef(null)

    useEffect(()=>{
        typed.current = new Typed(el.current,{
            strings: ['Made by Hambali Subastian'],
            typeSpeed:50,
            backSpeed:25,
            loop:true
        })
        return ()=>{
            typed.current.destroy()
        }
    },[])
    return (
        <>
        
     <Navbar>
        <a className={`nav-link btn ${tabs === 'ytmp4' ? 'active' : ''}`} aria-current="page"  href='#' onClick={()=>setTabs("ytmp4")} style={tabs==='ytmp4'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp4</a>
        <a className={`nav-link btn ${tabs === 'ytmp3' ? 'active' : ''}`} aria-current="page" href='#'  onClick={()=>setTabs("ytmp3")} style={tabs==='ytmp3'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp3</a>
        <a className={`nav-link btn ${tabs === 'spotify' ? 'active' : ''}`} aria-current="page" href='#'  onClick={()=>setTabs("spotify")} style={tabs==='spotify'?{cursor:'pointer',fontSize:'30px'}:{}}>SpotifyDl</a>
        </Navbar> 
    
       {tabs =='ytmp4' && <DownloadMp4/>}
       {tabs == 'ytmp3' && <Downloadmp3/>} 
       {tabs == 'spotify' && <Spotify/>} 
      
      {/* <DownloadComponent/> */}
     
      

   
       <h4 ref={el} align="center " style={{position:'relative',top:'14rem'}} className='mt-5'></h4>
        </>
    )
}

export default App
