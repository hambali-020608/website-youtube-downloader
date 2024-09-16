import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'
import Downloadmp3 from './pages/downloadmp3'
import DownloadMp4 from './pages/downloadmp4'
import DownloadComponent from './pages/testing'
function App() {
    const [tabs,setTabs]= useState("ytmp4")
    return (
        <>
        <Navbar>
        <li className="nav-item">
          <a className={`nav-link btn ${tabs === 'ytmp4' ? 'active btn-primary' : ''}`} aria-current="page"  href='#' onClick={()=>setTabs("ytmp4")}>Youtube-mp4</a>
        </li>
        <li className="nav-item">
        <a className={`nav-link btn ${tabs === 'ytmp3' ? 'active btn-primary' : ''}`} aria-current="page" href='#'  onClick={()=>setTabs("ytmp3")}>Youtube-mp3</a>
        </li>
        </Navbar>
        <div className='d-flex justify-content-center m-5'>
      {tabs =='ytmp4' && <DownloadMp4/>}
      {tabs == 'ytmp3' && <Downloadmp3/>}
     
      

       </div>
        </>
    )
}

export default App
