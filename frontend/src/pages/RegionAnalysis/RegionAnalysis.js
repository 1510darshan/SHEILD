import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import regionsData, { getRiskColor, getRiskBg } from '../../data/regions';
import { Card, RiskBadge, PageHeader, ProgressBar } from '../../components/ui/Components';
import './RegionAnalysis.css';

// Simple indicator box component
const Indicator = ({ label, value, subtext, highlight }) => (
    <div className={`indicator-box ${highlight ? 'highlight' : ''}`}>
        <span className="ind-label">{label}</span>
        <span className={`ind-value ${highlight ? 'text-primary' : ''}`}>{value}</span>
        {subtext && <span className="ind-subtext">{subtext}</span>}
    </div>
);

function RegionAnalysis() {
    const { id } = useParams();
    const region = regionsData.find(r => r.region_id === parseInt(id));

    if (!region) {
        return <Navigate to="/risk-map" replace />;
    }

    return (
        <div className="region-analysis-page">
            <div className="container">
                <div className="page-header">
                    <div>
                        <div className="breadcrumb">
                            <Link to="/risk-map">Risk Map</Link> / <span>{region.district_name}</span>
                        </div>
                        <h1 className="page-header__title">{region.district_name} District</h1>
                        <p className="page-header__subtitle">{region.state_name} • Population: {region.population.toLocaleString()}</p>
                    </div>
                    <div className="page-header__actions">
                        <div className="score-badge" style={{ background: getRiskBg(region.risk_level), borderColor: getRiskColor(region.risk_level), color: getRiskColor(region.risk_level) }}>
                            <span className="score-val">{region.gender_risk_score}</span>
                            <span className="score-lbl">Risk Score</span>
                        </div>
                        <RiskBadge level={region.risk_level} />
                    </div>
                </div>

                <div className="analysis-grid">
                    {/* Main Content Area */}
                    <div className="analysis-main">
                        {/* Birth Statistics */}
                        <Card className="analysis-section">
                            <h3>Birth & Demographics</h3>
                            <p className="section-desc">Analysis of birth registrations for {region.birth_year}</p>

                            <div className="metrics-grid">
                                <Indicator
                                    label="Sex Ratio at Birth"
                                    value={region.sex_ratio}
                                    subtext="Females per 1000 Males"
                                    highlight={region.sex_ratio < 900}
                                />
                                <Indicator label="Female Births" value={region.female_births.toLocaleString()} />
                                <Indicator label="Male Births" value={region.male_births.toLocaleString()} />
                            </div>

                            <div className="compare-bar mt-4">
                                <div className="c-labels">
                                    <span>Female ({Math.round(region.female_births / (region.female_births + region.male_births) * 100)}%)</span>
                                    <span>Male ({Math.round(region.male_births / (region.female_births + region.male_births) * 100)}%)</span>
                                </div>
                                <div className="c-track">
                                    <div className="c-fill female" style={{ width: `${(region.female_births / (region.female_births + region.male_births)) * 100}%` }}></div>
                                    <div className="c-fill male" style={{ width: `${(region.male_births / (region.female_births + region.male_births)) * 100}%` }}></div>
                                </div>
                            </div>
                        </Card>

                        {/* Education Indicators */}
                        <Card className="analysis-section">
                            <h3>Education & Schooling</h3>
                            <p className="section-desc">Literacy rates and dropout statistics across genders</p>

                            <div className="metrics-grid mb-4">
                                <Indicator label="Female Literacy" value={`${region.female_literacy}%`} highlight={region.female_literacy < 60} />
                                <Indicator label="Male Literacy" value={`${region.male_literacy}%`} />
                                <Indicator label="Literacy Gap" value={`${(region.male_literacy - region.female_literacy).toFixed(1)}%`} />
                            </div>

                            <div className="metrics-grid">
                                <Indicator label="Girl Dropout Rate" value={`${region.girl_dropout_rate}%`} highlight={region.girl_dropout_rate > 15} />
                                <Indicator label="Boy Dropout Rate" value={`${region.boy_dropout_rate}%`} />
                            </div>
                        </Card>

                        {/* Economic Indicators */}
                        <Card className="analysis-section">
                            <h3>Economic Participation</h3>
                            <p className="section-desc">Workforce engagement and financial independence</p>

                            <div className="metrics-grid mb-4">
                                <Indicator label="Female Labor Force" value={`${region.female_labor_participation}%`} highlight={region.female_labor_participation < 25} />
                                <Indicator label="Male Labor Force" value={`${region.male_labor_participation}%`} />
                            </div>

                            <div className="metrics-grid">
                                <Indicator label="Women SHGs" value={region.women_shg} subtext="Active self-help groups" />
                                <Indicator label="Women-Owned Biz" value={`${region.women_owned_business_pct}%`} />
                            </div>
                        </Card>

                        {/* Social & Safety */}
                        <Card className="analysis-section">
                            <h3>Social Health & Safety</h3>
                            <p className="section-desc">Community well-being and protection metrics</p>

                            <div className="metrics-grid mb-4">
                                <Indicator label="Child Marriage Rate" value={`${region.child_marriage_rate}%`} highlight={region.child_marriage_rate > 10} />
                                <Indicator label="Maternal Health Index" value={`${region.maternal_health_index}/100`} />
                                <Indicator label="Girl Nutrition Index" value={`${region.girl_nutrition_index}/100`} />
                            </div>

                            <div className="metrics-grid safety-grid">
                                <Indicator label="Crimes Against Women" value={region.crimes_against_women} />
                                <Indicator label="Domestic Violence Reports" value={region.domestic_violence} />
                                <Indicator label="Trafficking Cases Detected" value={region.trafficking_cases} highlight={region.trafficking_cases > 5} />
                            </div>
                        </Card>
                    </div>

                    {/* Sidebar Area */}
                    <div className="analysis-sidebar">
                        <Card className="summary-card">
                            <h3>Risk Assessment</h3>
                            <div className="risk-summary mt-4">
                                <div className="summary-row">
                                    <span className="s-label">Primary Risk Factor</span>
                                    <span className="s-value text-critical">{region.primary_risk_factor}</span>
                                </div>

                                <h4 className="mt-6 mb-2">Contributing Factors</h4>

                                <div className="factor-item">
                                    <div className="f-head"><span>Education Deficit</span><span>{region.girl_dropout_rate > 20 ? 'High' : 'Medium'}</span></div>
                                    <ProgressBar value={region.girl_dropout_rate * 2.5} color={region.girl_dropout_rate > 20 ? 'var(--risk-critical)' : 'var(--risk-moderate)'} />
                                </div>

                                <div className="factor-item mt-3">
                                    <div className="f-head"><span>Economic Gap</span><span>{region.female_labor_participation < 20 ? 'High' : 'Low'}</span></div>
                                    <ProgressBar value={(100 - region.female_labor_participation)} color={region.female_labor_participation < 20 ? 'var(--risk-critical)' : 'var(--color-primary)'} />
                                </div>

                                <div className="factor-item mt-3">
                                    <div className="f-head"><span>Social Vulnerability</span><span>{region.child_marriage_rate > 30 ? 'High' : 'Medium'}</span></div>
                                    <ProgressBar value={region.child_marriage_rate * 2} color={region.child_marriage_rate > 30 ? 'var(--risk-critical)' : 'var(--risk-moderate)'} />
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link to="/interventions" className="btn btn-primary w-100">View Recommended Interventions</Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegionAnalysis;
