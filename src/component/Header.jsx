import { useEffect, useRef } from 'react'
import '../App.css'
import Typed from 'typed.js'
import { AOS } from 'aos'
import 'aos/dist/aos.css'



function HeaderFormat(props){

   
   
    return(
        <header className="text-center header">
            <div className='text-center'>
        <h1 className='fw-bold'  style={{fontSize:'50px'}}>YouTube Downloader {props.format}</h1>
        <p className='fw-bold lh-1 justify-content-center '  style={{}}>Mendownload video youtube dengan mudah, hanya copy url dari youtube, paste url nya di bawah sini dan klik “search”</p>
        </div>
        </header>
        
    )
}
export default HeaderFormat