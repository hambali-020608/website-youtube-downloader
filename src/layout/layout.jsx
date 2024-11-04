import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({format,children}){
    return(
          
<>   
        <HeaderFormat format={format}/>
        <section className="border  rounded-4 position-absolute top-100 start-50 translate-middle mt-1 d-flex border-dark w-75 h-25 hg-lg-25  rounded bg-white p-2 flex-column" style={{paddingLeft:'10rem', top:''}}>
           <p className="ms-3">Input url nya di bawah sini</p>
        <div className=" d-flex " style={{maxWidth:''}}>
 {children}
  </div>
  </section>
  
        {/* <div className="input-container ">
        <section className="input-group border border-secondary rounded-4 hero-section">
            <b className="ms-3 mt-2">input url nya dibawah disini</b>
            <div className="section-div" >
  {children}
    </div>
</section>
</div> */}
</> 


    )
}
export default Layout;