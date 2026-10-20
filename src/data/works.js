export const works = [
  // Products
  {
    id: 'prod-1',
    type: 'product',
    title: 'Aether Pay',
    subtitle: 'Web3 Billing & Payments',
    description: 'A premium, minimalist multi-chain payment protocol designed for SaaS platforms and enterprise clients.',
    longDescription: 'Aether Pay streamlines crypto payments for businesses, offering real-time invoicing, recurring subscriptions, and auto-conversion to stablecoins.',
    image: '/web/CC1.jpg',
    tech: ['React', 'Framer Motion', 'Ethers.js', 'Node.js', 'TailwindCSS', 'WebGL'],
    links: { live: 'https://aetherpay.mnovate.in', github: '#' },
    metrics: [
      { label: 'Transactions Processed', value: '$12M+' },
      { label: 'Settlement Time', value: '< 2s' },
      { label: 'Client Retention Rate', value: '99.4%' }
    ]
  },
  {
    id: 'prod-2',
    type: 'product',
    title: 'Veloce AI',
    subtitle: 'Data Intelligence Dashboard',
    description: 'Real-time predictive analytics suite that translates high-volume data streams into conversational visual models.',
    longDescription: 'Veloce AI is an enterprise dashboard for data pipelines. It integrates custom streaming APIs with lightweight charts and interactive 3D nodes.',
    image: '/web/CHA.jpg',
    tech: ['React', 'Next.js', 'D3.js', 'FastAPI', 'Three.js', 'PostgreSQL'],
    links: { live: 'https://veloce.mnovate.in', github: '#' },
    metrics: [
      { label: 'Data Ingestion Rate', value: '2.5 GB/s' },
      { label: 'Query Response', value: '45ms' },
      { label: 'Decision Speedup', value: '4.2x' }
    ]
  },
  {
    id: 'prod-3',
    type: 'product',
    title: 'Zenith Workspace',
    subtitle: 'Agency Management SaaS',
    description: 'Colloquial workspace management software enabling agencies to automate client scopes and tracking logs.',
    longDescription: 'Zenith automates project timelines by tracking user interaction and generating contextual workflow triggers.',
    image: '/web/PFK.jpg',
    tech: ['React', 'TypeScript', 'Zustand', 'Supabase', 'Framer Motion'],
    links: { live: 'https://zenith.mnovate.in', github: '#' },
    metrics: [
      { label: 'Task Automation', value: '70%' },
      { label: 'Active Agencies', value: '800+' },
      { label: 'User Satisfaction', value: '4.9/5' }
    ]
  },
  {
    id: 'prod-4',
    type: 'product',
    title: 'Flux Studio Canvas',
    subtitle: 'Real-time Canvas Web App',
    description: 'Collaborative canvas tool with WebGL rendering engine.',
    image: '/web/PFM.jpg',
    tech: ['React', 'WebGL', 'Canvas', 'Node.js']
  },
  {
    id: 'prod-5',
    type: 'product',
    title: 'Nova Headless CMS',
    subtitle: 'Content Management Suite',
    description: 'High-speed headless CMS built for performance.',
    image: '/web/DA1.jpg',
    tech: ['Next.js', 'MongoDB', 'GraphQL', 'TailwindCSS']
  },
  {
    id: 'prod-6',
    type: 'product',
    title: 'Orbit Analytics',
    subtitle: 'Data Visualization Platform',
    description: 'Visual data intelligence suite rendering interactive charts.',
    image: '/web/LE.jpg',
    tech: ['Vue.js', 'D3.js', 'Python', 'FastAPI']
  },
  {
    id: 'prod-7',
    type: 'product',
    title: 'Marketing Portal',
    subtitle: 'Enterprise Growth Hub',
    description: 'High-converting marketing platform with analytics.',
    image: '/web/MAR.jpg',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion']
  },
  {
    id: 'prod-8',
    type: 'product',
    title: 'Mnovate Platform',
    subtitle: 'Agency Workspace Suite',
    description: 'Custom agency digital portal and management system.',
    image: '/web/MN2.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'prod-9',
    type: 'product',
    title: 'Frontier Studio',
    subtitle: 'Immersive Web Experience',
    description: '3D interactive web environment crafted with WebGL.',
    image: '/web/MNF.jpg',
    tech: ['Three.js', 'WebGL', 'React']
  },
  {
    id: 'prod-10',
    type: 'product',
    title: 'Cinema Motion App',
    subtitle: 'Media Streaming Portal',
    description: 'High-speed media streaming web platform.',
    image: '/web/MOV.png',
    tech: ['React', 'HLS.js', 'Node.js']
  },
  {
    id: 'prod-11',
    type: 'product',
    title: 'Portfolio Suite II',
    subtitle: 'Interactive Web Dashboard',
    description: 'Modern workspace platform for creative teams.',
    image: '/web/PF2.jpg',
    tech: ['Vite', 'React', 'TailwindCSS']
  },
  {
    id: 'prod-12',
    type: 'product',
    title: 'Portfolio Suite III',
    subtitle: 'Enterprise Client Interface',
    description: 'Client dashboard with real-time sync.',
    image: '/web/PF3.jpg',
    tech: ['Next.js', 'TypeScript', 'Supabase']
  },
  {
    id: 'prod-13',
    type: 'product',
    title: 'RHL Network System',
    subtitle: 'Enterprise Portal',
    description: 'Custom enterprise web portal and system management.',
    image: '/web/RHL.png',
    tech: ['React', 'Express', 'PostgreSQL']
  },
  {
    id: 'prod-14',
    type: 'product',
    title: 'VBS Stream Portal',
    subtitle: 'Live Streaming Platform',
    description: 'High performance live broadcasting Web App.',
    image: '/web/VBS.png',
    tech: ['React', 'WebRTC', 'Node.js']
  },

  // Reels
  {
    id: 'reel-1',
    type: 'reel',
    title: '80/20 Rule for Creators',
    description: 'Practical creator strategies outlining dynamic hook building and audio pacing structures.',
    videoUrl: '/Compressed/80_20 Rule for Creators -15sec - compressed.mp4',
    thumbnail: '/poster/Branding1.jpg',
    metrics: { views: '184K', likes: '22.4K', shares: '4.5K' },
    duration: '0:15'
  },
  {
    id: 'reel-2',
    type: 'reel',
    title: 'Mr. B Showreel',
    description: 'High-energy pacing and sound-design sequences tuned for maximum audience retention.',
    videoUrl: '/Compressed/mr B 20sec - compressed.mp4',
    thumbnail: '/poster/Branding2.jpg',
    metrics: { views: '320K', likes: '41.2K', shares: '9.8K' },
    duration: '0:20'
  },
  {
    id: 'reel-3',
    type: 'reel',
    title: 'Pasupati Travel Vlog',
    description: 'Cinematic color grading and smooth transitions mapping ancient travel landscapes.',
    videoUrl: '/Compressed/pasupati travel 20sec - compressed.mp4',
    thumbnail: '/poster/Leymoon1.jpg',
    metrics: { views: '112K', likes: '14.8K', shares: '2.1K' },
    duration: '0:20'
  },
  {
    id: 'reel-4',
    type: 'reel',
    title: 'Client Showcase',
    description: 'Dynamic brand client showcase with high impact visual motion editing.',
    videoUrl: '/Compressed/Client wrk Linked Comp 02_10 - compressed.mp4',
    thumbnail: '/poster/Leymoon2.jpg',
    metrics: { views: '95K', likes: '11.2K', shares: '1.8K' },
    duration: '0:25'
  },
  {
    id: 'reel-5',
    type: 'reel',
    title: 'Glow Radiant Edit',
    description: 'Radiant aesthetic color grade and smooth motion composite cuts.',
    videoUrl: '/Compressed/Glow radiant Linked Comp 01_1 - compressed.mp4',
    thumbnail: '/poster/Poster5.png',
    metrics: { views: '142K', likes: '19.4K', shares: '3.1K' },
    duration: '0:30'
  },
  {
    id: 'reel-6',
    type: 'reel',
    title: 'Radiant Series I',
    description: 'High frequency motion cuts and glowing typography overlays.',
    videoUrl: '/Compressed/Radiant 1 Linked Comp 01_4 - compressed.mp4',
    thumbnail: '/poster/Post-4.png',
    metrics: { views: '210K', likes: '28.6K', shares: '5.2K' },
    duration: '0:30'
  },
  {
    id: 'reel-7',
    type: 'reel',
    title: 'Radiant Series V',
    description: 'Cinematic commercial edit showcasing premium product lighting.',
    videoUrl: '/Compressed/Radiant 5 Linked Comp 01 - compressed.mp4',
    thumbnail: '/poster/Onam 7.png',
    metrics: { views: '168K', likes: '21.0K', shares: '3.9K' },
    duration: '0:28'
  },
  {
    id: 'reel-8',
    type: 'reel',
    title: 'Respect Motion Edit',
    description: 'Bold rhythm cuts matched with custom audio track pacing.',
    videoUrl: '/Compressed/Respect Linked Comp 01 - compressed.mp4',
    thumbnail: '/poster/Milad Poster-6.png',
    metrics: { views: '195K', likes: '24.3K', shares: '4.1K' },
    duration: '0:22'
  },
  {
    id: 'reel-9',
    type: 'reel',
    title: 'Sunscreen Commercial Spot',
    description: 'Vibrant product commercial reel with fluid liquid motion effects.',
    videoUrl: '/Compressed/Sunscream Linked Comp 01 - compressed.mp4',
    thumbnail: '/poster/LIVE_POSTER_VBS.png',
    metrics: { views: '280K', likes: '36.5K', shares: '7.4K' },
    duration: '0:26'
  },
  {
    id: 'reel-10',
    type: 'reel',
    title: 'Client Testimonial Reel',
    description: 'Engaging interview cut with dynamic text highlights.',
    videoUrl: '/Compressed/Testimonial Linked Comp 01 - compressed.mp4',
    thumbnail: '/poster/Independence Day Poster.png',
    metrics: { views: '130K', likes: '15.8K', shares: '2.7K' },
    duration: '0:35'
  },
  {
    id: 'reel-11',
    type: 'reel',
    title: 'Shampoo Brand Spot',
    description: 'Sleek cosmetic brand spot featuring high-frame-rate particle detail.',
    videoUrl: '/Compressed/shampoo Linked Comp 01 - compressed.mp4',
    thumbnail: '/poster/5 Product carousel.jpg',
    metrics: { views: '245K', likes: '31.1K', shares: '6.3K' },
    duration: '0:24'
  },

  // Posters
  {
    id: 'post-1',
    type: 'poster',
    title: 'Independence Day Special Poster',
    subtitle: 'Festival Poster Design',
    description: 'High-impact graphic artwork celebrating Independence Day with dynamic vector typography.',
    image: '/poster/Independence Day Poster.png',
    client: 'Festival Series',
    concept: 'Festive branding and high-energy vector layout.'
  },
  {
    id: 'post-2',
    type: 'poster',
    title: 'Live VBS Broadcast Poster',
    subtitle: 'Event Broadcast Artwork',
    description: 'Promotional event poster featuring rich typography and vibrant graphics for VBS stream.',
    image: '/poster/LIVE_POSTER_VBS.png',
    client: 'VBS Event',
    concept: 'Live event streaming branding.'
  },
  {
    id: 'post-3',
    type: 'poster',
    title: 'Milad Festival Poster',
    subtitle: 'Cultural Celebration Art',
    description: 'Traditional meets modern aesthetic for Milad celebration artwork.',
    image: '/poster/Milad Poster-6.png',
    client: 'Cultural Edition',
    concept: 'Graceful typography and subtle pattern overlays.'
  },
  {
    id: 'post-4',
    type: 'poster',
    title: 'Onam Festival Edition 7',
    subtitle: 'Seasonal Brand Poster',
    description: 'Vibrant colors and traditional motif fusion for Onam festival poster series.',
    image: '/poster/Onam 7.png',
    client: 'Onam Celebration',
    concept: 'Festive brand storytelling.'
  },
  {
    id: 'post-5',
    type: 'poster',
    title: 'Creative Layout 04',
    subtitle: 'Visual Artwork',
    description: 'Minimalist creative composition poster.',
    image: '/poster/Post-4.png',
    client: 'Mnovate Studio',
    concept: 'Clean grid structure and visual balance.'
  },
  {
    id: 'post-6',
    type: 'poster',
    title: 'Creative Artwork 05',
    subtitle: 'Poster Series',
    description: 'Modern graphic poster layout.',
    image: '/poster/Poster5.png',
    client: 'Brand Media',
    concept: 'Bold color contrasts and high-tech typography.'
  },
  {
    id: 'post-7',
    type: 'poster',
    title: 'Leymoon Studio I',
    subtitle: 'Graphic Brand Design',
    description: 'A conceptual event poster blending bold typography with glassmorphism overlays.',
    image: '/poster/Leymoon1.jpg',
    client: 'Mnovate Lab',
    concept: 'Organic glass ribbons and sharp layouts.'
  },
  {
    id: 'post-8',
    type: 'poster',
    title: 'Leymoon Studio II',
    subtitle: 'Visual Artwork',
    description: 'Promotional graphic design combining high-contrast neon lines.',
    image: '/poster/Leymoon2.jpg',
    client: 'Genesis Conf',
    concept: 'Glowing light nodes mapping global networks.'
  },

  // Carousels
  {
    id: 'caro-1',
    type: 'carousel',
    title: '5 Rules of Premium Web Design',
    description: 'Visual guides explaining how spacing, dark aesthetics, micro-interactions, fonts, and borders create premium feel.',
    slides: [
      {
        title: 'Rule 01: Spacing as Luxury',
        text: 'Give your design elements space to breathe. Tight layouts feel cheap. Generous margins indicate confidence and class.',
        accent: 'indigo'
      },
      {
        title: 'Rule 02: HSL Color Curating',
        text: 'Avoid standard hex values. Use coordinated HSL ranges to create consistent, soft dark gradients with vibrant focus points.',
        accent: 'cyan'
      },
      {
        title: 'Rule 03: Micro-Interactions',
        text: 'Every hover should have a fluid feedback loop. Use spring physics, border shines, and hover-triggered cursor expansions.',
        accent: 'pink'
      },
      {
        title: 'Rule 04: The Dark Backdrop',
        text: 'True premium layout starts with deep spaces (#030303 - #0C0C14). Layer elements using glass transparency and soft backdrop blurs.',
        accent: 'indigo'
      },
      {
        title: 'Rule 05: Border Glow Lines',
        text: 'Replace solid colors with glowing borders using transparent gradients. It creates depth and feels like high-tech holographic glass.',
        accent: 'cyan'
      }
    ]
  },
  {
    id: 'caro-2',
    type: 'carousel',
    title: 'Creating Smooth Framer Motion Animations',
    description: 'Learn how to configure spring presets, handle exit layouts, and setup staggered entry animations.',
    slides: [
      {
        title: '01. Custom Spring Presets',
        text: 'Avoid ease-in-out for premium details. Use spring animations with low stiffness and high damping to mimic real-world inertia.',
        accent: 'pink'
      },
      {
        title: '02. Layout Morphing',
        text: 'Provide layoutId to Framer Motion. This automatically animates element sizes and positions between grid rearrangements.',
        accent: 'indigo'
      },
      {
        title: '03. Staggered Entries',
        text: 'Delay child animations successively. Staggering components lets the page build itself dynamically as the user enters.',
        accent: 'cyan'
      },
      {
        title: '04. Drag Canvas Bounds',
        text: 'Allow users to drag visual elements with snap-back spring constraints. It increases tactile engagement in dashboards.',
        accent: 'pink'
      }
    ]
  }
];
