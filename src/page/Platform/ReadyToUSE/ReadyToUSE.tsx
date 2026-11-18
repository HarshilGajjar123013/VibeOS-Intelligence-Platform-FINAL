"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Check,
  ChevronDown,
  Users,
  MessageSquare,
  Zap,
  TrendingUp,
  Shield,
  EyeOff,
  Target,
  Brain,
  Sparkles,
  Heart,
  Send,
  ClipboardList,
  Activity,
  Layers,
  FileText,
  Clock,
  CheckCircle,
  ThumbsUp,
  ThumbsDown,
  ArrowUpRight,
  Bookmark,
  Award,
  ChevronLeft,
  ChevronRight,
  Mail,
  UserCheck,
  Building,
  Lock,
  RefreshCw,
  BarChart2,
  Calendar
} from "lucide-react";
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import RequestDemo from "@/src/components/RequestDemo/RequestDemo";
import "./ReadyToUSE.scss";

/* ──────────────────────────────────────────────
   Scroll Reveal Hook
   ────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [threshold]);

  return [ref, revealed] as const;
}

/* ──────────────────────────────────────────────
   Animated Counter Hook
   ────────────────────────────────────────────── */
function useCounter(target: number, revealed: boolean, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!revealed) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [revealed, target, duration]);

  return count + suffix;
}

/* ──────────────────────────────────────────────
   Data Definitions
   ────────────────────────────────────────────── */
const TEMPLATE_TYPES = [
  {
    id: "engagement",
    label: "Engagement Surveys",
    templatesCount: 12,
    title: "Diagnose overall workplace health",
    desc: "Understand employee commitment, motivation, and strategy alignment with scientifically validated indexes.",
    sampleQuestion: "How happy are you with the current direction of the company?",
    inputType: "scale",
    metricLabel: "Alignment Index",
    metricVal: "91%",
    color: "#7e53ff"
  },
  {
    id: "lifecycle",
    label: "Lifecycle Surveys",
    templatesCount: 8,
    title: "Transition touchpoints (Onboarding & Exit)",
    desc: "Collect feedback during critical milestones (Day 30, Day 90, exit check-ins) to predict and prevent early attrition.",
    sampleQuestion: "Did you receive adequate training and resources during your first 30 days?",
    inputType: "options",
    options: ["Yes, fully", "Partially", "No, not at all"],
    metricLabel: "Enablement Rate",
    metricVal: "87%",
    color: "#3b82f6"
  },
  {
    id: "pulse",
    label: "Pulse Surveys",
    templatesCount: 14,
    title: "Quick, event-based checks",
    desc: "Lightweight, single-topic check-ins to track team workload, sentiment during changes, or immediate project retrospectives.",
    sampleQuestion: "How manageable has your team's workload been over the past two weeks?",
    inputType: "emojis",
    metricLabel: "Wellbeing Index",
    metricVal: "82%",
    color: "#ef4444"
  },
  {
    id: "dei",
    label: "DEI & Inclusion",
    templatesCount: 6,
    title: "Demographics & psychological safety",
    desc: "Track psychological safety, sense of belonging, and equity using scientist-backed filters to build an inclusive organization.",
    sampleQuestion: "I feel comfortable sharing a dissenting opinion with my immediate team members.",
    inputType: "scale",
    metricLabel: "Belonging Index",
    metricVal: "89%",
    color: "#10b981"
  }
];

const PERSONAS = [
  {
    id: "hr",
    label: "HR Teams",
    title: "Predict turnover & lead with confidence",
    desc: "Equip HR departments with continuous feedback signals to map risk patterns and justify strategic policy recommendations.",
    badge: "Risk Diagnostics",
    list: [
      "Real-time retention risk heatmap indicators.",
      "Anonymized comment category groupings.",
      "Instant HRIS directory synchronizations."
    ],
    color: "#7e53ff"
  },
  {
    id: "leader",
    label: "Leaders",
    title: "Track macro sentiment trends",
    desc: "Build a strong, evidence-based business case for cultural shifts and track progress against global industry benchmarks.",
    badge: "Executive Dashboard",
    list: [
      "Industry comparison benchmark charts.",
      "Cross-department score variance views.",
      "Macro alignment tracking metrics."
    ],
    color: "#3b82f6"
  },
  {
    id: "manager",
    label: "Managers",
    title: "Take preventative actions",
    desc: "Help team managers support their people with localized insights, guided playbooks, and structured meeting check-ins.",
    badge: "Coaching Playbooks",
    list: [
      "Automatic workload alerts and notifications.",
      "Suggested 1-on-1 meeting templates.",
      "Team-level action tracking logs."
    ],
    color: "#10b981"
  }
];

const TESTIMONIALS = [
  {
    quote: "Having access to a holistic, analytical approach allowed us to make decisions that have had the greatest impact over the past three years.",
    author: "Sahra Kaboli-Nejad",
    role: "Head of DEI and Social Impact at On",
    avatarText: "SK",
    avatarBg: "#e0f2fe",
    avatarColor: "#0369a1"
  },
  {
    quote: "Working with VibeOS has enabled us to achieve our aim of elevating our employee listening. We now have a continuous listening and action loop. This has allowed us to empower our managers with data and show a tangible, quick response to what our people have told us is important.",
    author: "Christian Gisy",
    role: "CEO",
    avatarText: "CG",
    avatarBg: "#f0fdf4",
    avatarColor: "#15803d"
  },
  {
    quote: "Data is vital when we're pushing for policy changes. The insights we gathered through VibeOS have been key in shaping our decisions and actions.",
    author: "John Ferguson",
    role: "Chief Human Resources Officer",
    avatarText: "JF",
    avatarBg: "#fef3c7",
    avatarColor: "#b45309"
  }
];

export default function ReadyToUse() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Interactive States
  const [activeShowcase, setActiveShowcase] = useState("engagement");
  const [activePersona, setActivePersona] = useState("hr");
  const [activeQuote, setActiveQuote] = useState(0);

  // Interaction logs (to halt auto rotation)
  const [userShowcaseInteracted, setUserShowcaseInteracted] = useState(false);
  const [userPersonaInteracted, setUserPersonaInteracted] = useState(false);
  const [userQuoteInteracted, setUserQuoteInteracted] = useState(false);

  // Scale state for showcase questions
  const [selectedScale, setSelectedScale] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  // Hero Sandbox Simulator states
  const [sandboxCategory, setSandboxCategory] = useState<"engagement" | "lifecycle" | "pulse">("engagement");
  const [sandboxScore, setSandboxScore] = useState<number | null>(null);
  const [simulatedData, setSimulatedData] = useState([2, 5, 12, 38, 43]); // Percentages for score 1-5

  // Bento timeline interactive state
  const [activeMilestone, setActiveMilestone] = useState("onboarding");

  // Bento AI Interactive tag state
  const [activeAiTag, setActiveAiTag] = useState("Motivated");
  const [aiSummaryText, setAiSummaryText] = useState("Employees show high alignment with strategic initiatives, driving high task completion rates.");

  // Form states
  const [emailInput, setEmailInput] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  // Scroll reveal refs
  const [heroRef, heroRevealed] = useScrollReveal();
  const [pillarsRef, pillarsRevealed] = useScrollReveal();
  const [showcaseRef, showcaseRevealed] = useScrollReveal();
  const [statsRef, statsRevealed] = useScrollReveal();
  const [personaRef, personaRevealed] = useScrollReveal();
  const [testimonialRef, testimonialRevealed] = useScrollReveal();
  const [faqRef, faqRevealed] = useScrollReveal();
  const [ctaRef, ctaRevealed] = useScrollReveal();

  // Counters
  const countParticipation = useCounter(90, statsRevealed, 2000, "%");
  const countHoursSaved = useCounter(20, statsRevealed, 2000, "+ hrs");
  const countCustomerNps = useCounter(48, statsRevealed, 2000, "%");

  // Reset showcase inputs on tab change
  useEffect(() => {
    setSelectedScale(null);
    setSelectedOption(null);
    setSelectedEmoji(null);
  }, [activeShowcase]);

  // Handle Hero Sandbox click
  const handleSandboxScoreClick = (score: number) => {
    setSandboxScore(score);
    // Dynamically adjust bar graph distribution based on user select
    const newData = [3, 4, 10, 25, 58];
    if (score === 1) {
      newData[0] = 55; newData[4] = 10;
    } else if (score === 2) {
      newData[1] = 48; newData[4] = 15;
    } else if (score === 3) {
      newData[2] = 45;
    } else if (score === 4) {
      newData[3] = 52;
    } else {
      newData[4] = 68;
    }
    setSimulatedData(newData);
  };

  // Reset Sandbox data on category change
  useEffect(() => {
    setSandboxScore(null);
    if (sandboxCategory === "engagement") {
      setSimulatedData([2, 5, 12, 38, 43]);
    } else if (sandboxCategory === "lifecycle") {
      setSimulatedData([5, 15, 20, 40, 20]);
    } else {
      setSimulatedData([10, 8, 22, 30, 30]);
    }
  }, [sandboxCategory]);

  // Handle bento tag select
  const handleAiTagSelect = (tag: string) => {
    setActiveAiTag(tag);
    if (tag === "Motivated") {
      setAiSummaryText("Employees show high alignment with strategic initiatives, driving high task completion rates.");
    } else if (tag === "Unclear Goals") {
      setAiSummaryText("Sentiment tags suggest uncertainty around team priorities. Suggested action: Goal planning templates.");
    } else if (tag === "Overworked") {
      setAiSummaryText("Pulse reviews indicate spikes in workload pressure. AI recommendation: Schedule project cooldown sessions.");
    } else {
      setAiSummaryText("Belonging markers have risen by 8% following recent psychological safety workshops.");
    }
  };

  // Auto-rotating Showcase
  useEffect(() => {
    if (userShowcaseInteracted) return;
    const interval = setInterval(() => {
      setActiveShowcase((prev) => {
        const idx = TEMPLATE_TYPES.findIndex((t) => t.id === prev);
        const next = (idx + 1) % TEMPLATE_TYPES.length;
        return TEMPLATE_TYPES[next].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [userShowcaseInteracted]);

  // Auto-rotating Persona
  useEffect(() => {
    if (userPersonaInteracted) return;
    const interval = setInterval(() => {
      setActivePersona((prev) => {
        const idx = PERSONAS.findIndex((p) => p.id === prev);
        const next = (idx + 1) % PERSONAS.length;
        return PERSONAS[next].id;
      });
    }, 5500);
    return () => clearInterval(interval);
  }, [userPersonaInteracted]);

  // Auto-rotating Testimonials
  useEffect(() => {
    if (userQuoteInteracted) return;
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [userQuoteInteracted]);

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      setFormStatus("error");
      return;
    }
    setFormStatus("success");
    setTimeout(() => {
      setEmailInput("");
      setFormStatus("idle");
    }, 3000);
  };

  const getSentimentScores = (tag: string) => {
    switch (tag) {
      case "Motivated":
        return { positive: 88, neutral: 10, negative: 2 };
      case "Unclear Goals":
        return { positive: 15, neutral: 35, negative: 50 };
      case "Overworked":
        return { positive: 10, neutral: 30, negative: 60 };
      case "Inclusion":
        return { positive: 75, neutral: 20, negative: 5 };
      default:
        return { positive: 50, neutral: 30, negative: 20 };
    }
  };

  const currentShowcase = TEMPLATE_TYPES.find((t) => t.id === activeShowcase) || TEMPLATE_TYPES[0];
  const currentPersona = PERSONAS.find((p) => p.id === activePersona) || PERSONAS[0];

  const faqs = [
    {
      q: "What types of employee surveys can we create?",
      a: "You can create engagement surveys, pulse surveys, onboarding surveys, exit surveys, 360-degree feedback, manager effectiveness surveys, DEI surveys, and fully custom surveys with our drag-and-drop builder."
    },
    {
      q: "Can survey templates be customized?",
      a: "Absolutely. Every template is fully customizable — modify questions, add logic branching, change scales, adjust branding, and tailor content to match your organization's specific needs."
    },
    {
      q: "How is employee anonymity protected?",
      a: "We use enterprise-grade anonymization with minimum response thresholds, data aggregation, and encrypted identifiers. Employees can provide honest feedback knowing their identity is fully protected."
    },
    {
      q: "How often should surveys be conducted?",
      a: "We recommend quarterly comprehensive surveys combined with monthly pulse checks. Our platform provides scheduling tools and best-practice recommendations for optimal survey cadence."
    },
    {
      q: "Can managers access team-level insights?",
      a: "Yes. Managers get dedicated dashboards with team-level analytics, trend reports, and AI-generated action recommendations — while maintaining individual anonymity standards."
    },
    {
      q: "Does the platform integrate with HR systems?",
      a: "We integrate with all major HRIS platforms including Workday, BambooHR, SAP SuccessFactors, ADP, and more. We also support SSO, Slack, and Microsoft Teams notifications."
    }
  ];

  return (
    <div className="rtu-page">
      <Navbar />
      {/* 1. COSMIC SANDBOX HERO SECTION */}
      <section className="rtu-hero" ref={heroRef}>
        <div className="rtu-hero__bg-shapes">
          <div className="shape shape--1" />
          <div className="shape shape--2" />
        </div>

        <div className="rtu-hero__container">
          <div className={`rtu-hero__content ${heroRevealed ? "reveal-active" : ""}`}>
            <span className="rtu-hero__badge">
              <Sparkles size={12} />
              VibeOS Survey Platform
            </span>

            <h1 className="rtu-hero__title">
              Survey Intelligence: <span>Built for modern teams</span>
            </h1>
            <h2>Understand what matters most to your workforce with research-backed diagnostics</h2>

            <p className="rtu-hero__desc">
              Deploy science-backed survey templates covering engagement, lifecycle milestones, pulses, and psychological safety. Custom-designed for teams that lead with culture.
            </p>

            <div className="rtu-hero__cta-group">
              <a href="#demo" className="rtu-btn rtu-btn--primary">
                Book a Demo
                <ArrowRight size={16} />
              </a>
              {/* <a href="#sandbox" className="rtu-btn rtu-btn--secondary">
                <Play size={14} />
                Try Sandbox Simulator
              </a> */}
            </div>


          </div>

          {/* Interactive Hero Survey Builder Sandbox */}
          <div id="sandbox" className={`rtu-hero__visual ${heroRevealed ? "reveal-active" : ""}`}>
            <div className="hero-survey-card">
              <div className="card-top">
                <ClipboardList size={18} className="text-purple" />
                <div className="sandbox-tab-selectors">
                  <button
                    className={`sandbox-tab-pill ${sandboxCategory === "engagement" ? "active" : ""}`}
                    onClick={() => setSandboxCategory("engagement")}
                  >
                    Engagement
                  </button>
                  <button
                    className={`sandbox-tab-pill ${sandboxCategory === "lifecycle" ? "active" : ""}`}
                    onClick={() => setSandboxCategory("lifecycle")}
                  >
                    Lifecycle
                  </button>
                  <button
                    className={`sandbox-tab-pill ${sandboxCategory === "pulse" ? "active" : ""}`}
                    onClick={() => setSandboxCategory("pulse")}
                  >
                    Pulse
                  </button>
                </div>
                <span className="pulse-tag">SANDBOX</span>
              </div>

              <div className="card-question">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sandboxCategory}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {sandboxCategory === "engagement" && (
                      <h4>I feel empowered to execute on our team goals.</h4>
                    )}
                    {sandboxCategory === "lifecycle" && (
                      <h4>My onboarding experience made me feel welcome and equipped.</h4>
                    )}
                    {sandboxCategory === "pulse" && (
                      <h4>My team's workload has been manageable this sprint.</h4>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="question-scale">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      className={`scale-btn ${sandboxScore === n ? "selected" : ""}`}
                      onClick={() => handleSandboxScoreClick(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <div className="scale-labels">
                  <span>Strongly Disagree</span>
                  <span>Strongly Agree</span>
                </div>
              </div>

              {/* Dynamic simulated data visualization feedback */}
              <div className="card-stats">
                <div className="sandbox-stat-header">
                  <span>Simulated Sentiment Trend</span>
                  <strong>{sandboxScore ? `Your Input: ${sandboxScore}/5` : "Click scale to test"}</strong>
                </div>
                <div className="simulated-bar-chart">
                  {simulatedData.map((val, idx) => (
                    <div key={idx} className="chart-bar-column">
                      <div className="bar-track">
                        <motion.div
                          className="bar-fill"
                          initial={{ height: 0 }}
                          animate={{ height: `${val}%` }}
                          transition={{ type: "spring", stiffness: 100 }}
                          style={{
                            backgroundColor: idx === 4 ? "#10b981" : idx === 3 ? "#7e53ff" : idx === 2 ? "#3b82f6" : "#ef4444"
                          }}
                        />
                      </div>
                      <span className="bar-label">{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="floating-bubble bubble-1">
              <Activity size={14} className="text-blue" />
              <span>40+ Templates</span>
            </div>
            <div className="floating-bubble bubble-2">
              <CheckCircle size={14} className="text-emerald" />
              <span>90% Participation</span>
            </div>
          </div>
        </div>
      </section>

     
      {/* 3. INTERACTIVE SURVEY STUDIO */}
      <section className="rtu-showcase" ref={showcaseRef}>
        <div className="container">
          <div className={`rtu-section-header text-center ${showcaseRevealed ? "reveal-active" : ""}`}>
            <h2>Explore our survey templates workspace</h2>
            <p>
              Click through the tabs below to test-drive sample templates and preview the diagnostics and questions.
            </p>
          </div>

          <div className="showcase-workspace">
            {/* Left selector */}
            <div className="showcase-tabs">
              {TEMPLATE_TYPES.map((t) => (
                <button
                  key={t.id}
                  className={`showcase-tab-btn showcase-tab-btn--${t.id} ${activeShowcase === t.id ? "active" : ""}`}
                  onClick={() => {
                    setActiveShowcase(t.id);
                    setUserShowcaseInteracted(true);
                  }}
                >
                  <span className="dot" style={{ backgroundColor: activeShowcase === t.id ? t.color : "transparent" }} />
                  <span className="label">{t.label}</span>
                  <span className="count-badge">{t.templatesCount} templates</span>
                </button>
              ))}
            </div>

            {/* Right Simulator Viewport */}
            <div className={`showcase-viewport ${showcaseRevealed ? "reveal-active" : ""}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowcase}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`workspace-panel workspace-panel--${activeShowcase}`}
                >
                  <div className="panel-header">
                    <div className="panel-info">
                      <span className="kicker" style={{ color: currentShowcase.color }}>{currentShowcase.title}</span>
                      <p className="desc">{currentShowcase.desc}</p>
                    </div>
                  </div>

                  <div className="panel-simulator">
                    <div className="simulator-card">
                      <div className="sim-header">
                        <span className="sim-badge" style={{ borderColor: currentShowcase.color, color: currentShowcase.color }}>
                          SIMULATOR
                        </span>
                        <span className="sim-title">Live Preview</span>
                      </div>

                      <div className="sim-body">
                        <h4>{currentShowcase.sampleQuestion}</h4>

                        {/* Interactive Scales */}
                        {currentShowcase.inputType === "scale" && (
                          <div className="scale-wrap">
                            <div className="scale-row">
                              {[1, 2, 3, 4, 5].map((n) => (
                                <button
                                  key={n}
                                  className={`scale-num ${selectedScale === n ? "active" : ""}`}
                                  onClick={() => setSelectedScale(n)}
                                >
                                  {n}
                                </button>
                              ))}
                            </div>
                            <div className="scale-labels">
                              <span>Strongly Disagree</span>
                              <span>Strongly Agree</span>
                            </div>
                          </div>
                        )}

                        {/* Interactive Options */}
                        {currentShowcase.inputType === "options" && (
                          <div className="options-wrap">
                            {currentShowcase.options?.map((opt) => (
                              <button
                                key={opt}
                                className={`option-btn ${selectedOption === opt ? "active" : ""}`}
                                onClick={() => setSelectedOption(opt)}
                              >
                                <span className="radio" />
                                <span>{opt}</span>
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Interactive Emojis */}
                        {currentShowcase.inputType === "emojis" && (
                          <div className="emojis-wrap">
                            {[
                              { emoji: "😫", text: "Overwhelmed" },
                              { emoji: "😐", text: "Manageable" },
                              { emoji: "😊", text: "Just Right" },
                              { emoji: "🥱", text: "Too Light" }
                            ].map((item) => (
                              <button
                                key={item.text}
                                className={`emoji-btn ${selectedEmoji === item.emoji ? "active" : ""}`}
                                onClick={() => setSelectedEmoji(item.emoji)}
                              >
                                <span className="icon">{item.emoji}</span>
                                <span className="lbl">{item.text}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="sim-footer">
                        <div className="metric-box">
                          <span className="lbl">Target Outcome</span>
                          <div className="metric-value-wrap">
                            <strong style={{ color: currentShowcase.color }}>{currentShowcase.metricVal}</strong>
                            <span>{currentShowcase.metricLabel}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      
      {/* 5. ORGANIZATIONAL PERSONAS SWITCHER */}
      <section className="rtu-personas" ref={personaRef}>
        <div className="container">
          <div className={`rtu-section-header text-center ${personaRevealed ? "reveal-active" : ""}`}>
            <h2>Employee retention software that works across your entire organization</h2>
            <p>VibeOS delivers targeted diagnostics and playbooks customized for every leadership layer.</p>
          </div>

          <div className="personas-workspace">
            {/* Left control panel */}
            <div className={`persona-tabs ${personaRevealed ? "reveal-active" : ""}`}>
              {PERSONAS.map((p) => (
                <button
                  key={p.id}
                  className={`persona-tab-btn persona-tab-btn--${p.id} ${activePersona === p.id ? "active" : ""}`}
                  onClick={() => {
                    setActivePersona(p.id);
                    setUserPersonaInteracted(true);
                  }}
                >
                  <h4>{p.label}</h4>
                  <p>{p.title}</p>
                </button>
              ))}
            </div>

            {/* Right Dashboard Mockup Viewport */}
            <div className={`persona-viewport ${personaRevealed ? "reveal-active" : ""}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePersona}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`persona-panel persona-panel--${activePersona}`}
                >
                  <div className="panel-header">
                    <span className="panel-badge" style={{ backgroundColor: `${currentPersona.color}15`, color: currentPersona.color }}>
                      {currentPersona.badge}
                    </span>
                    <h3>{currentPersona.title}</h3>
                    <p>{currentPersona.desc}</p>
                  </div>

                  <div className="panel-mockup">
                    <div className="mock-window">
                      <div className="mock-header">
                        <div className="dots"><span /><span /><span /></div>
                        <span className="address">vibeos.com/platform/analytics</span>
                      </div>
                      <div className="mock-body">
                        {/* Custom visual lists according to role */}
                        {currentPersona.id === "hr" && (
                          <div className="hr-list-view">
                            <div className="mock-stat-bar">
                              <span className="lbl">Turnover Risk Detection Rate</span>
                              <strong className="text-purple">94%</strong>
                            </div>
                            <ul className="mock-checks">
                              {currentPersona.list.map((item, i) => (
                                <li key={i} className="check-item">
                                  <Check className="text-purple" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {currentPersona.id === "leader" && (
                          <div className="leader-list-view">
                            <div className="mock-stat-bar">
                              <span className="lbl">Benchmark Comparators</span>
                              <strong className="text-blue">Tech Industry Top 10%</strong>
                            </div>
                            <ul className="mock-checks">
                              {currentPersona.list.map((item, i) => (
                                <li key={i} className="check-item">
                                  <Check className="text-blue" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {currentPersona.id === "manager" && (
                          <div className="manager-list-view">
                            <div className="mock-stat-bar">
                              <span className="lbl">Action Playbook Completion</span>
                              <strong className="text-emerald">88%</strong>
                            </div>
                            <ul className="mock-checks">
                              {currentPersona.list.map((item, i) => (
                                <li key={i} className="check-item">
                                  <Check className="text-emerald" size={14} />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      
      {/* 8. FAQ SECTION */}
      <section className="rtu-faq" ref={faqRef}>
        <div className="container">
          <div className={`rtu-faq__header text-center ${faqRevealed ? "reveal-active" : ""}`}>
            <span className="rtu-hero__badge">
              {/* <Sparkles size={12} /> */}
              SUPPORT & FAQ
            </span>
            {/* <h2>Frequently Asked Questions</h2> */}
          </div>

          <div className={`rtu-faq__list ${faqRevealed ? "reveal-active" : ""}`}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="faq-question">
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className="faq-chevron" />
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
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
