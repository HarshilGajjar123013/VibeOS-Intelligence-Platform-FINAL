"use client";

import React from "react";
import { 
  Check, 
  MessageSquare, 
  Sparkles 
} from 'lucide-react';
import ScrollReveal from "@/src/components/ui/ScrollReveal";
import "./Methodology.scss";

export default function Features() {
  return (
    <section className="feature">
      <div className="feature__container">
        
        {/* Methodology Header */}
        <ScrollReveal variant="fadeInUp" className="feature__header">
          <span className="feature__kicker">Methodology</span>
          <h2 className="feature__main-title">How VibeOS works</h2>
        </ScrollReveal>

        {/* Feature Bento/Grid */}
        <div className="feature__grid">
          
          {/* Card 1: Capture Signals */}
          <ScrollReveal variant="fadeInUp" delay={100} className="feature__card feature__card--capture">
            <div className="feature__visual-area">
              <div className="visual-capture">
                {/* Floating Signal Waves & Bubbles */}
                <div className="signal-bubble bubble-1">
                  <span className="emoji">❤️</span>
                  <span className="label">Kudos</span>
                </div>
                <div className="signal-bubble bubble-2">
                  <span className="emoji">😊</span>
                  <span className="label">Pulse</span>
                </div>
                <div className="signal-bubble bubble-3">
                  <span className="emoji">💬</span>
                  <span className="label">Feedback</span>
                </div>
                
                {/* Receiver central hub */}
                <div className="receiver-node">
                  <div className="ripple ripple-1" />
                  <div className="ripple ripple-2" />
                  <div className="ripple ripple-3" />
                  <div className="node-core">
                    <MessageSquare size={22} className="node-icon" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature__content">
              <div className="feature__number">1</div>
              <h3 className="feature__title">Multi-Source Signal Ingestion</h3>
              <p className="feature__desc">
                Capture zero-friction pulse surveys, Slack/Teams interaction sentiment, and 1-on-1 feedback streams automatically.
              </p>
              <div className="feature__divider" />
              <p className="feature__secondary-desc">
                Replaces outdated 50-question annual surveys with lightweight, real-time pulse signals collected in the natural flow of work.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 2: Predictive Risk Engine */}
          <ScrollReveal variant="fadeInUp" delay={200} className="feature__card feature__card--intelligence">
            <div className="feature__visual-area">
              <div className="visual-intelligence">
                {/* AI brain / chart widget */}
                <div className="intel-widget">
                  <div className="widget-header">
                    <span className="widget-badge"><Sparkles size={10} /> AI Intelligence</span>
                    <span className="widget-tag">Sprint Risk Alert</span>
                  </div>
                  <div className="widget-body">
                    <div className="metric-row">
                      <div className="metric-info">
                        <span className="metric-title">Sprint Friction Velocity</span>
                        <span className="metric-subtitle">Frontend Engineering</span>
                      </div>
                      <div className="metric-value text-red">High Risk</div>
                    </div>
                    <div className="progress-track">
                      <div className="progress-bar bar-alert" style={{ width: "82%" }} />
                    </div>
                    
                    <div className="metric-row secondary">
                      <div className="metric-info">
                        <span className="metric-title">OKR Alignment Score</span>
                        <span className="metric-subtitle">Product & Design</span>
                      </div>
                      <div className="metric-value text-green">Optimal (89%)</div>
                    </div>
                    <div className="progress-track">
                      <div className="progress-bar bar-stable" style={{ width: "91%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature__content">
              <div className="feature__number">2</div>
              <h3 className="feature__title">Predictive Risk & Alignment Engine</h3>
              <p className="feature__desc">
                AI continuously analyzes sentiment patterns to detect manager bottlenecks, burnout velocity, and team silos.
              </p>
              <div className="feature__divider" />
              <p className="feature__secondary-desc">
                Surfaces emerging team friction 3 to 6 weeks before it turns into voluntary turnover or missed sprint deadlines.
              </p>
            </div>
          </ScrollReveal>

          {/* Card 3: Automated Manager Playbooks */}
          <ScrollReveal variant="fadeInUp" delay={300} className="feature__card feature__card--change">
            <div className="feature__visual-area">
              <div className="visual-change">
                {/* Checklist action items */}
                <div className="action-widget">
                  <div className="widget-header">
                    <span className="action-title">Manager Action Playbook</span>
                    <span className="action-pct">1 of 2 Interventions Deployed</span>
                  </div>
                  <div className="action-list">
                    <div className="action-item done">
                      <div className="check-box">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="item-text">Deploy 1-on-1 Workload Alignment Guide</span>
                    </div>
                    <div className="action-item active">
                      <div className="check-box" />
                      <span className="item-text">Run Sprint Scope & Burnout Check</span>
                    </div>
                  </div>
                  {/* Growth sparkline */}
                  <div className="sparkline-container">
                    <div className="sparkline-bar bar-1" />
                    <div className="sparkline-bar bar-2" />
                    <div className="sparkline-bar bar-3" />
                    <div className="sparkline-bar bar-4" />
                    <div className="sparkline-bar bar-5" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="feature__content">
              <div className="feature__number">3</div>
              <h3 className="feature__title">Automated Manager Playbooks</h3>
              <p className="feature__desc">
                Delivers contextual talking points, coaching guides, and intervention playbooks directly to frontline team leads.
              </p>
              <div className="feature__divider" />
              <p className="feature__secondary-desc">
                Equips managers with clear, psychometrically validated actions to resolve team friction immediately.
              </p>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}