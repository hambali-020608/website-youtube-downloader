
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
import YtSearch from '../pages/ytsearch'

function App() {
    const [tabs,setTabs]= useState("ytmp4")
   
    return (
        <>
        
     <Navbar>
        </Navbar> 
    <main>
       {tabs =='ytmp4' && <DownloadMp4/>}
       {tabs == 'ytmp3' && <Downloadmp3/>} 
       {tabs == 'ytsearch' && <YtSearch/>} 
    
    <Benefit/>
    <Footer/>
    </main>
      
     
      

   
        </>
    )
}

export default App
