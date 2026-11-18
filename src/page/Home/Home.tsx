"use client";

import { useState, useEffect, useRef } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiEye, FiSearch, FiZap, FiCheck } from "react-icons/fi";
import { useProtoStore } from "@/src/store/useProtoStore";
import "./Home.scss";

type IconCard = {
  id: string;
  className: string;
  icon: React.ReactNode;
  tone: string;
  title: string;
  role?: string;
  description: string;
  color: string;
  tooltipPosition: "top" | "bottom" | "left" | "right";
  path: string; // wire path (center -> node)
};

const floatingCards: readonly IconCard[] = [
  {
    id: "signal-1",
    className: "hero__card--signal-left",
    icon: <FiZap />,
    tone: "hero__card--orange",
    title: "Sprint Friction Alert",
    role: "DEV TEAM #2",
    description: "Engineering Dept: High burnout velocity detected 3 weeks before major release.",
    color: "#ff562e",
    tooltipPosition: "right",
    path: "M521 173 L351 139 L141 142",
  },
  {
    id: "idea",
    className: "hero__card--idea",
    icon: <HiOutlineLightBulb />,
    tone: "hero__card--yellow",
    title: "Continuous Signal Streams",
    description: "Collect pulse sentiment, Slack/Teams interaction patterns, and 1-on-1 feedback automatically without survey fatigue.",
    color: "#ffd13b",
    tooltipPosition: "bottom",
    path: "M521 173 L351 139 L333 90",
  },
  {
    id: "search",
    className: "hero__card--search",
    icon: <FiSearch />,
    tone: "hero__card--blue",
    title: "Predictive Culture Insights",
    description: "Uncover hidden team silos, retention risks, and manager coaching needs in real time.",
    color: "#30a9f5",
    tooltipPosition: "top",
    path: "M521 173 L351 139 L337 238",
  },
  {
    id: "security",
    className: "hero__card--security",
    icon: <FiZap />,
    tone: "hero__card--orange",
    title: "Automated Action Playbooks",
    description: "Deliver contextual 1-on-1 guides and coaching interventions directly to frontline team leads.",
    color: "#ff562e",
    tooltipPosition: "bottom",
    path: "M679 172 L859 138 L866 92",
  },
  {
    id: "signal-2",
    className: "hero__card--signal-right",
    icon: <FiCheck />,
    tone: "hero__card--yellow",
    title: "OKR Alignment Index",
    role: "PRODUCT & DESIGN",
    description: "84% strategy clarity score across Q3 cross-functional goals.",
    color: "#ffd13b",
    tooltipPosition: "top",
    path: "M679 172 L859 138 L871 240",
  },
  {
    id: "eye",
    className: "hero__card--eye",
    icon: <FiEye />,
    tone: "hero__card--white",
    title: "Executive Real-Time View",
    description: "Track organizational health, psychological safety, and retention risk from a single executive dashboard.",
    color: "#0f172a",
    tooltipPosition: "left",
    path: "M679 172 L859 138 L1039 144",
  },
] as const;

/* ---------- Frosted tile backdrop (generated) ---------- */
const PITCH = 98;
const leftPalette = ["#6ea8fe", "#8aa4ff", "#93c5fd", "#a5b4fc", "#7cb4ff", "#b6c8ff"];
const rightPalette = ["#f9a8d4", "#f0abfc", "#fdba74", "#c4b5fd", "#fda4af", "#e9b5ff"];

type Tile = { x: number; y: number; color: string; alpha: number; sparkle: boolean };

const makeTiles = (palette: string[], bias: number): Tile[] => {
  const out: Tile[] = [];
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 6; c++) {
      const d = c + r * bias;
      const alpha = 0.92 - d * 0.16;
      if (alpha < 0.07) continue;
      out.push({
        x: c * PITCH,
        y: r * PITCH,
        color: palette[(r * 3 + c * 2) % palette.length],
        alpha,
        sparkle: (r + c) % 2 === 0 && alpha > 0.25,
      });
    }
  }
  return out;
};

const leftTiles = makeTiles(leftPalette, 0.9);
const rightTiles = makeTiles(rightPalette, 0.8);

const renderTiles = (tiles: Tile[], side: "left" | "right", sparkleColor: string) =>
  tiles.map((t, i) => (
    <span key={`${side}-${i}`}>
      <div
        className="hero__3d-tile"
        style={
          {
            [side]: `${t.x}px`,
            top: `${t.y}px`,
            background: `linear-gradient(145deg, ${t.color}, ${t.color}cc)`,
            "--a": t.alpha,
            "--d": `${(i % 7) * 0.45}s`,
          } as React.CSSProperties
        }
      />
      {t.sparkle && (
        <i
          className="hero__sparkle"
          style={
            {
              [side]: `${t.x + PITCH - 8}px`,
              top: `${t.y + PITCH - 8}px`,
              background: sparkleColor,
              "--d": `${(i % 5) * 0.7}s`,
            } as React.CSSProperties
          }
        />
      )}
    </span>
  ));

export default function Hero() {
  const { setDemoModalOpen } = useProtoStore();
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [scale, setScale] = useState(0.8);
  const [email, setEmail] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleRequestDemo = () => {
    if (typeof setDemoModalOpen === "function") setDemoModalOpen(true);
    else window.location.reload();
  };

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) handleRequestDemo();
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    const handleGlobalClick = () => setActiveCardId(null);
    window.addEventListener("click", handleGlobalClick);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  /* Scale the network by width AND screen height so everything fits one screen */
  useEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.getBoundingClientRect().width;
      const byWidth = width / 1200;
      const byHeight = (window.innerHeight * 0.3) / 340;
      setScale(Math.min(0.8, byWidth, Math.max(byHeight, 0.35)));
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    window.addEventListener("resize", updateScale);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateScale);
    };
  }, []);

  const highlightedCardId = hoveredCardId || activeCardId;

  const activeCard =
    activeCardId === "center"
      ? {
          title: "VibeOS Intelligence Engine",
          description:
            "Continuously analyzes organizational signals, identifies emerging team friction, and drives proactive leadership action.",
          color: "#7c3aed",
        }
      : floatingCards.find((c) => c.id === activeCardId);

  return (
    <section className="hero" id="home">
      {/* Frosted pastel tile backdrop (animated) */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__tiles-grid hero__tiles-grid--left">
          {renderTiles(leftTiles, "left", "#6ea8fe")}
        </div>
        <div className="hero__tiles-grid hero__tiles-grid--right">
          {renderTiles(rightTiles, "right", "#f5a3e8")}
        </div>
        <div className="hero__radial-glow" />
      </div>

      <div className="hero__container" ref={containerRef}>
        <div className="hero__content">
          <h1 className="hero__title">
            The Intelligence Layer
            <br />
            Behind Great Cultures
          </h1>
          <p className="hero__description">
            VibeOS transforms everyday workplace interactions into cultural intelligence—
            <br className="hero__br" />
            revealing the patterns, behaviors, and signals that shape performance, retention, and growth.
          </p>
        </div>

        {/* Network diagram */}
        <div className="hero__network-wrapper" style={{ height: `${340 * scale}px` }}>
          <div
            className={`hero__network ${isMounted ? "hero__network--mounted" : ""}`}
            style={{ transform: `scale(${scale})` }}
          >
            {/* SVG wires (behind nodes) */}
            <svg className="hero__svg-lines" viewBox="0 0 1200 340" fill="none" aria-hidden="true">
              {/* grey base tracks */}
              <g stroke="#dde2ec" strokeWidth="1.6" strokeLinecap="round">
                <path d="M141 142 L351 139" />
                <path d="M351 139 L333 90" />
                <path d="M351 139 L337 238" />
                <path d="M351 139 L521 173" />
                <path d="M681 171 L859 138" />
                <path d="M859 138 L866 92" />
                <path d="M859 138 L871 240" />
                <path d="M859 138 L1039 144" stroke="#e6e9f0" />
              </g>

              {/* Always-on lightning flow along every wire */}
              {floatingCards.map((card, i) => {
                const col = card.color === "#0f172a" ? "#94a3b8" : card.color;
                const on = highlightedCardId === card.id;
                const delay = { animationDelay: `${i * 0.55}s` };
                return (
                  <g key={card.id} className={`hero__flow ${on ? "hero__flow--active" : ""}`}>
                    <path d={card.path} pathLength={100} stroke={col} className="hero__flow-track" />
                    <path
                      d={card.path}
                      pathLength={100}
                      stroke={col}
                      className="hero__flow-bolt hero__flow-bolt--soft"
                      style={delay}
                    />
                    <path d={card.path} pathLength={100} stroke={col} className="hero__flow-bolt" style={delay} />
                  </g>
                );
              })}

              {/* purple junction dots */}
              <circle cx="314" cy="139" r="4" fill="#9b6bff" className="hero__svg-junction" />
              <circle cx="892" cy="139" r="4" fill="#9b6bff" className="hero__svg-junction" />
            </svg>

            {/* Center node */}
            <button
              className={`hero__center ${highlightedCardId === "center" ? "hero__center--active" : ""}`}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveCardId(activeCardId === "center" ? null : "center");
              }}
              onMouseEnter={() => setHoveredCardId("center")}
              onMouseLeave={() => setHoveredCardId(null)}
              aria-label="VibeOS Intelligence Core"
            >
              <span className="hero__center-halo" />
              <div className="hero__center-icon">
                <FiCheck strokeWidth={3} />
              </div>
              <div
                className={`hero__tooltip hero__tooltip--top ${highlightedCardId === "center" ? "hero__tooltip--visible" : ""}`}
              >
                <h4 className="hero__tooltip-title">VibeOS Intelligence Engine</h4>
                <p className="hero__tooltip-desc">
                  Continuously analyzes organizational signals, identifies emerging team friction, and drives proactive leadership action.
                </p>
              </div>
            </button>

            {/* Floating nodes */}
            {floatingCards.map((card) => {
              const isHighlighted = highlightedCardId === card.id;
              return (
                <button
                  key={card.id}
                  className={`hero__card ${card.className} ${isHighlighted ? "hero__card--active" : ""}`}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCardId(activeCardId === card.id ? null : card.id);
                  }}
                  onMouseEnter={() => setHoveredCardId(card.id)}
                  onMouseLeave={() => setHoveredCardId(null)}
                  aria-label={`View details for ${card.title}`}
                >
                  <div className={`hero__node ${card.tone}`}>{card.icon}</div>

                  <div
                    className={`hero__tooltip hero__tooltip--${card.tooltipPosition} ${isHighlighted ? "hero__tooltip--visible" : ""}`}
                  >
                    {card.role && (
                      <div className="hero__tooltip-header">
                        <span className="hero__tooltip-dot" style={{ backgroundColor: card.color }} />
                        <span className="hero__tooltip-role">{card.role}</span>
                      </div>
                    )}
                    <h4 className="hero__tooltip-title">{card.title}</h4>
                    <p className="hero__tooltip-desc">{card.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile detail card */}
        {activeCard && (
          <div className="hero__mobile-detail-card" style={{ borderLeftColor: activeCard.color }}>
            <div className="hero__mobile-detail-header">
              <span className="hero__mobile-detail-dot" style={{ backgroundColor: activeCard.color }} />
              <h4 className="hero__mobile-detail-title">{activeCard.title}</h4>
            </div>
            <p className="hero__mobile-detail-desc">{activeCard.description}</p>
          </div>
        )}

        {/* Actions */}
        <div className="hero__actions">
          <form className="hero__email-form" onSubmit={handleCreateAccount}>
            <input
              type="email"
              placeholder="Enter your email"
              className="hero__email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Enter your email"
            />
            <button type="submit" className="hero__email-btn">
              Create Free Account
            </button>
          </form>

          <button className="hero__demo-btn" type="button" onClick={handleRequestDemo}>
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}