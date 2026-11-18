"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ChevronDown, 
  Users, 
  LogOut, 
  EyeOff, 
  Target, 
  MessageSquare, 
  Brain, 
  Zap, 
  Sparkles, 
  TrendingUp, 
  Play, 
  Smile, 
  Meh, 
  Frown,
  Activity,
  Shield,
  Layers,
  ArrowRight,
  BarChart3,
  Cpu,
  Sliders,
  CheckCircle2,
  Lock,
  Globe,
  Heart,
  UserCheck,
  TrendingDown,
  Compass,
  AlertTriangle,
  Award,
  BookOpen
} from "lucide-react";
import "./Engagement.scss";
import { useProtoStore } from "@/src/store/useProtoStore";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import RequestDemo from "@/src/components/RequestDemo/RequestDemo";

export default function Platform() {
  const { setDemoModalOpen } = useProtoStore();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showcaseTab, setShowcaseTab] = useState<"engage" | "ai" | "heatmap" | "action">("engage");
  const [activeQuadrant, setActiveQuadrant] = useState<"peak" | "aligned" | "support" | "risk">("peak");

  // Automatic Quadrant Rotation Timer
  useEffect(() => {
    const quadrants: ("peak" | "aligned" | "support" | "risk")[] = ["peak", "aligned", "support", "risk"];
    const interval = setInterval(() => {
      setActiveQuadrant((prev) => {
        const nextIndex = (quadrants.indexOf(prev) + 1) % quadrants.length;
        return quadrants[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Automatic Showcase Tab Rotation Timer
  useEffect(() => {
    const tabs: ("engage" | "ai" | "heatmap" | "action")[] = ["engage", "ai", "heatmap", "action"];
    const interval = setInterval(() => {
      setShowcaseTab((prev) => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleOpenDemo = () => {
    if (typeof setDemoModalOpen === "function") {
      setDemoModalOpen(true);
    }
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the VibeOS Employee Engagement Platform work?",
      a: "VibeOS collects real-time sentiment signals through lightweight pulse surveys, onboarding/offboarding check-ins, and anonymous feedback channels. Our AI engine processes these inputs to map cultural patterns, highlight burnout risks, and suggest proven action steps for leadership."
    },
    {
      q: "What is the Performance Culture Quadrant?",
      a: "The Performance Culture Quadrant is a research-backed framework that maps employee engagement against performance confidence across 4 quadrants: Peak Performance, Under-aligned Potential, Engaged Support, and Critical Risk."
    },
    {
      q: "How does AI Comment Summaries process open-text feedback?",
      a: "Our privacy-first NLP model groups thousands of open-text survey comments into distinct topic clusters (such as workload, manager alignment, or tools friction) with sentiment scores, enabling HR leaders to extract key themes in seconds."
    },
    {
      q: "How often should pulse surveys be conducted?",
      a: "We recommend a hybrid model: quarterly deep-dive diagnostic surveys for organization-wide metrics, combined with bi-weekly or monthly pulse checks (1-2 questions) to track team-level variations and immediate responses to change."
    },
    {
      q: "Is employee feedback 100% anonymous?",
      a: "Confidentiality is core to VibeOS. Individual survey responses are aggregated to preserve anonymity, while our AI comment analysis groups open-text feedback into general themes without exposing participant identities."
    },
    {
      q: "How long does implementation take across HRIS & workspace tools?",
      a: "Most organizations are fully set up within 5 to 7 days. We support native 1-click integrations with major HRIS tools like Workday, BambooHR, and Rippling, as well as Slack and Microsoft Teams."
    }
  ];

  return (
    <div className="platform-page">
      <Navbar />

      {/* ==========================================================================
         1. HERO SECTION (Engage Platform Suite)
         ========================================================================== */}
      <section className="p-hero">
        <div className="p-hero__bg-mesh" />
        <div className="p-hero__ambient-orb orb-1" />
        <div className="p-hero__ambient-orb orb-2" />

        <div className="p-hero__container">
          <div className="p-hero__content">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-hero__badge"
            >
              <Sparkles size={12} className="badge-sparkle" />
              <span>EMPLOYEE ENGAGEMENT PLATFORM SUITE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-hero__title"
            >
              Understand Employees & <br />
              <span>Boost Retention at Scale</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-hero__desc"
            >
              Gather continuous feedback, uncover turnover drivers before resignation letters arrive, 
              and empower managers with Ph.D. science-backed action playbooks.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-hero__cta-group"
            >
              <button onClick={handleOpenDemo} className="btn btn--primary">
                <span>Book Engage Platform Demo</span>
                <ArrowRight size={15} />
              </button>
              <a href="#quadrant" className="btn btn--secondary">
                <Play size={14} fill="currentColor" />
                <span>Explore Performance Quadrants</span>
              </a>
            </motion.div>
          </div>

          {/* Interactive Cockpit Display Window */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-hero__visual"
          >
            <div className="mock-window">
              <div className="mock-window__header">
                <div className="dots"><span /><span /><span /></div>
                <div className="address-bar">
                  <Globe size={11} className="mr-1 inline" /> vibeos.com/platform/engage
                </div>
                <div className="live-status">
                  <span className="live-dot" /> LIVE PLATFORM
                </div>
              </div>

              <div className="mock-window__body">
                <div className="mock-grid">
                  
                  {/* Overall Engagement Score */}
                  <div className="mock-col span-4">
                    <div className="widget-card glow-purple">
                      <span className="widget-label">Engagement Index</span>
                      <div className="widget-score-ring">
                        <svg viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" className="bg-circle" />
                          <circle cx="50" cy="50" r="40" className="fill-circle fill-82" />
                        </svg>
                        <div className="score-value">84%</div>
                      </div>
                      <span className="widget-subtitle text-green">▲ 5.2% vs Industry Benchmark</span>
                    </div>
                  </div>

                  {/* Sentiment Bar Meters */}
                  <div className="mock-col span-8">
                    <div className="widget-card">
                      <span className="widget-label">Real-Time Pulse Sentiment</span>
                      <div className="sentiment-bars">
                        <div className="sent-row">
                          <Smile size={15} className="text-green" />
                          <div className="sent-track"><div className="sent-bar bg-green" style={{ width: "68%" }} /></div>
                          <span className="sent-val">68%</span>
                        </div>
                        <div className="sent-row">
                          <Meh size={15} className="text-amber" />
                          <div className="sent-track"><div className="sent-bar bg-amber" style={{ width: "22%" }} /></div>
                          <span className="sent-val">22%</span>
                        </div>
                        <div className="sent-row">
                          <Frown size={15} className="text-red" />
                          <div className="sent-track"><div className="sent-bar bg-red" style={{ width: "10%" }} /></div>
                          <span className="sent-val">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Participation Line Graph */}
                  <div className="mock-col span-12">
                    <div className="widget-card">
                      <div className="widget-header flex justify-between items-center mb-1">
                        <span className="widget-label">Continuous Survey Participation</span>
                        <span className="kpi-pill">87.4% Participation Rate</span>
                      </div>
                      <div className="chart-line-simulation">
                        <div className="chart-grid-line" />
                        <div className="chart-grid-line" />
                        <svg viewBox="0 0 400 70" className="chart-line-svg">
                          <path d="M 0,55 C 80,45 120,48 180,38 C 240,28 300,32 400,12" className="line-path" />
                        </svg>
                        <div className="chart-labels">
                          <span>Q1 Diagnostic</span>
                          <span>Pulse #1</span>
                          <span>Pulse #2</span>
                          <span>DEI Pulse</span>
                          <span>Today</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Alert Badges */}
            <div className="floating-widget float-1">
              <div className="badge-pulse" />
              <div className="floating-info">
                <strong>Wellbeing Alert</strong>
                <span>Sprint friction in Engineering</span>
              </div>
            </div>

            <div className="floating-widget float-2">
              <span className="emoji">🚀</span>
              <div className="floating-info">
                <strong>Action Complete</strong>
                <span>Manager 1-on-1s scheduled</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================================
         2. PERFORMANCE CULTURE QUADRANT (Culture Amp Featured Module)
         ========================================================================== */}
      <section className="p-quadrant" id="quadrant">
        <div className="p-quadrant__container">
          <div className="p-quadrant__header">
            <span className="section-badge">NEW FRAMEWORK</span>
            <h2 className="section-title">Performance Culture Quadrant</h2>
            <p className="section-desc">
              Understand the interplay between Employee Engagement and Performance Confidence across 4 distinct behavioral profiles.
            </p>
          </div>

          <div className="p-quadrant__matrix-grid">
            <div className="quadrant-selector">
              <button 
                className={`quad-btn ${activeQuadrant === "peak" ? "active" : ""}`}
                onClick={() => setActiveQuadrant("peak")}
              >
                <Zap size={18} className="text-green" />
                <div>
                  <strong>Peak Performance</strong>
                  <span>High Engagement & High Confidence</span>
                </div>
              </button>

              <button 
                className={`quad-btn ${activeQuadrant === "aligned" ? "active" : ""}`}
                onClick={() => setActiveQuadrant("aligned")}
              >
                <AlertTriangle size={18} className="text-amber" />
                <div>
                  <strong>Under-aligned Potential</strong>
                  <span>Low Engagement & High Confidence</span>
                </div>
              </button>

              <button 
                className={`quad-btn ${activeQuadrant === "support" ? "active" : ""}`}
                onClick={() => setActiveQuadrant("support")}
              >
                <Compass size={18} className="text-blue" />
                <div>
                  <strong>Engaged Support</strong>
                  <span>High Engagement & Low Confidence</span>
                </div>
              </button>

              <button 
                className={`quad-btn ${activeQuadrant === "risk" ? "active" : ""}`}
                onClick={() => setActiveQuadrant("risk")}
              >
                <Activity size={18} className="text-red" />
                <div>
                  <strong>Critical Risk</strong>
                  <span>Low Engagement & Low Confidence</span>
                </div>
              </button>
            </div>

            <div className="quadrant-card">
              <AnimatePresence mode="wait">
                {activeQuadrant === "peak" && (
                  <motion.div 
                    key="peak"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="quad-detail"
                  >
                    <span className="quad-tag tag-green">TOP RIGHT QUADRANT</span>
                    <h3>Peak Performance</h3>
                    <p>Employees are energized, aligned with company mission, and confident in execution. Growth is organic and retention risk is minimal.</p>
                    <div className="quad-metrics">
                      <div><strong>92%</strong><span>Target Engagement</span></div>
                      <div><strong>89%</strong><span>Confidence Index</span></div>
                      <div><strong>Negligible</strong><span>Turnover Risk</span></div>
                    </div>
                    <div className="quad-action">
                      <CheckCircle2 size={16} className="text-green" />
                      <span><strong>Recommended Action:</strong> Provide leadership growth routes and prevent sprint fatigue.</span>
                    </div>
                  </motion.div>
                )}

                {activeQuadrant === "aligned" && (
                  <motion.div 
                    key="aligned"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="quad-detail"
                  >
                    <span className="quad-tag tag-amber">TOP LEFT QUADRANT</span>
                    <h3>Under-aligned Potential</h3>
                    <p>High outputs but low emotional connection. Employees are getting work done, but feel isolated or unrecognized by leadership.</p>
                    <div className="quad-metrics">
                      <div><strong>48%</strong><span>Target Engagement</span></div>
                      <div><strong>86%</strong><span>Confidence Index</span></div>
                      <div><strong>High Risk</strong><span>Turnover Risk</span></div>
                    </div>
                    <div className="quad-action">
                      <CheckCircle2 size={16} className="text-amber" />
                      <span><strong>Recommended Action:</strong> Run peer recognition loops and re-align executive transparency.</span>
                    </div>
                  </motion.div>
                )}

                {activeQuadrant === "support" && (
                  <motion.div 
                    key="support"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="quad-detail"
                  >
                    <span className="quad-tag tag-blue">BOTTOM RIGHT QUADRANT</span>
                    <h3>Engaged Support</h3>
                    <p>High loyalty and great cultural alignment, but execution is blocked by missing tools, unclear OKRs, or training gaps.</p>
                    <div className="quad-metrics">
                      <div><strong>85%</strong><span>Target Engagement</span></div>
                      <div><strong>41%</strong><span>Confidence Index</span></div>
                      <div><strong>Stagnation</strong><span>Turnover Risk</span></div>
                    </div>
                    <div className="quad-action">
                      <CheckCircle2 size={16} className="text-blue" />
                      <span><strong>Recommended Action:</strong> Clarify goal expectations and deploy manager skills coaching.</span>
                    </div>
                  </motion.div>
                )}

                {activeQuadrant === "risk" && (
                  <motion.div 
                    key="risk"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="quad-detail"
                  >
                    <span className="quad-tag tag-red">BOTTOM LEFT QUADRANT</span>
                    <h3>Critical Risk</h3>
                    <p>Burnout, confusion, and low morale. Employees are struggling to perform and have lost trust in organizational direction.</p>
                    <div className="quad-metrics">
                      <div><strong>38%</strong><span>Target Engagement</span></div>
                      <div><strong>34%</strong><span>Confidence Index</span></div>
                      <div><strong>Immediate</strong><span>Turnover Risk</span></div>
                    </div>
                    <div className="quad-action">
                      <CheckCircle2 size={16} className="text-red" />
                      <span><strong>Recommended Action:</strong> Launch immediate diagnostic pulses and rebuild psychological safety.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         3. ENGAGE PLATFORM CAPABILITIES (Bento Matrix)
         ========================================================================== */}
      <section className="p-bento">
        <div className="p-bento__container">
          <div className="p-bento__header">
            <span className="section-badge">SOLUTIONS & FEATURES</span>
            <h2 className="section-title">Everything You Need to Engage & Retain</h2>
            <p className="section-desc">
              A complete suite of employee engagement platform solutions to help HR leaders build high-performing, resilient teams.
            </p>
          </div>

          <div className="p-bento__grid">
            
            {/* Bento 1: Pulse Surveys */}
            <div className="bento-card span-2">
              <div className="bento-card__icon icon-purple"><Activity size={24} /></div>
              <div className="bento-card__body">
                <span className="card-kicker">CONTINUOUS LISTENING</span>
                <h3>Pulse Surveys & Lightweight Check-ins</h3>
                <p>Gather real-time feedback with lightweight pulse checks delivered directly through Slack, Teams, or Web with automatic directory syncing.</p>
              </div>
              <div className="bento-card__visual visual-pulse">
                <div className="pulse-pill"><span>Q: Is your weekly workload manageable?</span><strong>88% Yes</strong></div>
                <div className="pulse-pill"><span>Q: Do you feel supported by leadership?</span><strong>82% Yes</strong></div>
              </div>
            </div>

            {/* Bento 2: Retention Insights */}
            <div className="bento-card">
              <div className="bento-card__icon icon-red"><LogOut size={24} /></div>
              <div className="bento-card__body">
                <span className="card-kicker">RETENTION SOFTWARE</span>
                <h3>Turnover Insights & Risk Alerts</h3>
                <p>Detect early attrition drivers and protect top performers before resignation letters arrive.</p>
              </div>
            </div>

            {/* Bento 3: AI Comment Summaries */}
            <div className="bento-card">
              <div className="bento-card__icon icon-blue"><Brain size={24} /></div>
              <div className="bento-card__body">
                <span className="card-kicker">NLP SENTIMENT</span>
                <h3>AI Comment Summaries</h3>
                <p>Automatically summarize thousands of open-text employee comments into clear topic clusters.</p>
              </div>
            </div>

            {/* Bento 4: Ready-to-Use Surveys */}
            <div className="bento-card span-2">
              <div className="bento-card__icon icon-green"><BookOpen size={24} /></div>
              <div className="bento-card__body">
                <span className="card-kicker">TEMPLATE GALLERY</span>
                <h3>100+ Ready-to-Use Science Templates</h3>
                <p>Access survey question sets designed by Ph.D. IO Psychologists covering Engagement, DEI, Onboarding, and Manager Reviews.</p>
              </div>
              <div className="bento-card__visual visual-checklist">
                <div className="check-item"><Check size={14} className="text-green" /> <span>Onboarding & Offboarding Lifecycle Tracker</span></div>
                <div className="check-item"><Check size={14} className="text-green" /> <span>Diversity, Equity & Inclusion (DEI) Survey</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
         4. LIFECYCLE JOURNEY (Onboarding -> Engagement -> Retention -> Exit)
         ========================================================================== */}
      <section className="p-workflow">
        <div className="p-workflow__container">
          <div className="p-workflow__header">
            <span className="section-badge">EMPLOYEE LIFECYCLE</span>
            <h2 className="section-title">Continuous Feedback at Every Milestone</h2>
          </div>

          <div className="p-workflow__grid">
            <div className="workflow-card">
              <div className="step-num">01</div>
              <div className="step-icon"><UserCheck size={24} /></div>
              <h3>Onboarding 30-60-90</h3>
              <p>Measure early newcomer sentiment, ramp-up confidence, and manager support within the first 90 days.</p>
            </div>

            <div className="workflow-card">
              <div className="step-num">02</div>
              <div className="step-icon"><Activity size={24} /></div>
              <h3>Continuous Pulse & DEI</h3>
              <p>Track team-level momentum, psychological safety, and organizational inclusion with monthly pulse checks.</p>
            </div>

            <div className="workflow-card">
              <div className="step-num">03</div>
              <div className="step-icon"><TrendingUp size={24} /></div>
              <h3>Retention & Exit Drivers</h3>
              <p>Identify attrition drivers early and conduct exit surveys to refine long-term workforce strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         5. COCKPIT TOUR SHOWCASE
         ========================================================================== */}
      <section className="p-showcase" id="showcase">
        <div className="p-showcase__container">
          <div className="p-showcase__header">
            <span className="section-badge">LIVE DEMO TOUR</span>
            <h2 className="section-title">Experience the VibeOS Engage Cockpit</h2>
            
            <div className="p-showcase__tabs">
              <button 
                className={`tab-btn ${showcaseTab === "engage" ? "active" : ""}`}
                onClick={() => setShowcaseTab("engage")}
              >
                Survey Builder
              </button>
              <button 
                className={`tab-btn ${showcaseTab === "ai" ? "active" : ""}`}
                onClick={() => setShowcaseTab("ai")}
              >
                AI Comment Summaries
              </button>
              <button 
                className={`tab-btn ${showcaseTab === "heatmap" ? "active" : ""}`}
                onClick={() => setShowcaseTab("heatmap")}
              >
                Cohort Heatmap
              </button>
            </div>
          </div>

          <div className="p-showcase__display">
            <AnimatePresence mode="wait">
              {showcaseTab === "engage" && (
                <motion.div 
                  key="engage"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="showcase-window"
                >
                  <div className="window-header">
                    <span className="title">Drag-and-Drop Survey Builder</span>
                    <span className="status-badge">100+ Science Templates</span>
                  </div>
                  <div className="window-body">
                    <div className="builder-layout">
                      <div className="builder-sidebar">
                        <span className="sidebar-lbl">Question Libraries</span>
                        <div className="library-item active">● Workload & Burnout</div>
                        <div className="library-item">● Manager Alignment</div>
                        <div className="library-item">● DEI & Inclusion</div>
                      </div>
                      <div className="builder-canvas">
                        <div className="question-box">
                          <span className="q-tag">Question 1 (Rating Scale)</span>
                          <h4>My weekly meeting load allows adequate focus time for deep work.</h4>
                          <div className="slider-track">
                            <div className="slider-bar" style={{ width: "80%" }} />
                            <div className="slider-thumb" style={{ left: "80%" }} />
                          </div>
                        </div>
                        <button className="add-question-btn">+ Add Custom Question</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {showcaseTab === "ai" && (
                <motion.div 
                  key="ai"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="showcase-window"
                >
                  <div className="window-header">
                    <span className="title">AI Comment Summaries & Action Planner</span>
                    <span className="status-badge text-green">NLP Engine Active</span>
                  </div>
                  <div className="window-body">
                    <div className="insights-layout">
                      <div className="insight-card">
                        <div className="card-top">
                          <span className="risk-tag">Friction Signal</span>
                          <strong>Engineering Department</strong>
                        </div>
                        <p>&quot;Sprint planning meetings overlap heavily with deep coding hours, leading to late-evening context switching.&quot;</p>
                        <div className="action-box">
                          <span className="action-lbl">Suggested Manager Action</span>
                          <h5>Implement &quot;No-Meeting Focus Wednesdays&quot; for Dev Teams</h5>
                          <button className="deploy-btn">Deploy Action Plan</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {showcaseTab === "heatmap" && (
                <motion.div 
                  key="heatmap"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="showcase-window"
                >
                  <div className="window-header">
                    <span className="title">Department Engagement Heatmap</span>
                    <span className="status-badge">Overall Score: 8.2/10</span>
                  </div>
                  <div className="window-body">
                    <div className="heatmap-grid">
                      <div className="heatmap-row header">
                        <span>Department</span>
                        <span>Trust</span>
                        <span>Wellbeing</span>
                        <span>Growth</span>
                        <span>Belonging</span>
                      </div>
                      <div className="heatmap-row">
                        <span className="dept">Product & Design</span>
                        <span className="cell cell-green">8.8</span>
                        <span className="cell cell-green">8.1</span>
                        <span className="cell cell-green">8.5</span>
                        <span className="cell cell-green">8.9</span>
                      </div>
                      <div className="heatmap-row">
                        <span className="dept">Engineering</span>
                        <span className="cell cell-green">8.4</span>
                        <span className="cell cell-amber">6.4</span>
                        <span className="cell cell-green">8.2</span>
                        <span className="cell cell-green">8.0</span>
                      </div>
                      <div className="heatmap-row">
                        <span className="dept">Customer Success</span>
                        <span className="cell cell-green">8.0</span>
                        <span className="cell cell-amber">6.9</span>
                        <span className="cell cell-amber">6.5</span>
                        <span className="cell cell-green">7.8</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ==========================================================================
         6. FAQ SECTION
         ========================================================================== */}
      <section className="p-faq">
        <div className="p-faq__container">
          <div className="p-faq__header">
            <span className="section-badge">SUPPORT & FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="p-faq__list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`faq-card ${isOpen ? "active" : ""}`}
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </div>
                  {isOpen && (
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <RequestDemo />
    </div>
  );
}
