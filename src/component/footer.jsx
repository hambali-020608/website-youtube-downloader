import { useEffect, useRef } from "react"
import tiktok from '../../public/img/tiktok.svg'
import git from '../../public/img/git.svg'
import Typed from "typed.js"

export default function Footer(){
    const el = useRef(null)
    const typed = useRef(null)

    useEffect(()=>{
        typed.current = new Typed(el.current,{
            strings: ['Made with ❤️ by <span style="color: #3b82f6; font-weight: 700;">@tyan.dev</span>', 'Fast & Reliable 🚀', 'Always Free 💎'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            backDelay: 2000
        })
        return ()=>{
            typed.current.destroy()
        }
    },[])
    
    return(
        <footer style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            borderTop: '2px solid rgba(59, 130, 246, 0.2)',
            marginTop: '5rem'
        }}>
            <div className="container py-5">
                {/* Main Footer Content */}
                <div className="row g-4">
                    {/* Brand Section */}
                    <div className="col-lg-4">
                        <h2 className="mb-3" style={{
                            background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            fontWeight: '800'
                        }}>
                            YTDL-PROF
                        </h2>
                        <p className="text-secondary" style={{lineHeight: '1.7'}}>
                            Your trusted YouTube downloader. Fast, free, and easy to use. Download videos and audio in high quality without any hassle.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-4" style={{
                            color: 'var(--light-blue)',
                            fontWeight: '700'
                        }}>
                            Quick Links
                        </h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <a href="#" style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                   onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    🏠 Home
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#benefit" style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                   onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    ⭐ Features
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#tutorial" style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-blue)'}
                                   onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                                    📖 Tutorial
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div className="col-lg-4 col-md-6">
                        <h5 className="mb-4" style={{
                            color: 'var(--light-blue)',
                            fontWeight: '700'
                        }}>
                            Connect With Us
                        </h5>
                        <div className="d-flex gap-3 mb-3">
                            <a href="https://www.tiktok.com/@tyan.dev?is_from_webapp=1&sender_device=pc" 
                               target="_blank"
                               rel="noopener noreferrer"
                               style={{
                                   width: '50px',
                                   height: '50px',
                                   borderRadius: '12px',
                                   background: 'rgba(59, 130, 246, 0.1)',
                                   border: '2px solid rgba(59, 130, 246, 0.3)',
                                   display: 'flex',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                                   transition: 'all 0.3s ease'
                               }}
                               onMouseEnter={(e) => {
                                   e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                                   e.currentTarget.style.transform = 'translateY(-5px)';
                                   e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
                               }}
                               onMouseLeave={(e) => {
                                   e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                   e.currentTarget.style.transform = 'translateY(0)';
                                   e.currentTarget.style.boxShadow = 'none';
                               }}>
                                <img src={tiktok.src} width="28px" alt="TikTok" style={{
                                    filter: 'brightness(0) saturate(100%) invert(56%) sepia(94%) saturate(1815%) hue-rotate(201deg) brightness(103%) contrast(92%)'
                                }}/>
                            </a>
                            <a href="https://github.com/hambali-020608"
                               target="_blank"
                               rel="noopener noreferrer"
                               style={{
                                   width: '50px',
                                   height: '50px',
                                   borderRadius: '12px',
                                   background: 'rgba(59, 130, 246, 0.1)',
                                   border: '2px solid rgba(59, 130, 246, 0.3)',
                                   display: 'flex',
                                   alignItems: 'center',
                                   justifyContent: 'center',
                                   transition: 'all 0.3s ease'
                               }}
                               onMouseEnter={(e) => {
                                   e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                                   e.currentTarget.style.transform = 'translateY(-5px)';
                                   e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.4)';
                               }}
                               onMouseLeave={(e) => {
                                   e.currentTarget.style.background = 'rgba(59, 130, 246, 0.1)';
                                   e.currentTarget.style.transform = 'translateY(0)';
                                   e.currentTarget.style.boxShadow = 'none';
                               }}>
                                <img src={git.src} width="28px" alt="GitHub" style={{
                                    filter: 'brightness(0) saturate(100%) invert(56%) sepia(94%) saturate(1815%) hue-rotate(201deg) brightness(103%) contrast(92%)'
                                }}/>
                            </a>
                        </div>
                        <p className="text-secondary" style={{fontSize: '0.9rem'}}>
                            Follow us for updates and news!
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <hr style={{
                    borderColor: 'rgba(59, 130, 246, 0.2)',
                    margin: '2rem 0'
                }}/>

                {/* Bottom Footer */}
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <h5 ref={el} className="mb-0" style={{
                            color: 'var(--text-primary)',
                            fontSize: '1.1rem'
                        }}></h5>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <p className="mb-0 text-secondary" style={{fontSize: '0.95rem'}}>
                            © 2024 <a href="https://ytdl-prof.vercel.app" style={{
                                color: 'var(--primary-blue)',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>YTDL-PROF</a>. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}