"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZap,
  FiArrowRight,
  FiCheckCircle,
  FiAlertTriangle,
  FiCompass,
  FiAward,
  FiBookOpen,
  FiSliders,
  FiUsers,
  FiActivity,
  FiMail,
  FiMessageSquare,
  FiTrendingUp,
  FiCheck,
  FiX,
  FiShield,
  FiSmile,
  FiLayers,
  FiFileText
} from "react-icons/fi";
import "./VibeIndexMatrix.scss";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import RequestDemo from "@/src/components/RequestDemo/RequestDemo";

// Static details of the 4 quadrants based on Culture Amp research
const QUADRANT_DETAILS = [
  {
    id: "peak",
    title: "Peak Performance",
    subtitle: "High Engagement & High Performance Confidence",
    desc: "Peak cultures have high belief in the vision and strategy and are energetic in their intent to help achieve it.",
    outcome: "Organizations are stacked with 21% more high-performers, showing exceptional execution metrics and an 88% retention rate.",
    color: "#10b981",
    bgColor: "rgba(16, 185, 129, 0.08)",
    metrics: { engagement: "91%", confidence: "88%", retention: "88%" }
  },
  {
    id: "skepticism",
    title: "Engaged Skepticism",
    subtitle: "High Engagement & Low Performance Confidence",
    desc: "Engaged skepticism cultures are dedicated and energized, but they are skeptical about the organization's capacity to succeed.",
    outcome: "Teams care deeply about the culture and mission, but execution is blocked due to lack of tool clarity, alignment, or resources.",
    color: "#3b82f6",
    bgColor: "rgba(59, 130, 246, 0.08)",
    metrics: { engagement: "84%", confidence: "42%", retention: "76%" }
  },
  {
    id: "strained",
    title: "Strained",
    subtitle: "Low Engagement & High Performance Confidence",
    desc: "Strained cultures lack energy for the work it takes to achieve and sustain high performance, but remain confident the company will succeed.",
    outcome: "High short-term output, but severe burnout risk. Attrition rates tend to increase as employees feel disconnected from recognition and purpose.",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.08)",
    metrics: { engagement: "49%", confidence: "82%", retention: "68%" }
  },
  {
    id: "disconnected",
    title: "Disconnected",
    subtitle: "Low Engagement & Low Performance Confidence",
    desc: "Disconnected cultures don’t feel set up for success and don’t believe the company is headed toward success.",
    outcome: "Low morale and high fatigue. Immediate diagnostic surveys and customized manager coaching intervention tracks are recommended.",
    color: "#ef4444",
    bgColor: "rgba(239, 68, 68, 0.08)",
    metrics: { engagement: "38%", confidence: "31%", retention: "52%" }
  }
];

const CAPABILITIES = [
  {
    id: "survey",
    label: "Diagnostic Survey",
    kicker: "Diagnostic survey",
    title: "Diagnose your performance culture",
    desc: "The VibeOS Index Matrix™ survey connects how your people feel about company strategy with their readiness to execute on it.",
    list: ["Psychometrically validated questions", "Lightweight, pulse-ready structure", "Anonymity-safe parameters"],
    visual: "survey"
  },
  {
    id: "quadrant",
    label: "Quadrants Mapping",
    kicker: "Quadrants",
    title: "Contextualize your culture type",
    desc: "The VibeOS Index Matrix™ maps your diagnostic results into an intuitive visual map of your company’s culture type. Drill deeper with demographic filters, AI comment summaries, and comparisons.",
    list: ["Interactive department mapping", "Granular demographic filters", "Executive-level summaries"],
    visual: "quadrant"
  },
  {
    id: "coach",
    label: "AI Recommendation Engine",
    kicker: "AI Coach",
    title: "Targeted actions and recommendations",
    desc: "AI Coach is your partner that interprets your quadrant position in plain language, revealing how your culture is either powering or hindering performance to reveal key focus areas.",
    list: ["Recommend plan of action", "Validated leadership lessons", "Frontline manager playbooks"],
    visual: "coach"
  },
  {
    id: "roadmap",
    label: "Actionable Roadmap",
    kicker: "Actionable roadmap",
    title: "Your path to Peak Performance",
    desc: "Translate insights into behavior change by creating smarter goals, development plans, performance feedback, and 1-on-1s with tools that drive Peak Performance.",
    list: ["Goal management (OKRs)", "Continuous feedback loops", "Skills reinforcement tracking"],
    visual: "roadmap"
  }
];

export const VibeIndexMatrix: React.FC = () => {
  // States
  const [activeQuad, setActiveQuad] = useState("peak");
  const [activeCap, setActiveCap] = useState("survey");
  const [emailInput, setEmailInput] = useState("");
  const [whitepaperEmail, setWhitepaperEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [paperStatus, setPaperStatus] = useState<"idle" | "success" | "error">("idle");

  const [userInteractedCap, setUserInteractedCap] = useState(false);
  const [userInteractedQuad, setUserInteractedQuad] = useState(false);

  // Counter animations
  const [stockAdvantage, setStockAdvantage] = useState(0);
  const [retentionRate, setRetentionRate] = useState(0);
  const [highPerformers, setHighPerformers] = useState(0);

  // Auto-rotating Capabilities tabs
  useEffect(() => {
    if (userInteractedCap) return;
    const caps = ["survey", "quadrant", "coach", "roadmap"];
    const interval = setInterval(() => {
      setActiveCap((prev) => {
        const nextIndex = (caps.indexOf(prev) + 1) % caps.length;
        return caps[nextIndex];
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [userInteractedCap]);

  // Auto-rotating Quadrants
  useEffect(() => {
    if (userInteractedQuad) return;
    const quads = ["skepticism", "peak", "disconnected", "strained"];
    const interval = setInterval(() => {
      setActiveQuad((prev) => {
        const nextIndex = (quads.indexOf(prev) + 1) % quads.length;
        return quads[nextIndex];
      });
    }, 5500);

    return () => clearInterval(interval);
  }, [userInteractedQuad]);

  useEffect(() => {
    // Run up stock price advantage counter
    const stockTimer = setInterval(() => {
      setStockAdvantage((prev) => {
        if (prev >= 47) {
          clearInterval(stockTimer);
          return 47;
        }
        return prev + 1;
      });
    }, 25);

    // Run up retention rate counter
    const retentionTimer = setInterval(() => {
      setRetentionRate((prev) => {
        if (prev >= 88) {
          clearInterval(retentionTimer);
          return 88;
        }
        return prev + 2;
      });
    }, 20);

    // Run up high performers counter
    const performersTimer = setInterval(() => {
      setHighPerformers((prev) => {
        if (prev >= 21) {
          clearInterval(performersTimer);
          return 21;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(stockTimer);
      clearInterval(retentionTimer);
      clearInterval(performersTimer);
    };
  }, []);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 4000);
      return;
    }
    setFormStatus("success");
    setEmailInput("");
    setTimeout(() => setFormStatus("idle"), 4000);
  };

  const handlePaperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whitepaperEmail || !whitepaperEmail.includes("@")) {
      setPaperStatus("error");
      setTimeout(() => setPaperStatus("idle"), 4000);
      return;
    }
    setPaperStatus("success");
    setWhitepaperEmail("");
    setTimeout(() => setPaperStatus("idle"), 4000);
  };

  const currentQuad = QUADRANT_DETAILS.find((q) => q.id === activeQuad)!;
  const currentCap = CAPABILITIES.find((c) => c.id === activeCap)!;

  return (
    <div className="vim-page">
      <Navbar />
      {/* 1. HERO SECTION */}
      <section className="vim-hero">
        <div className="vim-hero-bg">
          <div className="glow glow-1"></div>
          <div className="glow glow-2"></div>
          <div className="grid-overlay"></div>
        </div>

        <div className="container vim-hero-container">
          <div className="vim-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="vim-hero-badge"
            >
              <FiZap className="icon" />
              <span>Cultural Diagnostic Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="vim-hero-title"
            >
              VibeOs Index <span>Matrix™</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="vim-hero-desc"
            >
              Connect engagement and performance confidence to diagnose your culture and unlock the path to Peak Performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="vim-hero-ctas"
            >
              <a href="#assessment" className="vim-btn vim-btn-primary">
                Assess Your Culture <FiArrowRight />
              </a>
              <a href="#quadrants" className="vim-btn vim-btn-secondary">
                See The 4 Quadrants
              </a>
            </motion.div>
          </div>

          {/* Interactive Plotter visual on the right */}
          <div className="vim-hero-visual">
            <div className="vim-interactive-plotter">
              <div className="plotter-axis-y">Workplace Engagement →</div>
              <div className="plotter-axis-x">Performance Confidence →</div>

              <div className="plotter-grid">
                <div className="plot-line plotter-line-h" />
                <div className="plot-line plotter-line-v" />

                {/* Interactive Quadrants click targets */}
                <button
                  onClick={() => {
                    setActiveQuad("skepticism");
                    setUserInteractedQuad(true);
                  }}
                  className={`mini-quad top-left ${activeQuad === "skepticism" ? "active" : ""}`}
                >
                  <span>Engaged Skepticism</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("peak");
                    setUserInteractedQuad(true);
                  }}
                  className={`mini-quad top-right ${activeQuad === "peak" ? "active" : ""}`}
                >
                  <span>Peak Performance</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("disconnected");
                    setUserInteractedQuad(true);
                  }}
                  className={`mini-quad bottom-left ${activeQuad === "disconnected" ? "active" : ""}`}
                >
                  <span>Disconnected</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("strained");
                    setUserInteractedQuad(true);
                  }}
                  className={`mini-quad bottom-right ${activeQuad === "strained" ? "active" : ""}`}
                >
                  <span>Strained</span>
                </button>

                {/* Department Badge Tags */}
                <div className="plotter-dot support-dot" style={{ top: "12px", left: "12px" }}>CS</div>
                <div className="plotter-dot eng-dot" style={{ top: "12px", right: "12px" }}>Eng</div>
                <div className="plotter-dot sales-dot" style={{ bottom: "12px", right: "12px" }}>Sales</div>
              </div>

              <div className="plotter-tooltip">
                <span className="lbl">Selected State:</span>
                <strong style={{ color: currentQuad.color }}>{currentQuad.title}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 3. BUSINESS OUTCOMES / STATS SECTION */}
      <section className="vim-outcomes">
        <div className="container">
          <div className="vim-section-header">
            <h2 className="vim-section-title">Peak Performance companies outperform others on business outcomes</h2>
            <p className="vim-section-subtitle">
              Culture is not a qualitative byproduct – it is a core business driver. Our research demonstrates a strong, measurable correlation between quadrant positioning and corporate value.
            </p>
          </div>

          <div className="vim-outcomes-grid">
            {/* Card 1: Stock Price Advantage */}
            {/* Card 1: Stock Price Advantage */}
            <div className="outcome-card outcome-card--stock">
              <div className="card-visual-container visual-growth-badge">
                <div className="growth-illustration">
                  <div className="icon-ring purple-ring">
                    <FiTrendingUp className="main-icon" />
                  </div>
                  <div className="status-pill green-pill">
                    <span className="dot" /> Market Outperformance
                  </div>
                </div>
                <div className="growth-sparkline">
                  <svg viewBox="0 0 200 45" className="sparkline-svg">
                    <path d="M 0,38 C 50,34 100,22 200,6" fill="none" stroke="#7e53ff" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="card-content-wrap">
                <h3>Stock Price Advantage</h3>
                <p>Peak Performance companies achieved a significant point advantage in stock price growth over two years compared with non-peak peers.</p>
              </div>
            </div>

            {/* Card 2: Voluntary Retention */}
            <div className="outcome-card outcome-card--retention">
              <div className="card-visual-container visual-retention-team">
                <div className="team-cluster">
                  <div className="avatar-chip chip-1">
                    <div className="avatar-circle">JH</div>
                    <span>Engaged</span>
                  </div>
                  <div className="avatar-chip chip-2">
                    <div className="avatar-circle">MR</div>
                    <span>Promoted</span>
                  </div>
                  <div className="avatar-chip chip-3">
                    <div className="avatar-circle">SV</div>
                    <span>Aligned</span>
                  </div>
                </div>
                <div className="retention-status-badge">
                  <FiUsers size={13} />
                  <span>High Loyalty Culture</span>
                </div>
              </div>
              <div className="card-content-wrap">
                <h3>Voluntary Retention</h3>
                <p>Organizations in Peak Performance maintain exceptional employee retention rates, preserving institutional knowledge and team momentum.</p>
              </div>
            </div>

            {/* Card 3: High-Performer Density */}
            <div className="outcome-card outcome-card--density">
              <div className="card-visual-container visual-talent-density">
                <div className="talent-badges">
                  <div className="talent-row">
                    <FiCheckCircle className="check-icon" />
                    <span>Top Execution Velocity</span>
                  </div>
                  <div className="talent-row">
                    <FiAward className="check-icon" />
                    <span>Leadership Bench Strength</span>
                  </div>
                  <div className="talent-row">
                    <FiZap className="check-icon" />
                    <span>Peak Talent Density</span>
                  </div>
                </div>
              </div>
              <div className="card-content-wrap">
                <h3>High-Performer Density</h3>
                <p>Organizations in Peak Performance are stacked with significantly higher densities of top-tier talent than organizations in other quadrants.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES / TABS SECTION */}
      <section className="vim-capabilities" id="capabilities">
        <div className="container">
          <div className="vim-section-header">
            <h2 className="vim-section-title">Finally answer the question:<br />Do we have a high-performing culture?</h2>
            <p className="vim-section-subtitle">
              Equip your leadership with verified tools to measure, map, and recalibrate employee alignment and operational readiness.
            </p>
          </div>

          <div className="caps-layout">
            <div className="caps-tabs">
              {CAPABILITIES.map((cap) => (
                <button
                  key={cap.id}
                  className={`cap-tab-btn ${activeCap === cap.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveCap(cap.id);
                    setUserInteractedCap(true);
                  }}
                >
                  <span className="bullet"></span>
                  <span className="txt">{cap.label}</span>
                </button>
              ))}
            </div>

            <div className="caps-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCap}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="cap-slide"
                >
                  <div className="cap-details">
                    <span className="cap-kicker">{currentCap.kicker}</span>
                    <h3 className="cap-title">{currentCap.title}</h3>
                    <p className="cap-desc">{currentCap.desc}</p>
                    <ul className="cap-bullets">
                      {currentCap.list.map((item, idx) => (
                        <li key={idx}><FiCheck className="bullet-icon" /> {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="cap-visual-box">
                    {currentCap.visual === "survey" && (
                      <div className="mockup-survey">
                        <div className="mockup-title">Performance Diagnostic Survey</div>
                        <div className="mockup-item">
                          <p>"I believe leadership has defined a clear execution roadmap."</p>
                          <div className="rating-row">
                            {[1, 2, 3, 4, 5].map((v) => (
                              <span key={v} className={`rating-dot ${v >= 4 ? "active" : ""}`}>{v}</span>
                            ))}
                          </div>
                        </div>
                        <div className="mockup-item">
                          <p>"I look forward to starting my work day at VibeOS."</p>
                          <div className="rating-row">
                            {[1, 2, 3, 4, 5].map((v) => (
                              <span key={v} className={`rating-dot ${v >= 5 ? "active" : ""}`}>{v}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {currentCap.visual === "quadrant" && (
                      <div className="mockup-quadrant">
                        <div className="mockup-title">Quadrant Tracker Map</div>
                        <div className="quadrant-display">
                          <div className="line-h"></div>
                          <div className="line-v"></div>
                          <span className="q-label tr">Peak</span>
                          <span className="q-label bl">Disconnected</span>
                          <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="pulse-dot"
                          />
                        </div>
                      </div>
                    )}

                    {currentCap.visual === "coach" && (
                      <div className="mockup-coach">
                        <div className="mockup-title">AI Coach Chat</div>
                        <div className="chat-bubble left">
                          <p>Engineering Team is in Peak Performance. Voluntary turnover is 3%.</p>
                        </div>
                        <div className="chat-bubble right">
                          <p>Sales Team is in Strained. AI Action Recommendation: Deploy Focus Hours checklist via Slack.</p>
                        </div>
                      </div>
                    )}

                    {currentCap.visual === "roadmap" && (
                      <div className="mockup-roadmap">
                        <div className="mockup-title">Improvement Roadmap</div>
                        <div className="roadmap-step">
                          <FiCheckCircle className="step-icon checked" />
                          <div>
                            <strong>Step 1: Survey Complete</strong>
                            <span>84% participation achieved</span>
                          </div>
                        </div>
                        <div className="roadmap-step">
                          <FiActivity className="step-icon in-progress" />
                          <div>
                            <strong>Step 2: Meeting Reduction Pilot</strong>
                            <span>Sales department in calibration</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE FOUR QUADRANTS DETAILED STUDY */}
      <section className="vim-quadrants" id="quadrants">
        <div className="container">
          <div className="vim-section-header">
            <h2 className="vim-section-title">The 4 Performance Culture Quadrants</h2>
            <p className="vim-section-subtitle">
              The VibeOS Index Matrix™ connects employee engagement with execution confidence, giving leaders a clear diagnostic map of cultural health, burnout risks, and growth opportunities.
            </p>
          </div>

          <div className="quads-matrix-grid">
            <div className="quads-visual-board">
              <div className="axis-label-y">Employee Engagement →</div>
              <div className="axis-label-x">Performance Confidence →</div>

              <div className="quads-board-grid">
                 <button
                  onClick={() => {
                    setActiveQuad("skepticism");
                    setUserInteractedQuad(true);
                  }}
                  className={`board-cell cell-skepticism ${activeQuad === "skepticism" ? "active" : ""}`}
                >
                  <span>Engaged Skepticism</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("peak");
                    setUserInteractedQuad(true);
                  }}
                  className={`board-cell cell-peak ${activeQuad === "peak" ? "active" : ""}`}
                >
                  <span>Peak Performance</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("disconnected");
                    setUserInteractedQuad(true);
                  }}
                  className={`board-cell cell-disconnected ${activeQuad === "disconnected" ? "active" : ""}`}
                >
                  <span>Disconnected</span>
                </button>
                <button
                  onClick={() => {
                    setActiveQuad("strained");
                    setUserInteractedQuad(true);
                  }}
                  className={`board-cell cell-strained ${activeQuad === "strained" ? "active" : ""}`}
                >
                  <span>Strained</span>
                </button>
              </div>
            </div>

            <div className="quads-text-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuad}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="quad-details-card"
                  style={{ borderLeftColor: currentQuad.color }}
                >
                  <span className="card-kicker">{currentQuad.subtitle}</span>
                  <h3 className="card-title" style={{ color: currentQuad.color }}>{currentQuad.title}</h3>
                  <p className="card-desc">{currentQuad.desc}</p>
                  <p className="card-outcome"><strong>Outcome Profile:</strong> {currentQuad.outcome}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <RequestDemo />
    </div>
  );
};

export default VibeIndexMatrix;
