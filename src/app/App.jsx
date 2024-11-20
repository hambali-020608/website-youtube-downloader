
import { useState,useRef,useEffect } from 'react'
import '../App.css'
import Typed from 'typed.js'
import Navbar from '../component/navbar'
import Downloadmp3 from '../pages/downloadmp3'
import DownloadMp4 from '../pages/downloadmp4'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Benefit from '../component/benefit'
import Footer from '../component/footer'

function App() {
    const [tabs,setTabs]= useState("ytmp4")
   
    return (
        <>
        
     <Navbar>
        <a className={`nav-link btn ${tabs === 'ytmp4' ? 'active' : ''}`} aria-current="page"  href='#' onClick={()=>setTabs("ytmp4")} style={tabs==='ytmp4'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp4</a>
        <a className={`nav-link btn ${tabs === 'ytmp3' ? 'active' : ''}`} aria-current="page" href='#'  onClick={()=>setTabs("ytmp3")} style={tabs==='ytmp3'?{cursor:'pointer',fontSize:'30px'}:{}}>Youtube-mp3</a>
     
        </Navbar> 
    <main>
       {tabs =='ytmp4' && <DownloadMp4/>}
       {tabs == 'ytmp3' && <Downloadmp3/>} 
    
    <Benefit/>
    <Footer/>
    </main>
      
     
      

   
        </>
    )
}

export default App
