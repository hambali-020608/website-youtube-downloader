import tutorial1 from "../../public/img/tutorial1.png";
import tutorial2 from "../../public/img/tutorial2.png";
import tutorial3 from "../../public/img/tutorial3.png";
import tutorial4 from "../../public/img/tutorial4.png";
export default function Tutorial({title}) {
  return (
    <>
      {console.log(tutorial1)}
      <section
        className=""
        style={{ minHeight: "100vh" }}
        id="tutorial"
      >
        <h1 align="center" className="pb-5"><b>Cara Mendownload {title} Dengan YTDL-PROF</b></h1>

        <div className="container bg-body-secondary pt-5">
          <div className="row pt-5 ">
            <div className="col-12 col-lg-6">
              <h3 className="text-wrap">1. Copy url dari youtube</h3>
              <p className="text">
                Copy url yang ingin {title} yang ingin anda unduh lalu, caranya
                biasanya ada bagian bagikan lalu nanti akan muncul url youtube
                nya, setelah muncul copy url tersebut.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src={tutorial1.src} alt="" className="img-thumbnail w-100" />
            </div>
          </div>
{/* Card Kedua */}
          <div className="row pt-5">
            <div className="col-12 col-lg-6 order-lg-1">
              <h3> 2. Paste url </h3>
              <p >
                Setelah mengcopy url, anda paste hasil copy video youtube ke{" "}
                <a href="https://ytdl-prof.vercel.app">ytdl-prof.vercel.app</a>{" "}
                lalu klik search. 
                {title=="Audio" ?(
                    ' jangan lupa pilih Youtube-Mp3 Di bagian paling atas'
                ):''}
              </p>
            </div>
            <div className="col-12 col-lg-6 ">
              <img src={tutorial2.src} alt="" className="img-thumbnail w-100" />
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-12 col-lg-6">
              <h3>3. Tunggu Loading</h3>
              <p>
                Tunggu loading hingga hasilnya muncul, jika {title} tidak muncul
                setelah loading silahkan <b>refresh</b> browser anda lalu paste
                ulang link anda dan klik search.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <img src={tutorial3.src} alt="" className="img-thumbnail w-100" />
            </div>
          </div>

          <div className="row pt-5 pb-5">
            <div className="col-12 col-lg-6 order-lg-1">
              <h3>4. Hasil {title} dan downloadnya</h3>
              <p>
                Jika sudah maka akan seperti ini, akan muncul informasi {title}  dan link untuk langsung mendownload {title} ke penyimpanan anda.
                Klik <b>Download To Your Device</b> jika anda ingin mendownload
                videonya.
              </p>
            </div>
            <div className="col-12 col-lg-6 order-lg-0">

              <img src={tutorial4.src} alt="" className="img-thumbnail w-100" />
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
