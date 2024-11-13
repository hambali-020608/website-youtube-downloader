import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({format,children}){
    return(
          
<>   
        <HeaderFormat format={format}/>
        <section  className="container h-md-auto  h-sm-auto border  rounded-4 pb-lg-5 mx-auto w-75  d-flex border-dark  rounded bg-white p-2 flex-column" style={{paddingLeft:'10rem', top:'',marginTop:'-3rem'}}>
           <p className="ms-3">Input url nya di bawah sini</p>
        <div className="row">

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