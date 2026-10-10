import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Heart, MessageCircle, Share2, 
  ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

const mockComments = [
  { user: 'alex_ux', text: 'This animation curve is absolutely insane! 🔥' },
  { user: 'deep_dev', text: 'Mnovate never fails to blow my mind with their frontend quality.' },
  { user: 'sara.design', text: 'Cleanest glassmorphic timelines I have seen this year!' },
  { user: 'tech_founder', text: 'Built our MVP in 3 weeks and it looked exactly this polished.' }
];

export default function WorkModal({ item, onClose }) {
  const [direction, setDirection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    if (item?.type === 'reel') {
      if (item.metrics?.likes) {
        setLikesCount(parseFloat(item.metrics.likes));
      }
      setIsPlaying(true);
    }
  }, [item]);

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCount(prev => prev + 0.1); // Simulation
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00f2fe', '#6366f1', '#ec4899']
      });
    } else {
      setIsLiked(false);
      setLikesCount(prev => prev - 0.1);
    }
  };

  const handleSlideChange = (newDirection) => {
    setDirection(newDirection);
    const totalSlides = item.slides.length;
    setActiveSlide((prev) => (prev + newDirection + totalSlides) % totalSlides);
  };

  // Video time tracking
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  const handleProgressBarClick = (e) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = clickPosition * videoRef.current.duration;
      setVideoProgress(clickPosition * 100);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-window glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
          onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
        >
          <X size={18} />
        </button>

        {/* Modal Content Wrapper */}
        <div className="modal-body">
          
          {/* PRODUCT LAYOUT */}
          {item.type === 'product' && (
            <div className="product-layout">
              {/* Product Visual */}
              <div className="product-visuals">
                <div className="product-image-wrapper">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                  />
                  <div className="product-image-shadow" />
                </div>
                
                {/* Tech Badges */}
                <div className="product-tech-row">
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="product-tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="product-info-side">
                <div>
                  <span className="product-subtitle">
                    {item.subtitle}
                  </span>
                  <h2 className="product-title text-glow-cyan">
                    {item.title}
                  </h2>
                  <p className="product-description">
                    {item.longDescription}
                  </p>
                  
                  {/* Performance Metrics */}
                  <div className="product-metrics-panel">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-label">
                          {metric.label}
                        </span>
                        <span className="metric-value">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="product-actions">
                  <a
                    href={item.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-primary-btn"
                    onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                    onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                  >
                    Launch Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* REEL LAYOUT */}
          {item.type === 'reel' && (
            <div className="reel-layout">
              
              {/* Smartphone Video Mockup */}
              <div className="reel-phone-wrapper">
                <div className="smartphone-chassis">
                  
                  {/* Phone Speaker Notch */}
                  <div className="phone-notch">
                    <div className="phone-speaker" />
                  </div>
                  
                  {/* Inner Video Container */}
                  <div className="phone-screen">
                    <video
                      ref={videoRef}
                      src={item.videoUrl}
                      loop
                      muted={isMuted}
                      autoPlay
                      onTimeUpdate={handleTimeUpdate}
                      onClick={togglePlay}
                      className="phone-video-player"
                    />

                    {/* Progress Bar Overlaid on Video */}
                    <div 
                      className="phone-progress-bar-container"
                      onClick={handleProgressBarClick}
                    >
                      <div 
                        className="phone-progress-bar-fill"
                        style={{ width: `${videoProgress}%` }}
                      />
                    </div>

                    {/* Play/Pause Overlay indicator */}
                    <AnimatePresence>
                      {!isPlaying && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          className="phone-play-overlay"
                        >
                          <div className="play-overlay-circle">
                            <Play size={24} className="fill-white text-white play-icon-adjust" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Mute and Play floating controls inside phone screen */}
                    <div className="phone-floating-controls">
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                        className="phone-floating-btn"
                        onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                        onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                      >
                        {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                        className="phone-floating-btn"
                        onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                        onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                      >
                        {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reel Social Stats and Comments */}
              <div className="reel-info-side">
                
                {/* Meta details */}
                <div>
                  <div className="reel-meta-row">
                    <span className="badge-pill badge-reel-inline">
                      Reel
                    </span>
                    <span className="reel-duration-text">
                      Duration: {item.duration}
                    </span>
                  </div>
                  <h3 className="reel-title text-glow-pink">
                    {item.title}
                  </h3>
                  <p className="reel-description">
                    {item.description}
                  </p>
                  
                  {/* Big interactive icons */}
                  <div className="reel-actions-row">
                    <button 
                      onClick={handleLike} 
                      className="reel-action-btn-wrapper"
                      onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                      onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                    >
                      <div className={`reel-action-circle ${isLiked ? 'liked' : ''}`}>
                        <Heart size={20} className={isLiked ? 'fill-pink-500' : ''} />
                      </div>
                      <span className="reel-action-label">{(likesCount).toFixed(1)}K Likes</span>
                    </button>

                    <div className="reel-action-btn-wrapper">
                      <div className="reel-action-circle">
                        <MessageCircle size={20} />
                      </div>
                      <span className="reel-action-label">82 Comments</span>
                    </div>

                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }}
                      className="reel-action-btn-wrapper"
                      onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                      onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                    >
                      <div className="reel-action-circle">
                        <Share2 size={20} />
                      </div>
                      <span className="reel-action-label">{item.metrics.shares} Shares</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Comment Box */}
                <div className="reel-comments-section">
                  <h4 className="comments-heading">
                    Comments Live Feed
                  </h4>
                  <div className="comments-feed-container">
                    {mockComments.map((cmt, idx) => (
                      <div key={idx} className="comment-bubble">
                        <div className="comment-user-row">
                          <span className="comment-username">@{cmt.user}</span>
                          <span className="comment-time">Active now</span>
                        </div>
                        <p className="comment-text">{cmt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* POSTER LAYOUT */}
          {item.type === 'poster' && (
            <div className="poster-layout">
              
              {/* Poster Presentation */}
              <div className="poster-image-side">
                <div className="poster-frame">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="poster-image-zoomable"
                  />
                </div>
              </div>

              {/* Poster Info */}
              <div className="poster-info-side">
                <div>
                  <span className="badge-pill badge-poster-inline">
                    Poster Artwork
                  </span>
                  
                  <h2 className="poster-title text-glow-indigo">
                    {item.title}
                  </h2>

                  <div className="poster-details-grid">
                    <div className="poster-detail-group">
                      <h4 className="detail-label">Client</h4>
                      <p className="detail-value">{item.client}</p>
                    </div>
                    <div className="poster-detail-group">
                      <h4 className="detail-label">Concept Definition</h4>
                      <p className="detail-description">{item.concept}</p>
                    </div>
                    <div className="poster-detail-group">
                      <h4 className="detail-label">Brief</h4>
                      <p className="detail-description">{item.description}</p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => window.open(item.image, '_blank')}
                  className="modal-primary-btn"
                  onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                  onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                >
                  View High Resolution <Maximize size={14} />
                </button>
              </div>
            </div>
          )}

          {/* CAROUSEL LAYOUT */}
          {item.type === 'carousel' && (
            <div className="carousel-layout">
              <div className="carousel-header">
                <div>
                  <span className="badge-pill badge-carousel-inline">
                    Carousel Slider Deck
                  </span>
                  <h2 className="carousel-title text-glow-indigo">
                    {item.title}
                  </h2>
                </div>
                
                <span className="carousel-counter-badge">
                  Slide {activeSlide + 1} of {item.slides.length}
                </span>
              </div>

              {/* Slider Component Panel */}
              <div className="carousel-slider-panel">
                
                {/* Glowing Side Ambient Lights */}
                <div className={`carousel-ambient-light glow-${item.slides[activeSlide].accent}`} />

                <div className="carousel-slide-content-wrapper">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={activeSlide}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="carousel-slide-container"
                    >
                      <span className={`slide-accent-pill accent-${item.slides[activeSlide].accent}`}>
                        {item.slides[activeSlide].title.split(':')[0]}
                      </span>
                      
                      <h3 className="slide-title">
                        {item.slides[activeSlide].title.includes(':') 
                          ? item.slides[activeSlide].title.split(':')[1].trim()
                          : item.slides[activeSlide].title
                        }
                      </h3>
                      
                      <p className="slide-text">
                        {item.slides[activeSlide].text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Arrow Controls */}
                <button
                  onClick={() => handleSlideChange(-1)}
                  className="carousel-nav-btn prev-btn"
                  onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                  onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => handleSlideChange(1)}
                  className="carousel-nav-btn next-btn"
                  onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                  onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Navigation Indicators */}
              <div className="carousel-dot-nav">
                {item.slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeSlide ? 1 : -1);
                      setActiveSlide(idx);
                    }}
                    className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                    onMouseEnter={() => document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering')}
                    onMouseLeave={() => document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering')}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}
