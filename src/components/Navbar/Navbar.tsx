"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { 
  BarChart3, 
  Users, 
  FileCheck, 
  Sparkles, 
  Target, 
  Activity, 
  UserPlus, 
  TrendingUp,
  BookOpen,
  Calculator
} from "lucide-react";
import { useProtoStore } from "@/src/store/useProtoStore";
import "./Navbar.scss";

type PlatformLink = {
  label: string;
  href: string;
  description: string;
  badge: string | null;
  icon: React.ComponentType<{ size: number; className?: string }>;
  iconBg: string;
  iconColor: string;
};

type ResourceLink = {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  iconBg: string;
  iconColor: string;
};

const PLATFORM_LINKS: PlatformLink[] = [
  {
    label: "Vibe Index Matrix",
    href: "/platform/vibe-index-matrix",
    description: "Measure impact across engagement and performance",
    badge: "NEW",
    icon: BarChart3,
    iconBg: "rgba(124, 92, 255, 0.1)",
    iconColor: "#7c5cff",
  },
  {
    label: "Retention Insights",
    href: "/platform/retention-insights",
    description: "Identify patterns that help you keep great people",
    badge: null,
    icon: Users,
    iconBg: "rgba(2, 132, 199, 0.1)",
    iconColor: "#0284c7",
  },
  {
    label: "Ready-to-use Surveys",
    href: "/platform/ready-to-use",
    description: "Launch proven survey templates faster",
    badge: null,
    icon: FileCheck,
    iconBg: "rgba(22, 163, 74, 0.1)",
    iconColor: "#16a34a",
  },
  {
    label: "AI Comment Summaries",
    href: "/platform/ai-comment-summaries",
    description: "Turn open-text feedback into concise themes",
    badge: null,
    icon: Sparkles,
    iconBg: "rgba(217, 119, 6, 0.1)",
    iconColor: "#d97706",
  },
  {
    label: "Proven Action Plans",
    href: "/platform/proven-action-plans",
    description: "Recommend next steps with confidence",
    badge: null,
    icon: Target,
    iconBg: "rgba(225, 29, 72, 0.1)",
    iconColor: "#e11d48",
  },
  {
    label: "Pulse Surveys",
    href: "/platform/pulse-surveys",
    description: "Check in frequently with lightweight surveys",
    badge: null,
    icon: Activity,
    iconBg: "rgba(79, 70, 229, 0.1)",
    iconColor: "#4f46e5",
  },
  {
    label: "Onboarding/Offboarding Survey",
    href: "/platform/onboarding-offboarding-survey",
    description: "Learn from critical employee transitions",
    badge: null,
    icon: UserPlus,
    iconBg: "rgba(8, 145, 178, 0.1)",
    iconColor: "#0891b2",
  },
  {
    label: "Benchmarking",
    href: "/platform/benchmarking",
    description: "Compare results against relevant norms",
    badge: null,
    icon: TrendingUp,
    iconBg: "rgba(5, 150, 105, 0.1)",
    iconColor: "#059669",
  },
];

const RESOURCE_LINKS: ResourceLink[] = [
  {
    label: "People Science",
    href: "/insights/people-science",
    description:
      "Expert guidance and proven strategies to build thriving workplaces.",
    icon: BookOpen,
    iconBg: "rgba(124, 92, 255, 0.1)",
    iconColor: "#7c5cff",
  },
  {
    label: "ROI Calculator",
    href: "/insights/roi-calculator",
    description:
      "Quantify the value of investing in culture and employee engagement.",
    icon: Calculator,
    iconBg: "rgba(16, 185, 129, 0.1)",
    iconColor: "#10b981",
  },
];

export default function Navbar() {
  const { setDemoModalOpen } = useProtoStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestDemo = () => {
    if (typeof setDemoModalOpen === "function") {
      setDemoModalOpen(true);
    } else {
      window.location.reload();
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileDropdown = (name: string, e: React.MouseEvent) => {
    if (typeof window !== "undefined" && window.innerWidth <= 992) {
      e.preventDefault();
      setMobileDropdown(mobileDropdown === name ? null : name);
    }
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${isMobileMenuOpen ? "navbar--mobile-open" : ""}`}>
      <div className="navbar__container">
        {/* Logo */}
        <Link
          href="/"
          className="navbar__logo"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img
            src="/assets/images/logo2.png"
            alt="VibeOS"
            className="navbar__logo-img"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const textLogo = e.currentTarget.nextElementSibling;
              if (textLogo) (textLogo as HTMLElement).style.display = "block";
            }}
          />
          <span className="navbar__logo-text" style={{ display: "none", fontSize: "22px", fontWeight: 800, color: "#111827", letterSpacing: "-0.03em" }}>
            Vibe<span style={{ color: "#7c5cff" }}>OS</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={`navbar__nav ${isMobileMenuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Primary Navigation"
        >
          {/* Home */}
          <Link
            href="/"
            className="navbar__link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Platform Dropdown */}
          <div className={`navbar__dropdown ${mobileDropdown === "platform" ? "navbar__dropdown--open" : ""}`}>
            <button
              type="button"
              className="navbar__link navbar__link--trigger"
              onClick={(e) => toggleMobileDropdown("platform", e)}
            >
              Platform

              <span
                className="navbar__caret"
                aria-hidden="true"
              />
            </button>

            <div className="navbar__dropdown-panel navbar__dropdown-panel--platform">
              <div className="navbar__platform-intro">
                <span className="navbar__platform-tag">
                  <Sparkles size={11} /> PLATFORM
                </span>

                <Link 
                  href="/platform/engagement" 
                  className="navbar__platform-heading"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Platform Overview
                </Link>

                <p className="navbar__platform-text">
                  Everything you need to listen to employees,
                  understand your culture, and take action
                  at scale.
                </p>

                <Link 
                  href="/platform/engagement" 
                  className="navbar__platform-cta"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Explore Platform
                  <FiArrowRight size={13} />
                </Link>
              </div>

              <div className="navbar__platform-grid">
                {PLATFORM_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="navbar__platform-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div 
                        className="navbar__platform-item-icon"
                        style={{ backgroundColor: link.iconBg, color: link.iconColor }}
                      >
                        <Icon size={17} />
                      </div>

                      <div className="navbar__platform-item-content">
                        <div className="navbar__platform-item-head">
                          <span className="navbar__platform-item-title">
                            {link.label}
                          </span>

                          {link.badge && (
                            <span className="navbar__platform-badge">
                              {link.badge}
                            </span>
                          )}
                        </div>

                        <p className="navbar__platform-item-description">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Insights Dropdown */}
          <div className={`navbar__dropdown ${mobileDropdown === "insights" ? "navbar__dropdown--open" : ""}`}>
            <button
              type="button"
              className="navbar__link navbar__link--trigger"
              onClick={(e) => toggleMobileDropdown("insights", e)}
            >
              Insights

              <span
                className="navbar__caret"
                aria-hidden="true"
              />
            </button>

            <div className="navbar__dropdown-panel navbar__dropdown-panel--resources">
              <div className="navbar__resources-intro">
                <p className="navbar__resources-kicker">
                  Insights & Tools
                </p>

                <h3 className="navbar__resources-heading">
                  Explore practical guides and tools to build high-performing teams.
                </h3>
              </div>

              <div className="navbar__resources-list">
                {RESOURCE_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="navbar__resource-item"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div 
                        className="navbar__resource-item-icon"
                        style={{ backgroundColor: link.iconBg, color: link.iconColor }}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="navbar__resource-item-content">
                        <span className="navbar__resource-title">
                          {link.label}
                        </span>

                        <p className="navbar__resource-description">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className="navbar__link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="navbar__link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Actions Drawer Content */}
          <div className="navbar__mobile-actions">
            <Link
              href="/signin"
              className="navbar__button navbar__button--secondary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>

            <button
              onClick={handleRequestDemo}
              className="navbar__button navbar__button--primary"
            >
              Request a Demo
            </button>
          </div>
        </nav>

        {/* Actions (Desktop) */}
        <div className="navbar__actions">
          <Link
            href="/signin"
            className="navbar__button navbar__button--secondary"
          >
            Sign in
          </Link>

          <button
            onClick={handleRequestDemo}
            className="navbar__button navbar__button--primary"
          >
            Request a Demo
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`navbar__menu ${isMobileMenuOpen ? "navbar__menu--open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
