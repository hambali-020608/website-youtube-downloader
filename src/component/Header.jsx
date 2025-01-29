import { useEffect, useRef } from 'react'
import '../App.css'
import Typed from 'typed.js'
import { AOS } from 'aos'
import 'aos/dist/aos.css'

function HeaderFormat(props){
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Download Video', 'Download Audio', 'Free & Easy'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);
    
    return(
        <header className="text-center header">
            <div className='header-content'>
                <h1 className='main-title'>YouTube <span className="highlight">Downloader</span> {props.format}</h1>
                <div className="type-wrap">
                    <span ref={el}></span>
                </div>
                <p className='header-description'>
                    Download your favorite YouTube videos with just one click. 
                    <br />Simply paste the URL below and click "Search"
                </p>
            </div>
        </header>
    )
}
export default HeaderFormat