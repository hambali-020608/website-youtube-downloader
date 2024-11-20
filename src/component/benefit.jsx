import rocket from "../../public/img/rocket.svg";
import money from "../../public/img/money.svg";
import ads from "../../public/img/ads.svg";
import "../App.css";

export default function Benefit() {
  return (
    <section id="benefit" className="pt-5 mt-5">
      <h1 className="fw-bold text-center">
        Kenapa Harus YTDL<div className=" text-primary d-inline">-PROF</div>{" "}
      </h1>

      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-md-3 ">
          <div className="col  ">
            <div className="card text-center h-100 card-hover ">
              <img
                src={rocket.src}
                width="50px"
                height="50px"
                className=" m-auto pt-3 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title pb-2">Lebih Cepat</h5>
                <p className="card-text">Teknologi lebih cepat dan lebih canggih</p>
              </div>
            </div>
          </div>
          <div className="col mt-4 mt-lg-0">
            <div className="card text-center h-100 card-hover">
              <img
                src={ads.src}
                className="pt-3 m-auto card-img-top"
                alt="..."
                width="50px"
                height="50px"
              />
              <div className="card-body">
                <h5 className="card-title pb-2">Bebas Iklan</h5>
                <p className="card-text">
                  Aman dari virus dan download lebih mudah karna tidak ada
                  iklan.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 mt-4 mt-lg-0 text-center card-hover">
              <img
                src={money.src}
                width="50px"
                height="50px"
                className="m-auto pt-3 card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title pb-2">Gratis</h5>
                <p className="card-text">
                  Tidak memungut biaya dan tidak perlu login untuk mendownload
                  video atau audio youtube
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
