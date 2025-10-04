import tutorial1 from "../../public/img/tutorial1.png";
import tutorial2 from "../../public/img/tutorial2.png";
import tutorial3 from "../../public/img/tutorial3.png";
import tutorial4 from "../../public/img/tutorial4.png";

export default function Tutorial({title}) {
  return (
    <>
      <section
        style={{ 
          minHeight: "100vh",
          padding: "4rem 0",
          position: "relative"
        }}
        id="tutorial"
      >
        {/* Header Section */}
        <h1 
          align="center" 
          className="pb-5" 
          data-aos="fade-up"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: 'var(--text-primary)'
          }}
        >
          <b>
            Cara Mendownload {title} Dengan YTDL
            <div 
              className='d-inline' 
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '800'
              }}
            >
              -PROF
            </div>
          </b>
        </h1>

        {/* Tutorial Container */}
        <div 
          className="container pt-5" 
          style={{
            background: 'rgba(30, 41, 59, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: '25px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {/* Step 1 */}
          <div className="row pt-5" data-aos="fade-right">
            <div className="col-12 col-lg-6 mb-4">
              <div style={{
                background: 'rgba(51, 65, 85, 0.6)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                height: '100%',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(59, 130, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white',
                  boxShadow: '0 5px 20px rgba(59, 130, 246, 0.6)',
                  border: '3px solid var(--bg-dark)'
                }}>
                  1
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📋</div>
                <h3 className="text-wrap" style={{
                  color: 'var(--light-blue)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Copy url dari youtube
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Copy url yang ingin {title} yang ingin anda unduh lalu, caranya
                  biasanya ada bagian bagikan lalu nanti akan muncul url youtube
                  nya, setelah muncul copy url tersebut.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
              }}
              >
                <img src={tutorial1.src} alt="Tutorial 1" className="w-100" style={{display: 'block'}} />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="row pt-5" data-aos="fade-left">
            <div className="col-12 col-lg-6 order-lg-1 mb-4">
              <div style={{
                background: 'rgba(51, 65, 85, 0.6)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                height: '100%',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 92, 246, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white',
                  boxShadow: '0 5px 20px rgba(139, 92, 246, 0.6)',
                  border: '3px solid var(--bg-dark)'
                }}>
                  2
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📌</div>
                <h3 style={{
                  color: 'var(--light-blue)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Paste url
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Setelah mengcopy url, anda paste hasil copy video youtube ke{" "}
                  <a 
                    href="https://ytdl-prof.vercel.app"
                    style={{
                      color: 'var(--primary-blue)',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}
                  >
                    ytdl-prof.vercel.app
                  </a>{" "}
                  lalu klik search. 
                  {title === "Audio" && (
                    <span style={{ color: 'var(--light-blue)', fontWeight: '600' }}>
                      {' '}jangan lupa pilih Youtube-Mp3 Di bagian paling atas
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = '#8b5cf6';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
              }}
              >
                <img src={tutorial2.src} alt="Tutorial 2" className="w-100" style={{display: 'block'}} />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="row pt-5" data-aos="fade-right">
            <div className="col-12 col-lg-6 mb-4">
              <div style={{
                background: 'rgba(51, 65, 85, 0.6)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                height: '100%',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#06b6d4';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(6, 182, 212, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white',
                  boxShadow: '0 5px 20px rgba(6, 182, 212, 0.6)',
                  border: '3px solid var(--bg-dark)'
                }}>
                  3
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
                <h3 style={{
                  color: 'var(--light-blue)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Tunggu Loading
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Tunggu loading hingga hasilnya muncul, jika {title} tidak muncul
                  setelah loading silahkan <b style={{color: 'var(--light-blue)'}}>refresh</b> browser anda lalu paste
                  ulang link anda dan klik search.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = '#06b6d4';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(6, 182, 212, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
              }}
              >
                <img src={tutorial3.src} alt="Tutorial 3" className="w-100" style={{display: 'block'}} />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="row pt-5 pb-5" data-aos="fade-left">
            <div className="col-12 col-lg-6 order-lg-1 mb-4">
              <div style={{
                background: 'rgba(51, 65, 85, 0.6)',
                padding: '2rem',
                borderRadius: '20px',
                border: '2px solid rgba(59, 130, 246, 0.3)',
                height: '100%',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(16, 185, 129, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '2rem',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: 'white',
                  boxShadow: '0 5px 20px rgba(16, 185, 129, 0.6)',
                  border: '3px solid var(--bg-dark)'
                }}>
                  4
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{
                  color: 'var(--light-blue)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1rem'
                }}>
                  Hasil {title} dan downloadnya
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Jika sudah maka akan seperti ini, akan muncul informasi {title} dan link untuk langsung mendownload {title} ke penyimpanan anda.
                  Klik <b style={{color: 'var(--light-blue)'}}>Download To Your Device</b> jika anda ingin mendownload
                  videonya.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-lg-0 mb-4">
              <div style={{
                borderRadius: '20px',
                overflow: 'hidden',
                border: '3px solid rgba(59, 130, 246, 0.3)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
              }}
              >
                <img src={tutorial4.src} alt="Tutorial 4" className="w-100" style={{display: 'block'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="container text-center mt-5" data-aos="fade-up">
          <div style={{
            background: 'rgba(59, 130, 246, 0.1)',
            padding: '2rem',
            borderRadius: '20px',
            border: '2px solid rgba(59, 130, 246, 0.3)',
            backdropFilter: 'blur(20px)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{
              color: 'var(--text-primary)',
              fontSize: '1.6rem',
              fontWeight: '700',
              marginBottom: '1rem'
            }}>
              Siap Download? 🚀
            </h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                padding: '0.9rem 2rem',
                borderRadius: '12px',
                border: 'none',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 35px rgba(59, 130, 246, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
              }}
            >
              ⬆️ Kembali ke Atas
            </button>
          </div>
        </div>
      </section>
    </>
  );
}