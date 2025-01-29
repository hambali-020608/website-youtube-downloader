import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({format,children}){
    return(
        <>   
            <HeaderFormat format={format}/>
            <section className="container search-section w-75">
                <p className="text-muted mb-4">Enter your YouTube URL below</p>
                <div className="row g-3 align-items-center">
                    {children}
                </div>
            </section>
        </> 
    )
}
export default Layout;