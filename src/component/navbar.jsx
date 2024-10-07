import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import  AOS  from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function Navbar({children}){
  useEffect(() => {
    AOS.init();
  }, [])
    return(
        <>
   <nav class="navbar navbar-expand-lg bg-primary fixed-top">
  <div class="container">
    <a class="navbar-brand me-lg-5" href="#">
    <h1 className='fw-bold  '>YTDL<div className=' fw-bold text-white d-inline'>-PROF</div></h1> 
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
        <h1 className='fw-bold text-primary'>YTDL<div className=' fw-bold text-dark d-inline'>-PROF</div></h1> 
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div className='navbar-nav'>
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