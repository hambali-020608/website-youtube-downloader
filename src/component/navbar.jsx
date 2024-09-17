import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function Navbar({children}){
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-body-transparent" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{fontSize:"2rem", color:"white"}}>PROF-YT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
       {children}
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar