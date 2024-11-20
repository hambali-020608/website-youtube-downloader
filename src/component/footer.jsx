import { useEffect, useRef } from "react"
import tiktok from '../../public/img/tiktok.svg'
import git from '../../public/img/git.svg'
import Typed from "typed.js"


export default function Footer(){
    const el = useRef(null)
    const typed = useRef(null)

    useEffect(()=>{
        typed.current = new Typed(el.current,{
            strings: ['Made by <b className="text-primary">@tyan.dev</b>'],
            typeSpeed:50,
            backSpeed:25,
            loop:true
        })
        return ()=>{
            typed.current.destroy()
        }
    },[])
    return(
        <footer className="bg-body-tertiary text-center">

  <div className="container p-4"></div>


  
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
    
    
  <h4 ref={el} ></h4>
  
  <h5>My Social Media: </h5> 
  <div className="d-flex justify-content-center pb-3">
     <a href="https://www.tiktok.com/@tyan.dev?is_from_webapp=1&sender_device=pc"> 
        <img src={tiktok.src} width="40px" alt="" className="me-3"/>
        </a>
    <a href="https://github.com/hambali-020608">
    <img src={git.src} width="40px" alt="" />
        </a>  
    

  </div>
  © 2024 <a className="text-body" href="https://ytdl-prof.vercel.app">YTDL-PROF</a>. All Rights Reserved.
  </div>

</footer>
    )
}