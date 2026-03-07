import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Card, StatCard } from '../../components/ui/Components';
import './Home.css';

// SVG Icons
const IconUsers = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v-2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>;
const IconBook = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" /></svg>;
const IconRing = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;
const IconBriefcase = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg>;

const IconData = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>;
const IconChart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
const IconHeart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>;

function Home() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-inner">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            AI-Powered <span className="text-highlight">Gender Equity</span> Intelligence Platform
                        </h1>
                        <p className="hero-desc">
                            A data-driven platform designed to detect gender imbalance across regions. We analyze birth data, education indicators, employment statistics, and social factors to support awareness, policy decisions, and community intervention.
                        </p>
                        <div className="hero-actions">
                            <Link to="/risk-map" className="btn btn-primary btn-lg">View Gender Risk Map</Link>
                            <Link to="/data-insights" className="btn btn-outline btn-lg">Explore Data Insights</Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        {/* Abstract data visualization / map representation */}
                        <div className="abstract-map">
                            <div className="map-node n1 pulse"></div>
                            <div className="map-node n2 pulse-slow"></div>
                            <div className="map-node n3"></div>
                            <div className="map-node n4 pulse"></div>
                            <div className="map-node n5 pulse-slow"></div>

                            <svg className="map-connections" viewBox="0 0 400 400">
                                <path d="M 80 150 Q 150 100 200 80 T 320 180" stroke="rgba(63, 81, 181, 0.2)" strokeWidth="2" fill="none" />
                                <path d="M 80 150 Q 180 250 250 320 T 320 180" stroke="rgba(0, 150, 136, 0.2)" strokeWidth="2" fill="none" />
                                <path d="M 150 220 L 250 160 L 320 180" stroke="rgba(255, 152, 0, 0.2)" strokeWidth="2" fill="none" />
                            </svg>
                            <div className="map-node n6"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Overview */}
            <section className="section bg-white">
                <div className="container">
                    <div className="section-header">
                        <h2>Problem Overview</h2>
                        <p>Addressing the major challenges in achieving gender equity across regions.</p>
                    </div>

                    <div className="grid-4">
                        <Card hoverable className="problem-card">
                            <div className="problem-icon primary"><IconUsers /></div>
                            <h3>Skewed Sex Ratio</h3>
                            <p>Analyzing birth registration data to identify regions with unnatural male-to-female birth ratios.</p>
                        </Card>

                        <Card hoverable className="problem-card">
                            <div className="problem-icon secondary"><IconBook /></div>
                            <h3>Girl Education Gap</h3>
                            <p>Tracking female literacy rates and school dropout patterns to ensure equal educational opportunities.</p>
                        </Card>

                        <Card hoverable className="problem-card">
                            <div className="problem-icon accent"><IconRing /></div>
                            <h3>Child Marriage</h3>
                            <p>Monitoring early marriage prevalence and identifying vulnerable districts for targeted legal intervention.</p>
                        </Card>

                        <Card hoverable className="problem-card">
                            <div className="problem-icon primary"><IconBriefcase /></div>
                            <h3>Female Employment Gap</h3>
                            <p>Measuring female labor force participation and the presence of women in the formal economy.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Platform Workflow */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Platform Workflow</h2>
                        <p>How we transform raw data into actionable community interventions.</p>
                    </div>

                    <div className="workflow-steps">
                        <div className="workflow-card">
                            <div className="step-number">01</div>
                            <div className="workflow-icon"><IconData /></div>
                            <h3>Data Collection</h3>
                            <p>Gathering comprehensive datasets from government census, health surveys, and open sources across multiple indicators.</p>
                        </div>

                        <div className="workflow-connector"></div>

                        <div className="workflow-card">
                            <div className="step-number">02</div>
                            <div className="workflow-icon"><IconChart /></div>
                            <h3>Risk Analysis</h3>
                            <p>Generating composite gender risk scores and identifying vulnerable districts using predictive analytics and machine learning.</p>
                        </div>

                        <div className="workflow-connector"></div>

                        <div className="workflow-card">
                            <div className="step-number">03</div>
                            <div className="workflow-icon"><IconHeart /></div>
                            <h3>Community Intervention</h3>
                            <p>Guiding awareness campaigns, educational initiatives, and policy programs based on localized data insights.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Metrics */}
            <section className="section bg-white pb-20" ref={ref}>
                <div className="container">
                    <div className="section-header">
                        <h2>Platform Impact</h2>
                        <p>Measuring our reach in detecting imbalance and recommending solutions.</p>
                    </div>

                    <div className="grid-3 metrics-grid">
                        <StatCard
                            color="primary"
                            icon={<IconData />}
                            value={inView ? <CountUp end={32036} separator="," duration={2.5} /> : "0"}
                            label="Total Regions Analyzed"
                            mini={<div className="metrics-bars"><div className="bar b1" /><div className="bar b2" /><div className="bar b3" /><div className="bar b4" /></div>}
                        />

                        <StatCard
                            color="accent"
                            icon={<IconChart />}
                            value={inView ? <CountUp end={2190} separator="," suffix="+" duration={2.5} /> : "0"}
                            label="High-Risk Regions Detected"
                            mini={<div className="metrics-bars accent"><div className="bar b2" /><div className="bar b4" /><div className="bar b1" /><div className="bar b3" /></div>}
                        />

                        <StatCard
                            color="secondary"
                            icon={<IconHeart />}
                            value={inView ? <CountUp end={167} duration={2.5} /> : "0"}
                            label="Awareness Programs Suggested"
                            mini={<div className="metrics-bars secondary"><div className="bar b3" /><div className="bar b1" /><div className="bar b4" /><div className="bar b2" /></div>}
                        />
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to explore the data?</h2>
                        <p>Access the interactive risk map and help build a more equitable future.</p>
                        <Link to="/login" className="btn btn-primary btn-lg mt-4">Get Started</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
