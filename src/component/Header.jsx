import { useEffect, useRef } from 'react'
import Typed from 'typed.js'


function HeaderFormat(props){
    const el = useRef(null)
    useEffect(()=>{
        const typed = new Typed(el.current,{
            strings: ['<div>Made By Hambali subastian</div>'],
            typeSpeed:50,
            backSpeed:25,
            loop:true
        })
        return ()=>{
            typed.destroy()
        }
    },[])
    return(
        <div>
        <h1 align="center">Youtube Download {props.format}</h1>
        <h4 ref={el} align="center"></h4>
        </div>
        
    )
}
export default HeaderFormat