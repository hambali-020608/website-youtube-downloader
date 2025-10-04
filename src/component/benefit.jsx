import rocket from "../../public/img/rocket.svg";
import money from "../../public/img/money.svg";
import ads from "../../public/img/ads.svg";
import "../App.css";

export default function Benefit() {
  return (
    <section id="benefit" className="py-5 my-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3" style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--text-primary)'
          }}>
            Why Choose{" "}
            <span style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              YTDL-PROF
            </span>
            ?
          </h1>
          <p className="text-secondary" style={{fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto'}}>
            Experience the best YouTube downloading service with premium features
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1 - Lebih Cepat */}
          <div className="col">
            <div className="card text-center h-100 card-hover" style={{
              background: 'rgba(51, 65, 85, 0.8)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <div className="d-flex justify-content-center mb-4">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <img
                    src={rocket.src}
                    width="40px"
                    height="40px"
                    alt="Fast Speed"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(56%) sepia(94%) saturate(1815%) hue-rotate(201deg) brightness(103%) contrast(92%)'
                    }}
                  />
                </div>
              </div>
              <div className="card-body p-0">
                <h4 className="card-title mb-3" style={{
                  color: 'var(--light-blue)',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>
                  ⚡ Lightning Fast
                </h4>
                <p className="card-text" style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Advanced technology for faster and more efficient downloads. Get your videos in seconds!
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Bebas Iklan */}
          <div className="col">
            <div className="card text-center h-100 card-hover" style={{
              background: 'rgba(51, 65, 85, 0.8)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <div className="d-flex justify-content-center mb-4">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <img
                    src={ads.src}
                    width="40px"
                    height="40px"
                    alt="No Ads"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(56%) sepia(94%) saturate(1815%) hue-rotate(201deg) brightness(103%) contrast(92%)'
                    }}
                  />
                </div>
              </div>
              <div className="card-body p-0">
                <h4 className="card-title mb-3" style={{
                  color: 'var(--light-blue)',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>
                  🚫 Ad-Free Experience
                </h4>
                <p className="card-text" style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  Safe from viruses and easier downloads with no annoying advertisements. Pure downloading experience!
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Gratis */}
          <div className="col">
            <div className="card text-center h-100 card-hover" style={{
              background: 'rgba(51, 65, 85, 0.8)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <div className="d-flex justify-content-center mb-4">
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(59, 130, 246, 0.3)'
                }}>
                  <img
                    src={money.src}
                    width="40px"
                    height="40px"
                    alt="Free"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(56%) sepia(94%) saturate(1815%) hue-rotate(201deg) brightness(103%) contrast(92%)'
                    }}
                  />
                </div>
              </div>
              <div className="card-body p-0">
                <h4 className="card-title mb-3" style={{
                  color: 'var(--light-blue)',
                  fontWeight: '700',
                  fontSize: '1.5rem'
                }}>
                  💎 100% Free
                </h4>
                <p className="card-text" style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.7'
                }}>
                  No fees, no login required! Download YouTube videos and audio completely free forever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Feature Stats */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-4">
              <div className="text-center px-4">
                <h3 className="mb-1" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '800',
                  fontSize: '2rem'
                }}>
                  1M+
                </h3>
                <p className="text-secondary mb-0" style={{fontSize: '0.9rem'}}>Downloads</p>
              </div>
              <div className="text-center px-4">
                <h3 className="mb-1" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '800',
                  fontSize: '2rem'
                }}>
                  100K+
                </h3>
                <p className="text-secondary mb-0" style={{fontSize: '0.9rem'}}>Happy Users</p>
              </div>
              <div className="text-center px-4">
                <h3 className="mb-1" style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '800',
                  fontSize: '2rem'
                }}>
                  24/7
                </h3>
                <p className="text-secondary mb-0" style={{fontSize: '0.9rem'}}>Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}