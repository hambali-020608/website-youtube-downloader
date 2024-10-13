import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "../component/navbar";

function Layout({format,children}){
    return(
          
<>   
        <HeaderFormat format={format}/>
        
        <section className="input-group border border-secondary rounded-4 hero-section">
            <b className="ms-3 mt-2">input url nya dibawah disini</b>
            <div className="section-div" >
  {children}
    </div>
</section>
</> 


    )
}
export default Layout;