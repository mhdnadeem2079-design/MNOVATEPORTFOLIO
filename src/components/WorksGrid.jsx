import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Layers, ExternalLink, ArrowRight } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'product', label: 'Products' },
  { id: 'reel', label: 'Reels' },
  { id: 'poster', label: 'Posters' },
  { id: 'carousel', label: 'Carousels' }
];

export default function WorksGrid({ works, onSelectItem }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWorks = activeCategory === 'all' 
    ? works 
    : works.filter(item => item.type === activeCategory);

  return (
    <div className="portfolio-grid-wrapper">
      {/* Sticky Floating Filter Tab Bar */}
      <div className="filter-sticky-container">
        <div className="glass-panel filter-tab-bar">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onMouseEnter={() => {
                document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering');
              }}
              onMouseLeave={() => {
                document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering');
              }}
            >
              <span className="filter-btn-text">{category.label}</span>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeFilterHighlight"
                  className="filter-active-bg"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Container */}
      <motion.div 
        layout 
        className="works-grid-container"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((item) => {
            const isReel = item.type === 'reel';
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, type: 'spring' }}
                onClick={() => onSelectItem(item)}
                onMouseEnter={() => {
                  document.querySelector('.custom-cursor-ring').classList.add('cursor-hovering');
                }}
                onMouseLeave={() => {
                  document.querySelector('.custom-cursor-ring').classList.remove('cursor-hovering');
                }}
                className={`work-card glass-panel card-type-${item.type}`}
                style={{ height: isReel ? '460px' : '380px' }}
              >
                {/* Visual Accent Hover Glow */}
                <div className="card-gradient-overlay" />
                <div className={`card-hover-neon-glow glow-color-${item.type}`} />

                {/* Card Media Background */}
                <div className="card-media-container">
                  {isReel ? (
                    <div className="reel-media-wrapper">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title} 
                        loading="lazy"
                        decoding="async"
                        className="card-image-bg"
                      />
                      {/* Video loop element hidden until hover (preload none saves bandwidth) */}
                      <video
                        src={item.videoUrl}
                        loop
                        muted
                        playsInline
                        preload="none"
                        className="card-video-bg"
                        onMouseOver={(e) => e.target.play().catch(() => {})}
                        onMouseOut={(e) => e.target.pause()}
                      />
                    </div>
                  ) : (
                    <img 
                      src={item.image || (item.slides && item.slides[0]?.image) || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800'} 
                      alt={item.title} 
                      loading="lazy"
                      decoding="async"
                      className="card-image-bg"
                    />
                  )}
                </div>

                {/* Card Header Badge */}
                <div className="card-header-badge-row">
                  <span className={`badge-pill badge-${item.type}`}>
                    {item.type}
                  </span>
                  
                  {isReel && (
                    <div className="badge-duration">
                      <Play size={10} className="fill-white" />
                      <span>{item.duration}</span>
                    </div>
                  )}

                  {item.type === 'carousel' && (
                    <div className="badge-duration">
                      <Layers size={10} />
                      <span>{item.slides.length} slides</span>
                    </div>
                  )}
                </div>

                {/* Card Content Footer */}
                <div className="card-content-footer">
                  {isReel && (
                    <div className="reel-views-row">
                      <Eye size={12} />
                      <span>{item.metrics.views} views</span>
                    </div>
                  )}

                  {item.subtitle && (
                    <span className="card-subtitle">
                      {item.subtitle}
                    </span>
                  )}

                  <h3 className="card-title">
                    {item.title}
                  </h3>

                  <p className="card-description">
                    {item.description}
                  </p>

                  {/* Tech stack or slide teaser */}
                  {item.type === 'product' && (
                    <div className="card-tech-row">
                      {item.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="tech-badge">
                          {t}
                        </span>
                      ))}
                      {item.tech.length > 3 && (
                        <span className="tech-more-badge">+{item.tech.length - 3} more</span>
                      )}
                    </div>
                  )}

                  <div className="card-action-row">
                    <span className="action-view-text">
                      View Project <ArrowRight size={12} className="arrow-icon" />
                    </span>
                    {item.type === 'product' && (
                      <ExternalLink size={12} className="link-icon" />
                    )}
                  </div>
                </div>

                {/* Stacking borders for carousels to simulate deck */}
                {item.type === 'carousel' && (
                  <>
                    <div className="carousel-deck-border-1" />
                    <div className="carousel-deck-border-2" />
                  </>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
