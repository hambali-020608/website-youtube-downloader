import 'bootstrap/dist/css/bootstrap.min.css'

function Navbar({children}){
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">Profesor-Youtube</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="" id="navbarNavDropdown">
      <ul className="navbar-nav">
       {children}
      </ul>
    </div>
  </div>
</nav>
        
        </>
    )
}
export default Navbar