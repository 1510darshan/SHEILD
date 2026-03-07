import React, { useState } from 'react';
import interventionsData, { priorityLevels, statusList } from '../../data/interventions';
import { Card, PageHeader, FilterPanel, RiskBadge, Badge, ProgressBar } from '../../components/ui/Components';
import { useAuth } from '../../context/AuthContext';
import './Interventions.css';

function Interventions() {
    const { user } = useAuth();
    const [filters, setFilters] = useState({ priority: '', status: '' });

    const filteredInterventions = interventionsData.filter(inv => {
        if (filters.priority && inv.priority !== filters.priority) return false;
        if (filters.status && inv.status !== filters.status) return false;
        return true;
    });

    const handleFilterChange = (key, value) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const getPriorityColor = (p) => {
        switch (p) {
            case 'Urgent': return 'critical';
            case 'High': return 'high';
            case 'Medium': return 'moderate';
            default: return 'low';
        }
    };

    return (
        <div className="interventions-page">
            <div className="container">
                <PageHeader
                    title="Intervention Recommendations"
                    subtitle="Actionable, data-driven suggestions for addressing gender equity challenges in high-risk regions."
                    actions={
                        <FilterPanel
                            filters={[
                                { key: 'priority', label: 'Priority', options: priorityLevels },
                                { key: 'status', label: 'Status', options: statusList }
                            ]}
                            values={filters}
                            onChange={handleFilterChange}
                        />
                    }
                />

                <div className="inv-list">
                    {filteredInterventions.map(inv => (
                        <Card key={inv.id} className="inv-card">
                            <div className="inv-header">
                                <div className="inv-title-area">
                                    <h3>{inv.intervention}</h3>
                                    <div className="inv-badges">
                                        <RiskBadge level={inv.risk_level} />
                                        <Badge variant={getPriorityColor(inv.priority)}>Priority: {inv.priority}</Badge>
                                    </div>
                                </div>
                                <div className="inv-location">
                                    <span className="loc-icon">📍</span>
                                    {inv.district}, {inv.state}
                                </div>
                            </div>

                            <div className="inv-body">
                                <p>{inv.description}</p>
                            </div>

                            <div className="inv-footer">
                                <div className="inv-progress-area">
                                    <div className="prog-text">
                                        <span className="prog-status">Status: {inv.status}</span>
                                        <span className="prog-pct">{inv.progress}% Complete</span>
                                    </div>
                                    <ProgressBar value={inv.progress} color={inv.progress === 100 ? 'var(--risk-low)' : 'var(--color-primary)'} />
                                </div>

                                <div className="inv-actions">
                                    {user?.role === 'gov_admin' && (
                                        <button className="btn btn-outline">Update Progress</button>
                                    )}
                                    {user?.role === 'ngo_user' && (
                                        <button className="btn btn-primary">Register Program</button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    ))}
                    {filteredInterventions.length === 0 && (
                        <div className="empty-state">No interventions match your filters.</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Interventions;
