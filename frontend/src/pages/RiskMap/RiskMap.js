import React, { useState, useMemo } from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import regionsData, { stateList, riskLevels, indicatorTypes, getRiskColor, getRiskBg } from '../../data/regions';
import { Card, FilterPanel, RiskBadge, PageHeader } from '../../components/ui/Components';
import './RiskMap.css';

// Component to recenter map when selected region changes
function RecenterMap({ lat, lng, zoom }) {
    const map = useMap();
    if (lat && lng) {
        map.setView([lat, lng], zoom || 7, { animate: true });
    }
    return null;
}

function RiskMap() {
    const navigate = useNavigate();
    const [filters, setFilters] = useState({ state: '', risk: '', indicator: 'sex_ratio' });
    const [selectedRegion, setSelectedRegion] = useState(null);

    // Filter the regions based on panel
    const filteredRegions = useMemo(() => {
        return regionsData.filter(r => {
            if (filters.state && r.state_name !== filters.state) return false;
            if (filters.risk && r.risk_level !== filters.risk) return false;
            return true;
        });
    }, [filters]);

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        setSelectedRegion(null); // Reset selection on filter change
    };

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    return (
        <div className="risk-map-page">
            <div className="container map-header-container">
                <PageHeader
                    title="Gender Risk Map"
                    subtitle="Interactive geographic visualization of gender imbalance across districts."
                />

                <FilterPanel
                    filters={[
                        { key: 'state', label: 'State', options: stateList },
                        { key: 'risk', label: 'Risk Level', options: riskLevels },
                        { key: 'indicator', label: 'Primary Metric', options: indicatorTypes }
                    ]}
                    values={filters}
                    onChange={handleFilterChange}
                />
            </div>

            <div className="map-layout">
                <div className="map-wrapper">
                    <MapContainer center={[22.5937, 78.9629]} zoom={5} className="leaflet-container" scrollWheelZoom={false}>
                        {/* Dark themed map tiles */}
                        <TileLayer
                            attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                        />

                        {selectedRegion && <RecenterMap lat={selectedRegion.lat} lng={selectedRegion.lng} zoom={8} />}

                        {filteredRegions.map(region => {
                            const color = getRiskColor(region.risk_level);
                            return (
                                <CircleMarker
                                    key={region.region_id}
                                    center={[region.lat, region.lng]}
                                    pathOptions={{ color, fillColor: color, fillOpacity: 0.7, weight: 2 }}
                                    radius={selectedRegion?.region_id === region.region_id ? 12 : 8}
                                    eventHandlers={{
                                        click: () => handleRegionClick(region),
                                    }}
                                >
                                    <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                                        <div className="map-tooltip">
                                            <strong>{region.district_name}, {region.state_name}</strong>
                                            <div className="mt-1">
                                                <RiskBadge level={region.risk_level} />
                                            </div>
                                            <div className="tooltip-metrics">
                                                <div>Score: <strong>{region.gender_risk_score}/100</strong></div>
                                                <div>Sex Ratio: <strong>{region.sex_ratio}</strong></div>
                                            </div>
                                        </div>
                                    </Tooltip>
                                </CircleMarker>
                            );
                        })}
                    </MapContainer>

                    <div className="map-legend">
                        <h4>Risk Levels</h4>
                        <div className="legend-items">
                            <div className="legend-item"><span className="legend-color" style={{ background: getRiskColor('Low') }}></span> Low (0-39)</div>
                            <div className="legend-item"><span className="legend-color" style={{ background: getRiskColor('Moderate') }}></span> Moderate (40-59)</div>
                            <div className="legend-item"><span className="legend-color" style={{ background: getRiskColor('High') }}></span> High (60-74)</div>
                            <div className="legend-item"><span className="legend-color" style={{ background: getRiskColor('Critical') }}></span> Critical (75-100)</div>
                        </div>
                    </div>
                </div>

                {/* Side Panel for Selected Region */}
                <div className={`region-panel ${selectedRegion ? 'open' : ''}`}>
                    {selectedRegion ? (
                        <Card className="panel-card">
                            <div className="panel-header">
                                <div>
                                    <h2>{selectedRegion.district_name}</h2>
                                    <p className="state-name">{selectedRegion.state_name}</p>
                                </div>
                                <RiskBadge level={selectedRegion.risk_level} />
                            </div>

                            <div className="panel-score">
                                <div className="score-circle" style={{ borderColor: getRiskColor(selectedRegion.risk_level), color: getRiskColor(selectedRegion.risk_level) }}>
                                    {selectedRegion.gender_risk_score}
                                </div>
                                <div>
                                    <h4>Gender Risk Score</h4>
                                    <p className="primary-factor">Key Factor: {selectedRegion.primary_risk_factor}</p>
                                </div>
                            </div>

                            <div className="panel-metrics">
                                <div className="metric-row">
                                    <span className="metric-label">Sex Ratio (F/1000M)</span>
                                    <span className={`metric-value ${selectedRegion.sex_ratio < 900 ? 'text-critical' : ''}`}>
                                        {selectedRegion.sex_ratio}
                                    </span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Female Literacy</span>
                                    <span className="metric-value">{selectedRegion.female_literacy}%</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Child Marriage Rate</span>
                                    <span className="metric-value">{selectedRegion.child_marriage_rate}%</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Female Labor Force</span>
                                    <span className="metric-value">{selectedRegion.female_labor_participation}%</span>
                                </div>
                                <div className="metric-row">
                                    <span className="metric-label">Total Population</span>
                                    <span className="metric-value">{selectedRegion.population.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="panel-actions">
                                <button
                                    className="btn btn-primary w-100"
                                    onClick={() => navigate(`/region/${selectedRegion.region_id}`)}
                                >
                                    View Full Analysis
                                </button>
                                <button className="btn btn-outline w-100" onClick={() => setSelectedRegion(null)}>
                                    Close Panel
                                </button>
                            </div>
                        </Card>
                    ) : (
                        <div className="empty-panel">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="empty-icon"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                            <p>Select a region on the map to view detailed indicators and risk analysis.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RiskMap;
