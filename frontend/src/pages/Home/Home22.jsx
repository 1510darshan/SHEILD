// import React from 'react';
// import { Link } from 'react-router-dom';
// import CountUp from 'react-countup';
// import { useInView } from 'react-intersection-observer';
// import { Card, StatCard } from '../../components/ui/Components';
// import './Home.css';

// // SVG Icons
// const IconUsers = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
// const IconBook = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
// const IconRing = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
// const IconBriefcase = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;

// const IconData = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
// const IconChart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
// const IconHeart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;

// function Home() {
//     const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

//     return (
//         <div className="home-page">
//             {/* Hero Section */}
//             <section className="hero">
//                 <div className="container hero-inner">
//                     <div className="hero-content">
//                         <h1 className="hero-title">
//                             AI-Powered <span className="text-highlight">Gender Equity</span> Intelligence Platform
//                         </h1>
//                         <p className="hero-desc">
//                             A data-driven platform designed to detect gender imbalance across regions. We analyze birth data, education indicators, employment statistics, and social factors to support awareness, policy decisions, and community intervention.
//                         </p>
//                         <div className="hero-actions">
//                             <Link to="/risk-map" className="btn btn-primary btn-lg">View Gender Risk Map</Link>
//                             <Link to="/data-insights" className="btn btn-outline btn-lg">Explore Data Insights</Link>
//                         </div>
//                     </div>

//                     <div className="hero-visual">
//                         {/* Abstract data visualization / map representation */}
//                         <div className="abstract-map">
//                             <div className="map-node n1 pulse"></div>
//                             <div className="map-node n2 pulse-slow"></div>
//                             <div className="map-node n3"></div>
//                             <div className="map-node n4 pulse"></div>
//                             <div className="map-node n5 pulse-slow"></div>

//                             <svg className="map-connections" viewBox="0 0 400 400">
//                                 <path d="M 80 150 Q 150 100 200 80 T 320 180" stroke="rgba(63, 81, 181, 0.2)" strokeWidth="2" fill="none" />
//                                 <path d="M 80 150 Q 180 250 250 320 T 320 180" stroke="rgba(0, 150, 136, 0.2)" strokeWidth="2" fill="none" />
//                                 <path d="M 150 220 L 250 160 L 320 180" stroke="rgba(255, 152, 0, 0.2)" strokeWidth="2" fill="none" />
//                             </svg>
//                             <div className="map-node n6"></div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Problem Overview */}
//             <section className="section bg-white">
//                 <div className="container">
//                     <div className="section-header">
//                         <h2>Problem Overview</h2>
//                         <p>Addressing the major challenges in achieving gender equity across regions.</p>
//                     </div>

//                     <div className="grid-4">
//                         <Card hoverable className="problem-card">
//                             <div className="problem-icon primary"><IconUsers /></div>
//                             <h3>Skewed Sex Ratio</h3>
//                             <p>Analyzing birth registration data to identify regions with unnatural male-to-female birth ratios.</p>
//                         </Card>

//                         <Card hoverable className="problem-card">
//                             <div className="problem-icon secondary"><IconBook /></div>
//                             <h3>Girl Education Gap</h3>
//                             <p>Tracking female literacy rates and school dropout patterns to ensure equal educational opportunities.</p>
//                         </Card>

//                         <Card hoverable className="problem-card">
//                             <div className="problem-icon accent"><IconRing /></div>
//                             <h3>Child Marriage</h3>
//                             <p>Monitoring early marriage prevalence and identifying vulnerable districts for targeted legal intervention.</p>
//                         </Card>

//                         <Card hoverable className="problem-card">
//                             <div className="problem-icon primary"><IconBriefcase /></div>
//                             <h3>Female Employment Gap</h3>
//                             <p>Measuring female labor force participation and the presence of women in the formal economy.</p>
//                         </Card>
//                     </div>
//                 </div>
//             </section>

//             {/* Platform Workflow */}
//             <section className="section">
//                 <div className="container">
//                     <div className="section-header">
//                         <h2>Platform Workflow</h2>
//                         <p>How we transform raw data into actionable community interventions.</p>
//                     </div>

//                     <div className="workflow-steps">
//                         <div className="workflow-card">
//                             <div className="step-number">01</div>
//                             <div className="workflow-icon"><IconData /></div>
//                             <h3>Data Collection</h3>
//                             <p>Gathering comprehensive datasets from government census, health surveys, and open sources across multiple indicators.</p>
//                         </div>

//                         <div className="workflow-connector"></div>

//                         <div className="workflow-card">
//                             <div className="step-number">02</div>
//                             <div className="workflow-icon"><IconChart /></div>
//                             <h3>Risk Analysis</h3>
//                             <p>Generating composite gender risk scores and identifying vulnerable districts using predictive analytics and machine learning.</p>
//                         </div>

//                         <div className="workflow-connector"></div>

//                         <div className="workflow-card">
//                             <div className="step-number">03</div>
//                             <div className="workflow-icon"><IconHeart /></div>
//                             <h3>Community Intervention</h3>
//                             <p>Guiding awareness campaigns, educational initiatives, and policy programs based on localized data insights.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Impact Metrics */}
//             <section className="section bg-white pb-20" ref={ref}>
//                 <div className="container">
//                     <div className="section-header">
//                         <h2>Platform Impact</h2>
//                         <p>Measuring our reach in detecting imbalance and recommending solutions.</p>
//                     </div>

//                     <div className="grid-3 metrics-grid">
//                         <StatCard
//                             color="primary"
//                             icon={<IconData />}
//                             value={inView ? <CountUp end={32036} separator="," duration={2.5} /> : "0"}
//                             label="Total Regions Analyzed"
//                             mini={<div className="metrics-bars"><div className="bar b1" /><div className="bar b2" /><div className="bar b3" /><div className="bar b4" /></div>}
//                         />

//                         <StatCard
//                             color="accent"
//                             icon={<IconChart />}
//                             value={inView ? <CountUp end={2190} separator="," suffix="+" duration={2.5} /> : "0"}
//                             label="High-Risk Regions Detected"
//                             mini={<div className="metrics-bars accent"><div className="bar b2" /><div className="bar b4" /><div className="bar b1" /><div className="bar b3" /></div>}
//                         />

//                         <StatCard
//                             color="secondary"
//                             icon={<IconHeart />}
//                             value={inView ? <CountUp end={167} duration={2.5} /> : "0"}
//                             label="Awareness Programs Suggested"
//                             mini={<div className="metrics-bars secondary"><div className="bar b3" /><div className="bar b1" /><div className="bar b4" /><div className="bar b2" /></div>}
//                         />
//                     </div>

//                     <div className="cta-banner">
//                         <h2>Ready to explore the data?</h2>
//                         <p>Access the interactive risk map and help build a more equitable future.</p>
//                         <Link to="/login" className="btn btn-primary btn-lg mt-4">Get Started</Link>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Home;







import { useState, useEffect, useRef, useCallback } from "react";

// ─── Color Palette ────────────────────────────────────────────────────────────
//  BG Dark  : #050d1a  (near-black navy)
//  BG Mid   : #081120  (deep navy)
//  Gold     : #c9a84c  (warm professional gold)
//  Gold Lt  : #e6c870  (light gold)
//  Teal     : #2dd4bf  (vibrant teal accent)
//  Slate    : #4a7fa5  (muted slate-blue)
// ─────────────────────────────────────────────────────────────────────────────

const PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2.5 + 0.8,
  speed: Math.random() * 0.25 + 0.08,
  opacity: Math.random() * 0.5 + 0.15,
  color: ["#c9a84c","#2dd4bf","#4a7fa5","#e6c870","#5eead4"][Math.floor(Math.random() * 5)],
}));

const NAV_LINKS = ["Mission","Impact","Stories","Join Us","Resources"];

const STATS = [
  { value: "2.7B", label: "Women lack equal opportunity", icon: "♀" },
  { value: "135",  label: "Years to close the gender gap", icon: "⏳" },
  { value: "40%",  label: "More GDP with gender equality", icon: "📈" },
  { value: "1M+",  label: "Lives we aim to transform",    icon: "✦" },
];

const CURSOR_MESSAGES = [
  { emoji: "✊", text: "Equal Rights"    },
  { emoji: "🌟", text: "Value Every Life" },
  { emoji: "⚡", text: "She Can Lead"   },
  { emoji: "🔥", text: "Break Barriers" },
  { emoji: "🌍", text: "Change the World"},
  { emoji: "👑", text: "Born Equal"     },
];

export default function Home() {
  // ── Cursor: pure DOM refs + RAF lerp — ZERO React re-renders ──────────────
  const cursorDotRef  = useRef(null);
  const cursorRingRef = useRef(null);
  const glowBlobRef   = useRef(null);
  const rawMouse      = useRef({ x: -300, y: -300 });
  const lerpedDot     = useRef({ x: -300, y: -300 });
  const lerpedRing    = useRef({ x: -300, y: -300 });
  const rafCursor     = useRef(null);

  // ── Normal React state (non-cursor) ───────────────────────────────────────
  const [scrollY,       setScrollY]       = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [particles,     setParticles]     = useState(PARTICLES);
  const [heroLoaded,    setHeroLoaded]    = useState(false);
  const [ripples,       setRipples]       = useState([]);
  const [cursorMsg,     setCursorMsg]     = useState(null);

  const lastScrollY   = useRef(0);
  const scrollTmr     = useRef(null);
  const particleRaf   = useRef(null);
  const msgTmr        = useRef(null);
  const rippleId      = useRef(0);

  // ── Smooth cursor loop ────────────────────────────────────────────────────
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      // Dot follows fast (t=0.38)
      lerpedDot.current.x  = lerp(lerpedDot.current.x,  rawMouse.current.x, 0.38);
      lerpedDot.current.y  = lerp(lerpedDot.current.y,  rawMouse.current.y, 0.38);
      // Ring follows slow (t=0.11) — trails behind for depth
      lerpedRing.current.x = lerp(lerpedRing.current.x, rawMouse.current.x, 0.11);
      lerpedRing.current.y = lerp(lerpedRing.current.y, rawMouse.current.y, 0.11);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform =
          `translate(${lerpedDot.current.x - 6}px, ${lerpedDot.current.y - 6}px)`;
      }
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform =
          `translate(${lerpedRing.current.x - 22}px, ${lerpedRing.current.y - 22}px)`;
      }
      // Update background glow blob toward raw mouse (instant is fine)
      if (glowBlobRef.current) {
        const px = (rawMouse.current.x / window.innerWidth)  * 100;
        const py = (rawMouse.current.y / window.innerHeight) * 100;
        glowBlobRef.current.style.background =
          `radial-gradient(ellipse 55% 48% at ${px}% ${py}%, rgba(201,168,76,0.13) 0%, transparent 65%),
           radial-gradient(ellipse 65% 52% at ${100-px}% ${100-py}%, rgba(45,212,191,0.09) 0%, transparent 65%)`;
      }
      rafCursor.current = requestAnimationFrame(tick);
    };

    const onMove = (e) => {
      rawMouse.current.x = e.clientX;
      rawMouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafCursor.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafCursor.current);
    };
  }, []);

  // ── Hero reveal ───────────────────────────────────────────────────────────
  useEffect(() => { setTimeout(() => setHeroLoaded(true), 300); }, []);

  // ── Scroll: hide/show header ──────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const cur = window.scrollY;
      if (cur > lastScrollY.current + 10)       setHeaderVisible(false);
      else if (cur < lastScrollY.current - 5)   setHeaderVisible(true);
      lastScrollY.current = cur;
      setScrollY(cur);
      clearTimeout(scrollTmr.current);
      scrollTmr.current = setTimeout(() => setHeaderVisible(true), 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Mouse move → floating word bubble ────────────────────────────────────
  const handleMouseMove = useCallback((e) => {
    clearTimeout(msgTmr.current);
    msgTmr.current = setTimeout(() => {
      const m = CURSOR_MESSAGES[Math.floor(Math.random() * CURSOR_MESSAGES.length)];
      setCursorMsg({ ...m, x: e.clientX, y: e.clientY, id: Date.now() });
      setTimeout(() => setCursorMsg(null), 1300);
    }, 700);
  }, []);

  // ── Click ripple ──────────────────────────────────────────────────────────
  const handleClick = useCallback((e) => {
    const id = rippleId.current++;
    setRipples(r => [...r, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 900);
  }, []);

  // ── Particle float animation ──────────────────────────────────────────────
  useEffect(() => {
    const run = () => {
      setParticles(prev => prev.map(p => ({
        ...p,
        y: p.y - p.speed * 0.04 < -2 ? 102 : p.y - p.speed * 0.04,
        x: p.x + Math.sin(Date.now() * 0.0008 + p.id * 0.7) * 0.008,
      })));
      particleRaf.current = requestAnimationFrame(run);
    };
    particleRaf.current = requestAnimationFrame(run);
    return () => cancelAnimationFrame(particleRaf.current);
  }, []);

  const parallax = scrollY * 0.3;

  return (
    <div
      style={{ fontFamily:"Georgia,serif", cursor:"none", background:"#050d1a", overflowX:"hidden" }}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      {/* ───────────── Global Styles ───────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Josefin+Sans:wght@100;200;300;400&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{cursor:none!important}
        .fd{font-family:'Cormorant Garamond',Georgia,serif}
        .fs{font-family:'Josefin Sans',sans-serif}

        /* Gold → Teal shimmer */
        .shimmer{
          background:linear-gradient(90deg,#c9a84c,#e6c870,#2dd4bf,#c9a84c,#2dd4bf,#e6c870);
          background-size:300% auto;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
          animation:shimmer 5s linear infinite;
        }

        @keyframes shimmer{0%{background-position:0% center}100%{background-position:300% center}}

        @keyframes dot-pulse{
          0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,.6),0 0 14px rgba(201,168,76,.5)}
          50%    {box-shadow:0 0 0 7px rgba(201,168,76,0),0 0 28px rgba(45,212,191,.65)}
        }
        @keyframes ring-spin{to{transform:rotate(360deg)}}
        @keyframes msg-rise{
          0%  {opacity:0;transform:translateX(-50%) translateY(0)}
          15% {opacity:1}
          80% {opacity:1}
          100%{opacity:0;transform:translateX(-50%) translateY(-52px)}
        }
        @keyframes ripple{
          0%  {transform:translate(-50%,-50%) scale(0);opacity:.7}
          100%{transform:translate(-50%,-50%) scale(9);opacity:0}
        }
        @keyframes float-bob{
          0%,100%{transform:translateY(0)}
          50%    {transform:translateY(-13px)}
        }
        @keyframes breathe{
          0%,100%{opacity:.3;transform:scale(1)}
          50%    {opacity:.6;transform:scale(1.07)}
        }
        @keyframes orbit1{
          from{transform:rotate(0deg)   translateX(132px) rotate(0deg)}
          to  {transform:rotate(360deg) translateX(132px) rotate(-360deg)}
        }
        @keyframes orbit2{
          from{transform:rotate(130deg)  translateX(172px) rotate(-130deg)}
          to  {transform:rotate(490deg)  translateX(172px) rotate(-490deg)}
        }
        @keyframes orbit3{
          from{transform:rotate(250deg)  translateX(212px) rotate(-250deg)}
          to  {transform:rotate(610deg)  translateX(212px) rotate(-610deg)}
        }
        @keyframes cw  {to{transform:rotate(360deg)}}
        @keyframes ccw {to{transform:rotate(-360deg)}}
        @keyframes text-aura{
          0%,100%{text-shadow:0 0 24px rgba(201,168,76,.4),0 0 50px rgba(45,212,191,.2)}
          50%    {text-shadow:0 0 50px rgba(201,168,76,.8),0 0 100px rgba(45,212,191,.45),0 0 150px rgba(201,168,76,.25)}
        }
        @keyframes btn-flow{
          0%  {background-position:0% 50%}
          50% {background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes scan{
          0%  {top:-4%}
          100%{top:105%}
        }

        .nav-link{
          position:relative;font-family:'Josefin Sans',sans-serif;
          font-weight:200;font-size:11px;letter-spacing:3.5px;
          text-transform:uppercase;color:rgba(255,255,255,.62);
          text-decoration:none;padding:4px 0;transition:color .3s;
        }
        .nav-link::after{
          content:'';position:absolute;bottom:-2px;left:0;
          width:0;height:1px;
          background:linear-gradient(90deg,#c9a84c,#2dd4bf);
          transition:width .4s cubic-bezier(.16,1,.3,1);
        }
        .nav-link:hover{color:#e6c870}
        .nav-link:hover::after{width:100%}

        .btn-primary{
          position:relative;padding:15px 46px;
          font-family:'Josefin Sans',sans-serif;font-size:10px;
          font-weight:400;letter-spacing:4px;text-transform:uppercase;
          border:none;cursor:none;overflow:hidden;
          transition:transform .35s,box-shadow .35s;border-radius:1px;
        }
        .btn-primary::before{
          content:'';position:absolute;inset:0;
          background:linear-gradient(135deg,#a87c28,#c9a84c,#2dd4bf,#c9a84c);
          background-size:260% 260%;
          animation:btn-flow 3.5s ease infinite;z-index:0;
        }
        .btn-primary span{position:relative;z-index:1;color:#050d1a;font-weight:500}
        .btn-primary:hover{transform:translateY(-4px);box-shadow:0 18px 52px rgba(201,168,76,.38)}

        .btn-ghost{
          padding:14px 44px;
          font-family:'Josefin Sans',sans-serif;font-size:10px;
          font-weight:200;letter-spacing:4px;text-transform:uppercase;
          background:transparent;border:1px solid rgba(201,168,76,.42);
          color:rgba(255,255,255,.72);cursor:none;
          transition:all .35s;border-radius:1px;
        }
        .btn-ghost:hover{
          border-color:#c9a84c;color:#e6c870;
          background:rgba(201,168,76,.07);
          transform:translateY(-4px);
        }

        .card{transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s}
        .card:hover{transform:translateY(-10px) scale(1.015);box-shadow:0 28px 70px rgba(201,168,76,.13)}

        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:#050d1a}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#c9a84c,#2dd4bf);border-radius:2px}
      `}</style>

      {/* ══ CURSOR DOT — pure DOM, willChange:transform, no setState ══ */}
      <div ref={cursorDotRef} style={{
        position:"fixed",top:0,left:0,
        width:12,height:12,borderRadius:"50%",
        background:"linear-gradient(135deg,#c9a84c,#2dd4bf)",
        pointerEvents:"none",zIndex:9999,
        willChange:"transform",
        animation:"dot-pulse 2.2s ease-in-out infinite",
      }}/>

      {/* ══ CURSOR RING — slow trail ══ */}
      <div ref={cursorRingRef} style={{
        position:"fixed",top:0,left:0,
        width:44,height:44,borderRadius:"50%",
        border:"1.5px solid rgba(201,168,76,.48)",
        pointerEvents:"none",zIndex:9998,
        willChange:"transform",
      }}>
        <div style={{
          position:"absolute",inset:5,borderRadius:"50%",
          border:"1px dashed rgba(45,212,191,.28)",
          animation:"ring-spin 4s linear infinite",
        }}/>
      </div>

      {/* ══ Cursor message bubble ══ */}
      {cursorMsg && (
        <div key={cursorMsg.id} style={{
          position:"fixed",
          left:cursorMsg.x,top:cursorMsg.y - 18,
          transform:"translateX(-50%)",
          pointerEvents:"none",zIndex:9997,
          animation:"msg-rise 1.3s ease-out forwards",
          whiteSpace:"nowrap",
        }}>
          <div style={{
            background:"rgba(5,13,26,.92)",
            border:"1px solid rgba(201,168,76,.42)",
            borderRadius:20,padding:"6px 18px",
            display:"flex",alignItems:"center",gap:9,
            backdropFilter:"blur(14px)",
            boxShadow:"0 8px 32px rgba(201,168,76,.14)",
          }}>
            <span style={{fontSize:15}}>{cursorMsg.emoji}</span>
            <span className="fs" style={{
              fontSize:10,letterSpacing:3.5,color:"#c9a84c",fontWeight:300,
            }}>{cursorMsg.text}</span>
          </div>
        </div>
      )}

      {/* ══ Click ripples ══ */}
      {ripples.map(r => (
        <div key={r.id} style={{
          position:"fixed",left:r.x,top:r.y,
          width:60,height:60,borderRadius:"50%",
          border:"1.5px solid rgba(201,168,76,.55)",
          pointerEvents:"none",zIndex:9996,
          animation:"ripple .9s ease-out forwards",
        }}/>
      ))}

      {/* ══════════════════════════════════════════════
                    HEADER
      ══════════════════════════════════════════════ */}
      {/*<header style={{
        position:"fixed",top:0,left:0,right:0,zIndex:1000,
        padding:"18px 60px",
        display:"flex",alignItems:"center",justifyContent:"space-between",
        background: scrollY > 60 ? "rgba(5,13,26,.76)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(24px) saturate(1.5)" : "none",
        borderBottom: scrollY > 60 ? "1px solid rgba(201,168,76,.1)" : "none",
        transform: headerVisible ? "translateY(0)" : "translateY(-100%)",
        transition:"transform .55s cubic-bezier(.16,1,.3,1),background .5s,backdrop-filter .5s",
      }}>
        
        <div style={{display:"flex",alignItems:"center",gap:13}}>
          <div style={{
            width:38,height:38,borderRadius:"50%",
            background:"linear-gradient(135deg,#c9a84c,#2dd4bf)",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:18,color:"#050d1a",fontWeight:700,
            boxShadow:"0 0 22px rgba(201,168,76,.4)",
          }}>♀</div>
          <div>
            <div className="fd" style={{fontSize:20,fontWeight:600,color:"white",letterSpacing:1,lineHeight:1}}>EqualRise</div>
            <div className="fs" style={{fontSize:8,letterSpacing:4.5,color:"rgba(201,168,76,.62)",fontWeight:200,textTransform:"uppercase"}}>Bridging The Gap</div>
          </div>
        </div>
        
        <nav style={{display:"flex",gap:38,alignItems:"center"}}>
          {NAV_LINKS.map(l => <a key={l} href="#" className="nav-link">{l}</a>)}
        </nav>
        <button className="btn-primary"><span>Take Action</span></button>
      </header> */}

      {/* ══════════════════════════════════════════════
                    HERO SECTION
      ══════════════════════════════════════════════ */}
      <section style={{position:"relative",minHeight:"100vh",display:"flex",alignItems:"center",overflow:"hidden"}}>

        {/* Background */}
        <div style={{position:"absolute",inset:0}}>
          <div style={{
            position:"absolute",inset:0,
            background:"radial-gradient(ellipse at 22% 55%, #0d1e38 0%, #050d1a 55%, #020810 100%)",
          }}/>
          {/* Live mouse glow — DOM ref, no setState */}
          <div ref={glowBlobRef} style={{
            position:"absolute",inset:0,
            transition:"background .2s ease-out",
          }}/>
          {/* Grid */}
          <div style={{
            position:"absolute",inset:0,
            backgroundImage:`
              linear-gradient(rgba(201,168,76,.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,.04) 1px, transparent 1px)
            `,
            backgroundSize:"72px 72px",
            transform:`translateY(${parallax * .17}px)`,
          }}/>
          {/* Scanning line */}
          <div style={{
            position:"absolute",left:0,right:0,height:2,
            background:"linear-gradient(90deg,transparent,rgba(201,168,76,.06),transparent)",
            animation:"scan 9s linear infinite",
            pointerEvents:"none",
          }}/>
          {/* Particles */}
          {particles.map(p => (
            <div key={p.id} style={{
              position:"absolute",left:`${p.x}%`,top:`${p.y}%`,
              width:p.size,height:p.size,borderRadius:"50%",
              background:p.color,opacity:p.opacity,
              boxShadow:`0 0 ${p.size*5}px ${p.color}`,
              willChange:"transform",
            }}/>
          ))}

          {/* ── Hero illustration (right side) ── */}
          <div style={{
            position:"absolute",right:"4%",top:"50%",
            transform:`translateY(calc(-50% + ${-parallax*.1}px))`,
            width:520,height:520,
            animation:"float-bob 6s ease-in-out infinite",
          }}>
            <div style={{position:"absolute",inset:-120,borderRadius:"50%",background:"radial-gradient(circle,rgba(201,168,76,.07) 0%,transparent 65%)",animation:"breathe 5s ease-in-out infinite"}}/>
            <div style={{position:"absolute",inset:0,borderRadius:"50%",border:"1px solid rgba(201,168,76,.18)",animation:"cw 22s linear infinite"}}/>
            <div style={{position:"absolute",inset:20,borderRadius:"50%",border:"1px dashed rgba(45,212,191,.13)",animation:"ccw 32s linear infinite"}}/>

            <svg viewBox="0 0 520 520" style={{position:"absolute",inset:0,width:"100%",height:"100%"}}>
              <defs>
                <radialGradient id="bG" cx="50%" cy="38%" r="58%">
                  <stop offset="0%"   stopColor="#e6c870" stopOpacity=".9"/>
                  <stop offset="45%"  stopColor="#c9a84c" stopOpacity=".68"/>
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity=".08"/>
                </radialGradient>
                <radialGradient id="ambG" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#c9a84c" stopOpacity=".11"/>
                  <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                </radialGradient>
                <linearGradient id="cG" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#e6c870"/>
                  <stop offset="100%" stopColor="#2dd4bf"/>
                </linearGradient>
                <filter id="sf"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <circle cx="260" cy="260" r="232" fill="url(#ambG)"/>
              <g filter="url(#sf)">
                <path d="M196 152 Q178 110 207 86 Q234 64 260 88 Q286 64 313 86 Q342 110 324 152 Q318 96 260 90 Q202 96 196 152Z" fill="#4a7fa5" opacity=".62"/>
                <path d="M193 157 Q175 195 184 234 Q172 210 192 157Z" fill="#4a7fa5" opacity=".42"/>
                <path d="M327 157 Q345 195 336 234 Q348 210 328 157Z" fill="#4a7fa5" opacity=".42"/>
                <ellipse cx="260" cy="165" rx="70" ry="76" fill="url(#bG)"/>
                <rect x="244" y="234" width="32" height="28" rx="9" fill="url(#bG)" opacity=".82"/>
                <path d="M180 262 Q210 248 242 258 L246 262 L246 325 L274 325 L274 262 L278 258 Q310 248 340 262 Q370 286 360 348 L308 348 Q303 308 260 303 Q217 308 212 348 L160 348 Q150 286 180 262Z" fill="url(#bG)" opacity=".8"/>
                <path d="M222 100 L230 78 L246 94 L260 72 L274 94 L290 78 L298 100Z" fill="url(#cG)" opacity=".72"/>
                <circle cx="260" cy="72" r="6" fill="#e6c870" opacity=".95"/>
                <circle cx="230" cy="78" r="4" fill="#2dd4bf" opacity=".85"/>
                <circle cx="290" cy="78" r="4" fill="#2dd4bf" opacity=".85"/>
                <text x="135" y="128" fill="#c9a84c" fontSize="18" opacity=".72">✦</text>
                <text x="362" y="148" fill="#2dd4bf" fontSize="14" opacity=".62">✦</text>
                <text x="148" y="310" fill="#e6c870" fontSize="11" opacity=".52">✦</text>
                <text x="355" y="295" fill="#c9a84c" fontSize="16" opacity=".62">✦</text>
                <text x="210" y="395" fill="#2dd4bf" fontSize="9"  opacity=".42">✦</text>
                <rect x="230" y="440" width="60" height="6" rx="3" fill="url(#cG)" opacity=".68"/>
                <rect x="230" y="456" width="60" height="6" rx="3" fill="url(#cG)" opacity=".68"/>
              </g>
              {/* Orbiting elements */}
              <g style={{transformOrigin:"260px 260px",animation:"orbit1 9s linear infinite"}}>
                <circle cx="260" cy="125" r="7" fill="#c9a84c" opacity=".85"/>
              </g>
              <g style={{transformOrigin:"260px 260px",animation:"orbit2 13s linear infinite"}}>
                <text x="254" y="90" fill="#2dd4bf" fontSize="15" opacity=".8">♀</text>
              </g>
              <g style={{transformOrigin:"260px 260px",animation:"orbit3 18s linear infinite reverse"}}>
                <circle cx="260" cy="48" r="5" fill="#e6c870" opacity=".7"/>
              </g>
              {/* DNA-style side lines */}
              <path d="M436 168 Q452 192 434 216 Q416 240 436 264 Q456 288 436 312" stroke="rgba(201,168,76,.32)" strokeWidth="1.5" fill="none"/>
              <path d="M450 168 Q434 192 452 216 Q470 240 450 264 Q430 288 452 312" stroke="rgba(45,212,191,.28)" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Hero text */}
        <div style={{
          position:"relative",zIndex:10,
          maxWidth:680,paddingLeft:"8%",paddingTop:90,
          transform:`translateY(${-parallax*.11}px)`,
        }}>
          {/* Eyebrow */}
          <div style={{
            display:"inline-flex",alignItems:"center",gap:14,marginBottom:36,
            opacity: heroLoaded ? 1 : 0,
            transition:"opacity .9s .2s",
          }}>
            <div style={{width:44,height:1,background:"linear-gradient(90deg,transparent,#c9a84c)"}}/>
            <span className="fs" style={{fontSize:9,letterSpacing:5.5,textTransform:"uppercase",color:"#c9a84c",fontWeight:300}}>
              Bridging The Gender Gap
            </span>
            <div style={{width:44,height:1,background:"linear-gradient(90deg,#c9a84c,transparent)"}}/>
          </div>

          {/* Headline lines */}
          {[
            {txt:"She Was",      w:300, col:"white",                  d:"0.4s",  ital:false, sh:false},
            {txt:"Born Equal.",  w:700, col:null,                     d:"0.55s", ital:true,  sh:true },
            {txt:"Treated Less.",w:300, col:"rgba(255,255,255,0.4)",  d:"0.7s",  ital:false, sh:false},
          ].map((l,i) => (
            <div key={i} style={{overflow:"hidden",marginBottom:10}}>
              <h1
                className={`fd${l.sh ? " shimmer" : ""}`}
                style={{
                  fontSize:"clamp(54px,7vw,94px)",
                  fontWeight:l.w,
                  fontStyle:l.ital ? "italic" : "normal",
                  lineHeight:0.95,
                  color: l.sh ? undefined : l.col,
                  letterSpacing:-1, margin:0,
                  opacity:    heroLoaded ? 1 : 0,
                  transform:  heroLoaded ? "translateY(0)" : "translateY(85px)",
                  transition:`opacity 1s ${l.d}, transform 1s ${l.d} cubic-bezier(.16,1,.3,1)`,
                }}
              >{l.txt}</h1>
            </div>
          ))}

          <p className="fs" style={{
            fontSize:13,fontWeight:200,letterSpacing:1.8,lineHeight:2.25,
            color:"rgba(255,255,255,.46)",maxWidth:470,
            marginTop:32,marginBottom:52,
            opacity:    heroLoaded ? 1 : 0,
            transform:  heroLoaded ? "translateY(0)" : "translateY(38px)",
            transition:"opacity 1s .9s, transform 1s .9s cubic-bezier(.16,1,.3,1)",
          }}>
            We're rewriting the narrative — where every girl is celebrated at birth, every woman leads with full power, and equality isn't an aspiration but a lived reality.
          </p>

          <div style={{
            display:"flex",gap:22,alignItems:"center",
            opacity:    heroLoaded ? 1 : 0,
            transform:  heroLoaded ? "translateY(0)" : "translateY(38px)",
            transition:"opacity 1s 1.1s, transform 1s 1.1s cubic-bezier(.16,1,.3,1)",
          }}>
            <button className="btn-primary"><span>Begin The Change</span></button>
            <button className="btn-ghost">Watch Stories</button>
          </div>

          {/* Scroll hint */}
          <div style={{
            marginTop:88,display:"flex",alignItems:"center",gap:18,
            opacity: heroLoaded ? 0.5 : 0,
            transition:"opacity 1s 1.5s",
          }}>
            <div style={{
              width:1,height:48,
              background:"linear-gradient(to bottom,transparent,#c9a84c)",
              animation:"float-bob 2.5s ease-in-out infinite",
            }}/>
            <span className="fs" style={{fontSize:8,letterSpacing:4.5,color:"rgba(255,255,255,.35)",textTransform:"uppercase",fontWeight:200}}>
              Scroll to explore
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                    STATS
      ══════════════════════════════════════════════ */}
      <section style={{position:"relative",padding:"100px 8%",background:"linear-gradient(180deg,#050d1a 0%,#081120 100%)",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 50% at 50% 50%,rgba(201,168,76,.05) 0%,transparent 70%)"}}/>
        <div style={{textAlign:"center",marginBottom:80}}>
          <div className="fs" style={{fontSize:9,letterSpacing:6,color:"#c9a84c",fontWeight:200,textTransform:"uppercase",marginBottom:18}}>
            The Reality We Must Change
          </div>
          <h2 className="fd" style={{fontSize:"clamp(30px,4vw,52px)",fontWeight:300,color:"white"}}>
            The Numbers{" "}
            <em className="shimmer" style={{fontStyle:"italic",fontWeight:600}}>Speak</em>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",maxWidth:1100,margin:"0 auto",border:"1px solid rgba(201,168,76,.1)",gap:1}}>
          {STATS.map((s,i) => (
            <div key={i} className="card" style={{
              padding:"52px 28px",textAlign:"center",
              background:"rgba(255,255,255,.018)",
              borderRight: i<3 ? "1px solid rgba(201,168,76,.08)" : "none",
              position:"relative",overflow:"hidden",
            }}>
              <div style={{
                position:"absolute",top:0,left:0,right:0,height:2,
                background:`linear-gradient(90deg,transparent,${i%2===0?"#c9a84c":"#2dd4bf"},transparent)`,
              }}/>
              <div style={{fontSize:26,marginBottom:18,opacity:.82}}>{s.icon}</div>
              <div className="fd shimmer" style={{fontSize:"clamp(34px,4vw,50px)",fontWeight:700,lineHeight:1,marginBottom:14}}>{s.value}</div>
              <div className="fs" style={{fontSize:10,letterSpacing:2,color:"rgba(255,255,255,.4)",fontWeight:200,lineHeight:1.9}}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                    MANIFESTO
      ══════════════════════════════════════════════ */}
      <section style={{position:"relative",padding:"120px 8%",background:"#081120",display:"flex",alignItems:"center",gap:"8%",overflow:"hidden"}}>
        {/* Left: SVG scale illustration */}
        <div style={{flex:1,minHeight:460}}>
          <svg viewBox="0 0 400 500" style={{width:"100%",maxWidth:370,filter:"drop-shadow(0 0 38px rgba(201,168,76,.22))"}}>
            <defs>
              <linearGradient id="sG" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#c9a84c"/>
                <stop offset="100%" stopColor="#2dd4bf"/>
              </linearGradient>
              <filter id="gs"><feGaussianBlur stdDeviation="4.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            <circle cx="200" cy="250" r="188" fill="none" stroke="rgba(201,168,76,.07)" strokeWidth="1"/>
            <circle cx="200" cy="250" r="210" fill="none" stroke="rgba(45,212,191,.04)" strokeWidth="1"/>
            <g filter="url(#gs)">
              <rect x="198" y="78" width="4" height="265" rx="2" fill="url(#sG)" opacity=".62"/>
              <rect x="78"  y="135" width="244" height="3" rx="1.5" fill="url(#sG)" opacity=".72"/>
              <circle cx="118" cy="270" r="50" fill="none" stroke="url(#sG)" strokeWidth="1.8" opacity=".72"/>
              <text x="103" y="284" fill="url(#sG)" fontSize="36" fontFamily="Georgia" opacity=".88">♀</text>
              <line x1="118" y1="138" x2="118" y2="220" stroke="url(#sG)" strokeWidth="1.5" opacity=".62"/>
              <circle cx="282" cy="270" r="50" fill="none" stroke="rgba(74,127,165,.58)" strokeWidth="1.8" opacity=".72"/>
              <text x="267" y="284" fill="rgba(74,127,165,.88)" fontSize="36" fontFamily="Georgia">♂</text>
              <line x1="282" y1="138" x2="282" y2="220" stroke="rgba(74,127,165,.58)" strokeWidth="1.5" opacity=".62"/>
              <rect x="168" y="380" width="64" height="6" rx="3" fill="url(#sG)" opacity=".82"/>
              <rect x="168" y="398" width="64" height="6" rx="3" fill="url(#sG)" opacity=".82"/>
              <text x="48"  y="96"  fill="#c9a84c" fontSize="17" opacity=".62">✦</text>
              <text x="322" y="76"  fill="#2dd4bf" fontSize="13" opacity=".52">✦</text>
              <text x="28"  y="345" fill="#e6c870" fontSize="10" opacity=".42">✦</text>
              <text x="348" y="388" fill="#c9a84c" fontSize="15" opacity=".52">✦</text>
            </g>
          </svg>
        </div>

        {/* Right: text */}
        <div style={{flex:1.3}}>
          <div className="fs" style={{fontSize:9,letterSpacing:6,color:"#c9a84c",fontWeight:200,textTransform:"uppercase",marginBottom:26}}>Our Manifesto</div>
          <h2 className="fd" style={{fontSize:"clamp(30px,4vw,54px)",fontWeight:300,lineHeight:1.12,color:"white",marginBottom:28}}>
            Every girl born today<br/>
            <em className="shimmer fd" style={{fontStyle:"italic",fontWeight:600}}>deserves a celebration,</em><br/>
            not a condemnation.
          </h2>
          <div style={{width:55,height:1,background:"linear-gradient(90deg,#c9a84c,transparent)",marginBottom:28}}/>
          {["In a world where the gender of a child should never determine their worth, we fight to dismantle centuries of bias — in homes, in boardrooms, in laws, and in hearts.",
            "Equal opportunity isn't charity. It's the foundation of civilization's next great leap forward."
          ].map((t,i) => (
            <p key={i} className="fs" style={{fontSize:13,fontWeight:200,letterSpacing:1.5,lineHeight:2.2,color:"rgba(255,255,255,.46)",marginBottom:20}}>{t}</p>
          ))}
          {["Advocate for equal birth rights","Empower women in leadership","Change cultural narratives"].map((item,i) => (
            <div key={i} style={{display:"flex",alignItems:"center",gap:16,marginBottom:18}}>
              <div style={{
                width:28,height:28,borderRadius:"50%",flexShrink:0,
                background:"linear-gradient(135deg,rgba(201,168,76,.16),rgba(45,212,191,.16))",
                border:"1px solid rgba(201,168,76,.28)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:11,color:"#c9a84c",
              }}>✦</div>
              <span className="fs" style={{fontSize:11,letterSpacing:2.2,color:"rgba(255,255,255,.58)",fontWeight:300}}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                    QUOTE BANNER
      ══════════════════════════════════════════════ */}
      <section style={{
        position:"relative",padding:"110px 8%",
        background:"linear-gradient(135deg,#0c1a2e 0%,#081120 50%,#0e1f35 100%)",
        textAlign:"center",overflow:"hidden",
      }}>
        <div style={{
          position:"absolute",inset:0,
          backgroundImage:`linear-gradient(rgba(201,168,76,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.05) 1px,transparent 1px)`,
          backgroundSize:"44px 44px",
        }}/>
        {[{side:"left",c:"#2dd4bf"},{side:"right",c:"#c9a84c"}].map((a,i) => (
          <div key={i} style={{
            position:"absolute",[a.side]:"8%",top:"50%",transform:"translateY(-50%)",
            width:3,height:80,
            background:`linear-gradient(to bottom,transparent,${a.c},transparent)`,
          }}/>
        ))}
        <div style={{position:"relative",zIndex:1}}>
          <div className="fd" style={{fontSize:64,color:"rgba(201,168,76,.22)",lineHeight:.5,marginBottom:22}}>"</div>
          <blockquote className="fd" style={{
            fontSize:"clamp(22px,3.5vw,48px)",fontWeight:300,fontStyle:"italic",
            color:"white",lineHeight:1.35,maxWidth:840,margin:"0 auto 28px",
            animation:"text-aura 5s ease-in-out infinite",
          }}>
            There is no tool for development more effective than the empowerment of women.
          </blockquote>
          <div className="fs" style={{fontSize:10,letterSpacing:4,color:"rgba(255,255,255,.3)",fontWeight:200}}>
            — Kofi Annan, UN Secretary-General
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                    THREE PILLARS
      ══════════════════════════════════════════════ */}
      <section style={{padding:"100px 8%",background:"#050d1a"}}>
        <div style={{textAlign:"center",marginBottom:80}}>
          <div className="fs" style={{fontSize:9,letterSpacing:6,color:"#c9a84c",fontWeight:200,textTransform:"uppercase",marginBottom:18}}>What We Do</div>
          <h2 className="fd" style={{fontSize:"clamp(30px,4vw,52px)",fontWeight:300,color:"white"}}>
            Three Pillars of{" "}
            <em className="shimmer" style={{fontStyle:"italic",fontWeight:600}}>Change</em>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2}}>
          {[
            {icon:"🌸",num:"01",title:"Girl Child Valuation",  accent:"#c9a84c",
             body:"Transforming cultural narratives around girl births through education, advocacy, and community programs that celebrate every new life equally."},
            {icon:"⚡",num:"02",title:"Equal Opportunity",     accent:"#2dd4bf",
             body:"Breaking systemic barriers in education, employment, and leadership so women can access the same opportunities as their male counterparts."},
            {icon:"👑",num:"03",title:"Women in Power",        accent:"#4a7fa5",
             body:"Amplifying women's voices in decision-making at every level — from village councils to global boardrooms and political leadership."},
          ].map((p,i) => (
            <div key={i} className="card" style={{
              padding:"60px 38px",
              background:"rgba(255,255,255,.02)",
              border:"1px solid rgba(255,255,255,.05)",
              position:"relative",overflow:"hidden",
            }}>
              <div style={{position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,transparent,${p.accent},transparent)`}}/>
              <div className="fs" style={{fontSize:9,letterSpacing:4.5,color:p.accent,fontWeight:200,marginBottom:24,opacity:.72}}>{p.num}</div>
              <div style={{fontSize:34,marginBottom:22}}>{p.icon}</div>
              <h3 className="fd" style={{fontSize:27,fontWeight:400,color:"white",marginBottom:18,lineHeight:1.25}}>{p.title}</h3>
              <p className="fs" style={{fontSize:12,fontWeight:200,letterSpacing:1,lineHeight:2.1,color:"rgba(255,255,255,.42)"}}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
                    FINAL CTA
      ══════════════════════════════════════════════ */}
      <section style={{
        position:"relative",padding:"130px 8%",
        background:"linear-gradient(180deg,#050d1a 0%,#081520 100%)",
        textAlign:"center",overflow:"hidden",
      }}>
        {[600,820].map((s,i) => (
          <div key={i} style={{
            position:"absolute",top:"50%",left:"50%",
            transform:"translate(-50%,-50%)",
            width:s,height:s,borderRadius:"50%",
            border:`1px solid rgba(${i===0?"201,168,76":"45,212,191"},${i===0?.07:.04})`,
          }}/>
        ))}
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 55% 55% at 50% 50%,rgba(201,168,76,.06) 0%,transparent 70%)"}}/>

        <div style={{position:"relative",zIndex:1}}>
          <div className="fs" style={{fontSize:9,letterSpacing:6,color:"#c9a84c",fontWeight:200,textTransform:"uppercase",marginBottom:26}}>Join The Movement</div>
          <h2 className="fd" style={{fontSize:"clamp(36px,6vw,76px)",fontWeight:300,lineHeight:1.1,color:"white",marginBottom:20}}>
            Be The Change<br/>
            <em className="shimmer fd" style={{fontStyle:"italic",fontWeight:700}}>She Deserves.</em>
          </h2>
          <p className="fs" style={{
            fontSize:13,fontWeight:200,letterSpacing:2,color:"rgba(255,255,255,.4)",
            maxWidth:470,margin:"0 auto 54px",lineHeight:2.2,
          }}>
            Together, we can bridge every gap — in opportunity, in respect, and in the simple dignity of being born equal.
          </p>
          <div style={{display:"flex",justifyContent:"center",gap:22,flexWrap:"wrap"}}>
            <button className="btn-primary"><span>Start Your Journey</span></button>
            <button className="btn-ghost">Learn More</button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        padding:"36px 8%",
        borderTop:"1px solid rgba(201,168,76,.1)",
        display:"flex",justifyContent:"space-between",alignItems:"center",
        background:"#050d1a",flexWrap:"wrap",gap:18,
      }}>
        <div className="fs" style={{fontSize:10,letterSpacing:2,color:"rgba(255,255,255,.2)",fontWeight:200}}>
          © 2025 EqualRise. All rights reserved.
        </div>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          {["rgba(201,168,76,.3)","rgba(201,168,76,.6)","rgba(201,168,76,.9)"].map((c,i) => (
            <span key={i} style={{color:c,fontSize:14}}>♀</span>
          ))}
          <span className="fs" style={{fontSize:9,letterSpacing:3.5,color:"rgba(201,168,76,.42)",fontWeight:200,marginLeft:10}}>
            For Every Girl Born Today
          </span>
        </div>
      </footer>
    </div>
  );
}
