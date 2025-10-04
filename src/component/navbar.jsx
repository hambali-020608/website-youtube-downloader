import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

function Navbar({children}){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });

    // Handle scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return(
    <>
      <nav 
        className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled 
            ? '2px solid rgba(59, 130, 246, 0.4)' 
            : '2px solid rgba(59, 130, 246, 0.2)',
          transition: 'all 0.3s ease',
          boxShadow: scrolled 
            ? '0 10px 40px rgba(0, 0, 0, 0.5)' 
            : '0 5px 20px rgba(0, 0, 0, 0.3)',
          padding: scrolled ? '0.5rem 0' : '1rem 0'
        }}
      >
        <div className="container">
          {/* Brand Logo */}
          <a 
            className="navbar-brand d-flex align-items-center" 
            href="#"
            style={{
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '12px',
              boxShadow: '0 5px 15px rgba(59, 130, 246, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.6)';
              e.currentTarget.style.transform = 'rotate(5deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(59, 130, 246, 0.4)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  fill="white" 
                  opacity="0.9"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h1 className='mb-0' style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: '800',
              letterSpacing: '-0.5px'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                YTDL
              </span>
              <span style={{
                color: '#f8fafc',
                fontWeight: '700'
              }}>
                -PROF
              </span>
            </h1>
          </a>

          {/* Toggler Button for Mobile */}
          
          {/* Offcanvas Menu */}
         
        </div>
      </nav>

      {/* Custom CSS for nav links */}
      <style jsx>{`
        .navbar-nav .nav-link {
          color: var(--text-secondary) !important;
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.6rem 1.2rem !important;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
        }

        .navbar-nav .nav-link:hover {
          color: var(--light-blue) !important;
          background: rgba(59, 130, 246, 0.1);
          transform: translateX(5px);
        }

        .navbar-nav .nav-link.active {
          color: var(--primary-blue) !important;
          background: rgba(59, 130, 246, 0.2);
        }

        .navbar-nav .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 0;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 0 3px 3px 0;
          transition: height 0.3s ease;
        }

        .navbar-nav .nav-link:hover::before,
        .navbar-nav .nav-link.active::before {
          height: 70%;
        }

        @media (min-width: 992px) {
          .navbar-nav {
            flex-direction: row !important;
          }

          .navbar-nav .nav-link {
            padding: 0.5rem 1rem !important;
          }

          .navbar-nav .nav-link:hover {
            transform: translateY(-2px);
          }

          .navbar-nav .nav-link::before {
            left: 50%;
            top: auto;
            bottom: 0;
            transform: translateX(-50%);
            width: 0;
            height: 3px;
            border-radius: 3px 3px 0 0;
          }

          .navbar-nav .nav-link:hover::before,
          .navbar-nav .nav-link.active::before {
            width: 80%;
            height: 3px;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar