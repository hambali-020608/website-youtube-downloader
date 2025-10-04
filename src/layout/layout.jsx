import HeaderFormat from "../component/Header";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Layout({format, children}){
    return(
        <>   
            <HeaderFormat format={format} />
            <section 
                className="container search-section" 
                style={{
                    maxWidth: '1100px',
                    padding: '2rem 1rem',
                    position: 'relative'
                }}
            >
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>
                
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '10%',
                    width: '250px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                {/* Info Bar */}
                <div className="text-center mb-4" style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div className="d-inline-flex align-items-center gap-2 px-4 py-2 mb-3" style={{
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        borderRadius: '50px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: '#3b82f6',
                            display: 'inline-block',
                            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}></span>
                        <span style={{
                            color: 'var(--light-blue)',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            letterSpacing: '0.5px'
                        }}>
                            🚀 Fast & Free YouTube Downloader
                        </span>
                    </div>
                    
                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        marginBottom: '0',
                        fontWeight: '500'
                    }}>
                        📥 Enter your YouTube URL below and choose quality
                    </p>
                </div>

                {/* Main Content */}
                <div className="row g-3 align-items-center" style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    {children}
                </div>

                {/* Feature Pills */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4" style={{
                    position: 'relative',
                    zIndex: 1
                }}>
                    <div className="d-flex align-items-center gap-2 px-3 py-2" style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{fontSize: '1.1rem'}}>⚡</span>
                        <span style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                        }}>
                            Lightning Fast
                        </span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-2 px-3 py-2" style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{fontSize: '1.1rem'}}>🎬</span>
                        <span style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                        }}>
                            HD Quality
                        </span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-2 px-3 py-2" style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{fontSize: '1.1rem'}}>🔒</span>
                        <span style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                        }}>
                            Secure & Safe
                        </span>
                    </div>
                    
                    <div className="d-flex align-items-center gap-2 px-3 py-2" style={{
                        background: 'rgba(30, 41, 59, 0.6)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{fontSize: '1.1rem'}}>💎</span>
                        <span style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.85rem',
                            fontWeight: '500'
                        }}>
                            100% Free
                        </span>
                    </div>
                </div>
            </section>

            {/* Pulse Animation */}
            <style jsx>{`
                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </> 
    )
}

export default Layout;