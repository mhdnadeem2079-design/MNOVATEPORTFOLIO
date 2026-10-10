import { useState } from 'react';
import { 
  Terminal, Video, Palette, 
  Sparkles, Globe, Home,
  Smartphone, Search, Camera, Megaphone, Share2
} from 'lucide-react';
import { works } from './data/works';
import './App.css';

export default function App() {
  const [selectedWorkId, setSelectedWorkId] = useState(null);

  const handleCardClick = (id) => {
    setSelectedWorkId(id);
  };

  const selectedWork = works.find(w => w.id === selectedWorkId);
  const isMotionSection = selectedWorkId && selectedWorkId.startsWith('reel');
  const isDesignSection = selectedWorkId && selectedWorkId.startsWith('post');
  const isTechSection   = selectedWorkId && selectedWorkId.startsWith('prod');

  // ─── Motion Section ───────────────────────────────────────────────────────
  if (isMotionSection) {
    const shortformVideos = [
      { id: 'sf-1', title: '80/20 Rule for Creators', video: '/edits/80_20 Rule for Creators -15sec.mp4', glowColor: '#cf5a1d' },
      { id: 'sf-2', title: 'Mr. B Showreel', video: '/edits/mr B 20sec.mp4', glowColor: '#9e1a1a' },
      { id: 'sf-3', title: 'Pasupati Travel Vlog', video: '/edits/pasupati travel 20sec.mp4', glowColor: '#cf5a1d' },
      { id: 'sf-4', title: 'Client Showcase', video: '/edits/Client wrk Linked Comp 02_10.mp4', glowColor: '#9e1a1a' },
      { id: 'sf-5', title: 'Glow Radiant Edit', video: '/edits/Glow radiant Linked Comp 01_1.mp4', glowColor: '#cf5a1d' },
      { id: 'sf-6', title: 'Radiant Series I', video: '/edits/Radiant 1 Linked Comp 01_4.mp4', glowColor: '#9e1a1a' },
      { id: 'sf-7', title: 'Radiant Series V', video: '/edits/Radiant 5 Linked Comp 01.mp4', glowColor: '#cf5a1d' },
      { id: 'sf-8', title: 'Respect Motion Edit', video: '/edits/Respect Linked Comp 01.mp4', glowColor: '#9e1a1a' },
      { id: 'sf-9', title: 'Sunscreen Commercial', video: '/edits/Sunscream Linked Comp 01.mp4', glowColor: '#cf5a1d' },
      { id: 'sf-10', title: 'Client Testimonial', video: '/edits/Testimonial Linked Comp 01.mp4', glowColor: '#9e1a1a' },
      { id: 'sf-11', title: 'Shampoo Brand Spot', video: '/edits/shampoo Linked Comp 01.mp4', glowColor: '#cf5a1d' }
    ];
    const doubledShortforms = [...shortformVideos, ...shortformVideos];
    const podcastVideo = { id: 'pod-1', title: 'Hiring Team & Scalable Systems', topic: 'Scaling operations & building custom scalable platforms.', duration: '0:50', video: '/edits/Hiring team & building scalable systems 50sec.mp4' };

    return (
      <div className="portfolio-wrapper" style={{ backgroundColor: '#FF1818' }}>
        <div className="project-detail-page motion-archive-direct">
          <button className="detail-back-button direct-theme" onClick={() => setSelectedWorkId(null)}>← Back to Works</button>
          <div className="motion-archive-header">
            <h1 className="motion-archive-main-title direct-theme">Motion Archives</h1>
          </div>
          <div className="motion-scroll-content direct-theme">
            <div className="motion-content-columns">
              <div className="motion-left-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 01</span>
                  <h2 className="motion-section-title direct-theme">Shortform Videos</h2>
                  <p className="motion-section-desc direct-theme">Continuous infinite loop marquee. Hover to pause.</p>
                </div>
                <div className="shortform-marquee-container">
                  <div className="shortform-marquee-track">
                    {doubledShortforms.map((video, idx) => (
                      <div key={`${video.id}-${idx}`} className="shortform-card direct-theme marquee-card" style={{ '--glow-color': video.glowColor }}>
                        <div className="shortform-glow-backdrop" />
                        <video 
                          src={video.video} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          preload="metadata"
                          className="shortform-video-element" 
                          onLoadedMetadata={(e) => {
                            try {
                              if (e.target.duration) {
                                e.target.currentTime = (idx * 3.5) % e.target.duration;
                              }
                            } catch (err) {
                              console.warn(err);
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="motion-right-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 02</span>
                  <h2 className="motion-section-title direct-theme">Podcast Video</h2>
                  <p className="motion-section-desc direct-theme">Featured conversation covering user interfaces and modern tech strategies.</p>
                </div>
                <div className="podcast-card direct-theme single-podcast-card">
                  <div className="podcast-thumbnail-pane large-thumb">
                    <video src={podcastVideo.video} autoPlay loop muted playsInline preload="metadata" className="podcast-thumb-video" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mobile Bottom Navigation */}
        <div className="mobile-bottom-nav mobile-only">
          <div className="mini-nav-dock">
            <div className={`mini-nav-item ${!selectedWorkId ? 'active' : ''}`} onClick={() => setSelectedWorkId(null)}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-home" />
                <div className="mini-folder-body body-home">
                  <Home size={12} className="text-white" />
                  <span className="mini-label">Home</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isTechSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('prod-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-tech" />
                <div className="mini-folder-body body-tech">
                  <Terminal size={12} className="text-cyan" />
                  <span className="mini-label">Tech</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isMotionSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('reel-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-motion" />
                <div className="mini-folder-body body-motion">
                  <Video size={12} className="text-pink" />
                  <span className="mini-label">Motion</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isDesignSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('post-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-design" />
                <div className="mini-folder-body body-design">
                  <Palette size={12} className="text-orange" />
                  <span className="mini-label">Designs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-flames-decor">
          <img src="/Flamesbg.png" alt="Flames Background" draggable="false" loading="eager" decoding="async" className="bottom-flames-image" />
        </div>
      </div>
    );
  }

  // ─── Design Section ───────────────────────────────────────────────────────
  if (isDesignSection) {
    const igPosts = [
      { id: 'ig-1', image: '/poster/5 Product carousel.jpg', caption: 'Product Carousel 01' },
      { id: 'ig-2', image: '/poster/5 Product carousel-2.jpg', caption: 'Product Carousel 02' },
      { id: 'ig-3', image: '/poster/Carousel_1.jpg', caption: 'Carousel Slide 01' },
      { id: 'ig-4', image: '/poster/Carousel_2.jpg', caption: 'Carousel Slide 02' },
      { id: 'ig-5', image: '/poster/Carousel_3.jpg', caption: 'Carousel Slide 03' },
      { id: 'ig-6', image: '/poster/Branding1.jpg', caption: 'Branding 01' },
      { id: 'ig-7', image: '/poster/Branding2.jpg', caption: 'Branding 02' },
    ];
    // Multiple instances for guaranteed seamless fill across any viewport
    const tripleIgPosts = [...igPosts, ...igPosts, ...igPosts];

    const squarePosts = [
      { id: 'sq-1', title: 'Independence Day Special', client: 'Festival Series', image: '/poster/Independence Day Poster.png' },
      { id: 'sq-2', title: 'Live VBS Broadcast', client: 'Event Design', image: '/poster/LIVE_POSTER_VBS.png' },
      { id: 'sq-3', title: 'Milad Festival Edition', client: 'Cultural Art', image: '/poster/Milad Poster-6.png' },
      { id: 'sq-4', title: 'Onam Celebration 7', client: 'Seasonal Poster', image: '/poster/Onam 7.png' },
      { id: 'sq-5', title: 'Creative Layout 04', client: 'Visual Studio', image: '/poster/Post-4.png' },
      { id: 'sq-6', title: 'Creative Artwork 05', client: 'Brand Edition', image: '/poster/Poster5.png' },
      { id: 'sq-7', title: 'Leymoon Studio I', client: 'Mnovate Lab', image: '/poster/Leymoon1.jpg' },
      { id: 'sq-8', title: 'Leymoon Studio II', client: 'Genesis Conf', image: '/poster/Leymoon2.jpg' },
    ];
    const tripleSquarePosts = [...squarePosts, ...squarePosts];

    return (
      <div className="portfolio-wrapper" style={{ backgroundColor: '#FF1818' }}>
        <div className="project-detail-page motion-archive-direct">
          <button className="detail-back-button direct-theme" onClick={() => setSelectedWorkId(null)}>← Back to Works</button>

          <div className="motion-archive-header">
            <h1 className="motion-archive-main-title direct-theme">Design Archives</h1>
          </div>

          <div className="motion-scroll-content direct-theme">
            <div className="motion-content-columns design-columns">
              <div className="motion-left-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 01</span>
                  <h2 className="motion-section-title direct-theme">Carousel Posts</h2>
                  <p className="motion-section-desc direct-theme">Instagram-style cards — hover to pause.</p>
                </div>

                <div className="dh-marquee-wrapper">
                  <div className="dh-marquee-track dh-speed-normal">
                    {tripleIgPosts.map((post, idx) => (
                      <div key={`${post.id}-${idx}`} className="design-carousel-card">
                        <img src={post.image} alt={post.caption} loading={idx < 4 ? "eager" : "lazy"} decoding="async" className="design-carousel-img" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="motion-right-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 02</span>
                  <h2 className="motion-section-title direct-theme">Normal Posters</h2>
                  <p className="motion-section-desc direct-theme">Square artwork frames — scrolling vertically upwards.</p>
                </div>
                <div className="vertical-marquee-container">
                  <div className="vertical-marquee-track">
                    {tripleSquarePosts.map((post, idx) => (
                      <div key={`${post.id}-${idx}`} className="design-square-card">
                        <img src={post.image} alt={post.title} loading={idx < 4 ? "eager" : "lazy"} decoding="async" className="design-square-img" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Floating Mobile Bottom Navigation */}
        <div className="mobile-bottom-nav mobile-only">
          <div className="mini-nav-dock">
            <div className={`mini-nav-item ${!selectedWorkId ? 'active' : ''}`} onClick={() => setSelectedWorkId(null)}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-home" />
                <div className="mini-folder-body body-home">
                  <Home size={12} className="text-white" />
                  <span className="mini-label">Home</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isTechSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('prod-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-tech" />
                <div className="mini-folder-body body-tech">
                  <Terminal size={12} className="text-cyan" />
                  <span className="mini-label">Tech</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isMotionSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('reel-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-motion" />
                <div className="mini-folder-body body-motion">
                  <Video size={12} className="text-pink" />
                  <span className="mini-label">Motion</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isDesignSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('post-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-design" />
                <div className="mini-folder-body body-design">
                  <Palette size={12} className="text-orange" />
                  <span className="mini-label">Designs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-flames-decor">
          <img src="/Flamesbg.png" alt="Flames Background" draggable="false" className="bottom-flames-image" />
        </div>
      </div>
    );
  }


  // ─── Tech / Website Section ────────────────────────────────────────────────
  if (isTechSection) {
    // Row 01 — Browser-frame style web app cards (MOV, RHL, VBS alternating with other web projects)
    const webApps = [
      { id: 'wa-mov-1', name: 'Cinema Motion', type: 'Streaming App', stack: 'React · HLS', desc: 'High-speed media streaming platform.', color: '#1a0c10', image: '/web/MOV.png', url: 'mnovate.in / cinema-motion' },
      { id: 'wa-1', name: 'Aether Pay', type: 'Web App', stack: 'React · Node', desc: 'Multi-chain payment interfaces.', color: '#0f172a', image: '/web/CC1.jpg', url: 'mnovate.in / aether-pay' },
      { id: 'wa-rhl-1', name: 'RHL Network', type: 'Web System', stack: 'React · Node', desc: 'Custom enterprise web portal.', color: '#064e3b', image: '/web/RHL.png', url: 'mnovate.in / rhl-network' },
      { id: 'wa-2', name: 'Veloce AI', type: 'AI Dashboard', stack: 'Next.js · Python', desc: 'Predictive analytics in realtime.', color: '#0c1a2e', image: '/web/CHA.jpg', url: 'mnovate.in / veloce-ai' },
      { id: 'wa-vbs-1', name: 'VBS Stream Portal', type: 'Live Platform', stack: 'React · WebRTC', desc: 'Live event streaming platform.', color: '#4c1d95', image: '/web/VBS.png', url: 'mnovate.in / vbs-stream' },
      { id: 'wa-3', name: 'Zenith Tool', type: 'SaaS App', stack: 'Vite · Supabase', desc: 'Team workflow automation.', color: '#110d24', image: '/web/PFK.jpg', url: 'mnovate.in / zenith-tool' },
      { id: 'wa-mov-2', name: 'Cinema Motion', type: 'Streaming App', stack: 'React · HLS', desc: 'High-speed media streaming platform.', color: '#1a0c10', image: '/web/MOV.png', url: 'mnovate.in / cinema-motion' },
      { id: 'wa-4', name: 'Flux Studio', type: 'Design Tool', stack: 'React · WebGL', desc: 'Real-time collaborative canvas.', color: '#0a1f1f', image: '/web/PFM.jpg', url: 'mnovate.in / flux-studio' },
      { id: 'wa-rhl-2', name: 'RHL Network', type: 'Web System', stack: 'React · Node', desc: 'Custom enterprise web portal.', color: '#064e3b', image: '/web/RHL.png', url: 'mnovate.in / rhl-network' },
      { id: 'wa-7', name: 'Marketing Portal', type: 'Growth Platform', stack: 'Next.js · Tailwind', desc: 'Enterprise marketing portal.', color: '#1f0a17', image: '/web/MAR.jpg', url: 'mnovate.in / marketing-portal' },
      { id: 'wa-vbs-2', name: 'VBS Stream Portal', type: 'Live Platform', stack: 'React · WebRTC', desc: 'Live event streaming platform.', color: '#4c1d95', image: '/web/VBS.png', url: 'mnovate.in / vbs-stream' },
      { id: 'wa-8', name: 'Mnovate Platform', type: 'Agency Hub', stack: 'React · Framer', desc: 'Custom agency digital suite.', color: '#1a170c', image: '/web/MN2.jpg', url: 'mnovate.in / mnovate-agency' },
      { id: 'wa-mov-3', name: 'Cinema Motion', type: 'Streaming App', stack: 'React · HLS', desc: 'High-speed media streaming platform.', color: '#1a0c10', image: '/web/MOV.png', url: 'mnovate.in / cinema-motion' },
      { id: 'wa-9', name: 'Frontier Studio', type: 'Creative Web', stack: 'WebGL · Three.js', desc: 'Immersive web experience.', color: '#0c1a17', image: '/web/MNF.jpg', url: 'mnovate.in / frontier-studio' },
      { id: 'wa-rhl-3', name: 'RHL Network', type: 'Web System', stack: 'React · Node', desc: 'Custom enterprise web portal.', color: '#064e3b', image: '/web/RHL.png', url: 'mnovate.in / rhl-network' },
      { id: 'wa-5', name: 'Nova CMS', type: 'Content Mgmt', stack: 'Next.js · Mongo', desc: 'Headless CMS built for speed.', color: '#1a0f0f', image: '/web/DA1.jpg', url: 'mnovate.in / nova-cms' },
      { id: 'wa-vbs-3', name: 'VBS Stream Portal', type: 'Live Platform', stack: 'React · WebRTC', desc: 'Live event streaming platform.', color: '#4c1d95', image: '/web/VBS.png', url: 'mnovate.in / vbs-stream' },
      { id: 'wa-6', name: 'Orbit Analytics', type: 'Data Platform', stack: 'Vue · D3.js', desc: 'Visual data intelligence suite.', color: '#0d1a0d', image: '/web/LE.jpg', url: 'mnovate.in / orbit-analytics' }
    ];
    const tripleWebApps = [...webApps, ...webApps];

    // Row 02 — Tech stack / feature pill cards
    const techCards = [
      { id: 'tc-1', label: 'React', accent: '#61dafb', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )},
      { id: 'tc-2', label: 'Next.js', accent: '#ffffff', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M7.5 16.5V7.5L16.2 16.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )},
      { id: 'tc-3', label: 'Node.js', accent: '#68a063', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
          <path d="M12 22V12" />
          <path d="M12 12l8.5-5" />
          <path d="M12 12L3.5 7" />
        </svg>
      )},
      { id: 'tc-4', label: 'Supabase', accent: '#3ecf8e', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="currentColor">
          <path d="M13.4 2L4.3 12.3c-.4.5-.1 1.3.6 1.3H12l-1.4 8.3c-.1.7.7 1.1 1.1.6l9.1-10.3c.4-.5.1-1.3-.6-1.3H12l1.4-8.3c.1-.7-.7-1.1-1.1-.6z" />
        </svg>
      )},
      { id: 'tc-5', label: 'WebGL', accent: '#ff6b35', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )},
      { id: 'tc-6', label: 'Framer', accent: '#e060ff', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="currentColor">
          <path d="M5 2h14v6H5l7 7v7l7-7V8H5z" />
        </svg>
      )},
      { id: 'tc-7', label: 'TypeScript', accent: '#3178c6', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <text x="7.5" y="15.5" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10.5" fill="currentColor" stroke="none">TS</text>
        </svg>
      )},
      { id: 'tc-8', label: 'Tailwind', accent: '#38bdf8', icon: (
        <svg viewBox="0 0 24 24" className="tech-stack-svg" fill="currentColor">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.595,15.153,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.336,6.205,14.849,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.191,2.664,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.336,13.405,8.849,12,6.001,12z" />
        </svg>
      )},
    ];

    return (
      <div className="portfolio-wrapper" style={{ backgroundColor: '#FF1818' }}>
        <div className="project-detail-page motion-archive-direct">
          <button className="detail-back-button direct-theme" onClick={() => setSelectedWorkId(null)}>← Back to Works</button>

          <div className="motion-archive-header">
            <h1 className="motion-archive-main-title direct-theme">Tech Archives</h1>
          </div>

          <div className="motion-scroll-content direct-theme">
            <div className="motion-content-columns tech-columns">

              {/* Column 01 — Web Projects */}
              <div className="motion-left-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 01</span>
                  <h2 className="motion-section-title direct-theme">Web Projects</h2>
                  <p className="motion-section-desc direct-theme">Browser-frame project cards — hover to pause.</p>
                </div>

                <div className="dh-marquee-wrapper">
                  <div className="dh-marquee-track dh-speed-normal">
                    {tripleWebApps.map((app, idx) => (
                      <div key={`${app.id}-${idx}`} className="tech-browser-card" style={{ '--card-bg': app.color }}>
                        {/* Browser chrome bar */}
                        <div className="tbc-chrome">
                          <div className="tbc-dots">
                            <span className="tbc-dot tbc-red" />
                            <span className="tbc-dot tbc-yellow" />
                            <span className="tbc-dot tbc-green" />
                          </div>
                          <div className="tbc-url-bar">{app.url || 'mnovate.in / projects'}</div>
                        </div>
                        {/* Screenshot area */}
                        <div className="tbc-screen">
                          <img src={app.image} alt={app.name} loading={idx < 3 ? "eager" : "lazy"} decoding="async" className="tbc-img" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 02 — Tech Stack Grid inside a prominent card */}
              <div className="motion-right-column">
                <div className="motion-section-header">
                  <span className="motion-section-pill direct-theme">Section 02</span>
                  <h2 className="motion-section-title direct-theme">Tech Stack</h2>
                  <p className="motion-section-desc direct-theme">Core technologies and frameworks we leverage.</p>
                </div>
                
                <div className="podcast-card direct-theme single-podcast-card single-tech-stack-card">
                  <div className="tech-stack-grid-container">
                    {techCards.map((tc) => (
                      <div key={tc.id} className="tech-stack-pill" style={{ '--pill-accent': tc.accent }} title={tc.label}>
                        <span className="tsp-icon">{tc.icon}</span>
                        <div className="tsp-glow" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Floating Mobile Bottom Navigation */}
        <div className="mobile-bottom-nav mobile-only">
          <div className="mini-nav-dock">
            <div className={`mini-nav-item ${!selectedWorkId ? 'active' : ''}`} onClick={() => setSelectedWorkId(null)}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-home" />
                <div className="mini-folder-body body-home">
                  <Home size={12} className="text-white" />
                  <span className="mini-label">Home</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isTechSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('prod-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-tech" />
                <div className="mini-folder-body body-tech">
                  <Terminal size={12} className="text-cyan" />
                  <span className="mini-label">Tech</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isMotionSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('reel-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-motion" />
                <div className="mini-folder-body body-motion">
                  <Video size={12} className="text-pink" />
                  <span className="mini-label">Motion</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isDesignSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('post-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-design" />
                <div className="mini-folder-body body-design">
                  <Palette size={12} className="text-orange" />
                  <span className="mini-label">Designs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-flames-decor">
          <img src="/Flamesbg.png" alt="Flames Background" draggable="false" className="bottom-flames-image" />
        </div>
      </div>
    );
  }

  // ─── Generic Project Detail ───────────────────────────────────────────────

  if (selectedWork) {
    return (
      <div className="portfolio-wrapper" style={{ backgroundColor: '#FF1818' }}>
        <div className="project-detail-page">
          <div className="detail-card-wrapper">
            <button className="detail-back-button" onClick={() => setSelectedWorkId(null)}>← Back to Works</button>
            <div className="detail-content-grid">
              <div className="detail-info-pane">
                <span className="detail-pill">{selectedWork.type}</span>
                <h1 className="detail-title">{selectedWork.title}</h1>
                <p className="detail-subtitle">{selectedWork.subtitle || selectedWork.description}</p>
                <p className="detail-long-desc">{selectedWork.longDescription || selectedWork.concept || selectedWork.description}</p>
                {selectedWork.tech && (
                  <div className="detail-tech-tags">
                    {selectedWork.tech.map((t, idx) => <span key={idx} className="tech-tag">{t}</span>)}
                  </div>
                )}
                {selectedWork.metrics && Array.isArray(selectedWork.metrics) && (
                  <div className="detail-metrics">
                    {selectedWork.metrics.map((m, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-value">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                {selectedWork.metrics && !Array.isArray(selectedWork.metrics) && (
                  <div className="detail-metrics">
                    {selectedWork.metrics.views && <div className="metric-box"><span className="metric-value">{selectedWork.metrics.views}</span><span className="metric-label">Views</span></div>}
                    {selectedWork.metrics.likes && <div className="metric-box"><span className="metric-value">{selectedWork.metrics.likes}</span><span className="metric-label">Likes</span></div>}
                  </div>
                )}
                {selectedWork.links && selectedWork.links.live && selectedWork.links.live !== '#' && (
                  <div className="detail-links">
                    <a href={selectedWork.links.live} target="_blank" rel="noopener noreferrer" className="detail-link-btn">Visit Live Site</a>
                  </div>
                )}
              </div>
              <div className="detail-media-pane">
                {selectedWork.videoUrl
                  ? <video src={selectedWork.videoUrl} autoPlay loop muted playsInline className="detail-media-video" />
                  : <img src={selectedWork.image} alt={selectedWork.title} className="detail-media-img" />}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Mobile Bottom Navigation */}
        <div className="mobile-bottom-nav mobile-only">
          <div className="mini-nav-dock">
            <div className={`mini-nav-item ${!selectedWorkId ? 'active' : ''}`} onClick={() => setSelectedWorkId(null)}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-home" />
                <div className="mini-folder-body body-home">
                  <Home size={12} className="text-white" />
                  <span className="mini-label">Home</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isTechSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('prod-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-tech" />
                <div className="mini-folder-body body-tech">
                  <Terminal size={12} className="text-cyan" />
                  <span className="mini-label">Tech</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isMotionSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('reel-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-motion" />
                <div className="mini-folder-body body-motion">
                  <Video size={12} className="text-pink" />
                  <span className="mini-label">Motion</span>
                </div>
              </div>
            </div>
            <div className={`mini-nav-item ${isDesignSection ? 'active' : ''}`} onClick={() => setSelectedWorkId('post-1')}>
              <div className="mini-folder">
                <div className="mini-folder-tab tab-design" />
                <div className="mini-folder-body body-design">
                  <Palette size={12} className="text-orange" />
                  <span className="mini-label">Designs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-flames-decor">
          <img src="/Flamesbg.png" alt="Flames Background" draggable="false" className="bottom-flames-image" />
        </div>
      </div>
    );
  }

  // ─── Home / Folders Grid ──────────────────────────────────────────────────
  return (
    <div className="portfolio-wrapper" style={{ backgroundColor: '#FF1818' }}>
      <div className="folder-app-container">
        <div className="portfolio-content-block">
          <h2 className="folder-hint-title">See our works</h2>
          <div className="folders-grid">

            {/* Folder 1: Web & Development */}
            <div className="interactive-folder-wrapper" onClick={() => handleCardClick('prod-1')}>
              <div className="folder-card card-left" onClick={(e) => { e.stopPropagation(); handleCardClick('prod-1'); }}>
                <div className="fcard-header"><Globe className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Web</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Website Development</h3>
                </div>
              </div>
              <div className="folder-card card-center" onClick={(e) => { e.stopPropagation(); handleCardClick('prod-2'); }}>
                <div className="fcard-header"><Smartphone className="fcard-icon-lucide" size={18} /><span className="fcard-pill">App</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">App Development</h3>
                </div>
              </div>
              <div className="folder-card card-right" onClick={(e) => { e.stopPropagation(); handleCardClick('prod-3'); }}>
                <div className="fcard-header"><Search className="fcard-icon-lucide" size={18} /><span className="fcard-pill">SEO</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">On-Page SEO</h3>
                  <h4 className="fcard-sub-service">Off-Page SEO</h4>
                </div>
              </div>
              <div className="folder-front">
                <div className="folder-front-tab" />
                <div className="folder-front-body">
                  <div className="folder-front-title"><Terminal className="folder-front-icon text-cyan" size={20} /> Web & Dev</div>
                  <div className="folder-front-subtitle">mnovate.in / webapps</div>
                </div>
              </div>
            </div>

            {/* Folder 2: Video Production */}
            <div className="interactive-folder-wrapper" onClick={() => handleCardClick('reel-1')}>
              <div className="folder-card card-left" onClick={(e) => { e.stopPropagation(); handleCardClick('reel-1'); }}>
                <div className="fcard-header"><Video className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Video</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Video Production</h3>
                  <h4 className="fcard-sub-service">Video Editing</h4>
                </div>
              </div>
              <div className="folder-card card-center" onClick={(e) => { e.stopPropagation(); handleCardClick('reel-2'); }}>
                <div className="fcard-header"><Camera className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Shoot</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Event Shooting</h3>
                  <h4 className="fcard-sub-service">Script Writing</h4>
                </div>
              </div>
              <div className="folder-card card-right" onClick={(e) => { e.stopPropagation(); handleCardClick('reel-3'); }}>
                <div className="fcard-header"><Sparkles className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Content</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Content Creation</h3>
                  <h4 className="fcard-sub-service">UGC Content</h4>
                </div>
              </div>
              <div className="folder-front">
                <div className="folder-front-tab" />
                <div className="folder-front-body">
                  <div className="folder-front-title"><Video className="folder-front-icon text-pink" size={20} /> Video Production</div>
                  <div className="folder-front-subtitle">mnovate.in / media</div>
                </div>
              </div>
            </div>

            {/* Folder 3: Marketing & Brand */}
            <div className="interactive-folder-wrapper" onClick={() => handleCardClick('post-1')}>
              <div className="folder-card card-left" onClick={(e) => { e.stopPropagation(); handleCardClick('post-1'); }}>
                <div className="fcard-header"><Palette className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Brand</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Brand Identity</h3>
                  <h4 className="fcard-sub-service">Poster Designing</h4>
                </div>
              </div>
              <div className="folder-card card-center" onClick={(e) => { e.stopPropagation(); handleCardClick('post-2'); }}>
                <div className="fcard-header"><Megaphone className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Growth</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Marketing Strategy</h3>
                  <h4 className="fcard-sub-service">Paid Advertising</h4>
                </div>
              </div>
              <div className="folder-card card-right" onClick={(e) => { e.stopPropagation(); handleCardClick('post-3'); }}>
                <div className="fcard-header"><Share2 className="fcard-icon-lucide" size={18} /><span className="fcard-pill">Social</span></div>
                <div className="fcard-body">
                  <h3 className="fcard-title">Social Media Management</h3>
                  <h4 className="fcard-sub-service">Personal Branding</h4>
                </div>
              </div>
              <div className="folder-front">
                <div className="folder-front-tab" />
                <div className="folder-front-body">
                  <div className="folder-front-title"><Palette className="folder-front-icon text-orange" size={20} /> Marketing & Brand</div>
                  <div className="folder-front-subtitle">mnovate.in / marketing</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="bottom-flames-decor">
        <img src="/Flamesbg.png" alt="Flames Background" draggable="false" className="bottom-flames-image" />
      </div>
    </div>
  );
}
