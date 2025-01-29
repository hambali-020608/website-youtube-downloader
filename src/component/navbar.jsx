import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Navbar({children}){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <h1 className='mb-0'>
                <span className='fw-bold text-primary'>YTDL</span>
                <span className='fw-bold text-dark'>-PROF</span>
              </h1>
            </a>
            <button 
              className="navbar-toggler border-0" 
              type="button" 
              data-bs-toggle="offcanvas" 
              data-bs-target="#offcanvasNavbar" 
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div 
              className="offcanvas offcanvas-end border-0" 
              tabIndex="-1" 
              id="offcanvasNavbar" 
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header border-bottom">
                <h1 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <span className='fw-bold text-primary'>YTDL</span>
                  <span className='fw-bold text-dark'>-PROF</span>
                </h1>
                <button 
                  type="button" 
                  className="btn-close" 
                  data-bs-dismiss="offcanvas" 
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className='navbar-nav ms-auto'>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </nav>
        </>
    )
}
export default Navbar