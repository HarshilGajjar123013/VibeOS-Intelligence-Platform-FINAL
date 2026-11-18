"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Check, 
  Mail, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub, FiSlack } from "react-icons/fi";
import { useProtoStore } from "@/src/store/useProtoStore";
import "./Footer.scss";

export default function Footer() {
  const { setDemoModalOpen } = useProtoStore();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleRequestDemo = () => {
    if (typeof setDemoModalOpen === "function") {
      setDemoModalOpen(true);
    }
  };

  return (
    <footer className="vibe-footer">
      {/* Pre-footer CTA Banner */}
      <div className="vibe-footer__cta-banner">
        <div className="cta-banner__container">
          <div className="cta-banner__glow" />
          <div className="cta-banner__content">
            <span className="cta-banner__badge">
              <Sparkles size={14} /> Ready to Transform Your Workplace?
            </span>
            <h2 className="cta-banner__title">
              Start measuring the cultural intelligence behind great performance.
            </h2>
            <p className="cta-banner__desc">
              Join forward-thinking companies using VibeOS to eliminate burnout, align teams, and build high-trust cultures.
            </p>
            <div className="cta-banner__actions">
              <button 
                onClick={handleRequestDemo}
                className="cta-banner__btn cta-banner__btn--primary"
              >
                Request a Demo <ArrowRight size={16} />
              </button>
              <Link href="/platform/engagement" className="cta-banner__btn cta-banner__btn--secondary">
                Explore Platform
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="vibe-footer__container">
        {/* Top Header Row: Brand & Newsletter */}
        <div className="vibe-footer__top">
          <div className="vibe-footer__brand">
            <Link href="/" className="vibe-footer__logo">
              <img
                src="/assets/images/logo2.png"
                alt="VibeOS"
                className="vibe-footer__logo-img"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  const textLogo = e.currentTarget.nextElementSibling;
                  if (textLogo) (textLogo as HTMLElement).style.display = "block";
                }}
              />
              <span className="vibe-footer__logo-text" style={{ display: "none" }}>
                Vibe<span>OS</span>
              </span>
            </Link>
            <p className="vibe-footer__tagline">
              The People Intelligence Operating System—transforming workplace signals into predictive cultural insights.
            </p>
          </div>

          <div className="vibe-footer__newsletter">
            <h4 className="newsletter__title">Stay ahead in People Science</h4>
            <p className="newsletter__desc">Get bi-weekly insights on retention, engagement, and culture analytics.</p>
            
            {subscribed ? (
              <div className="newsletter__success">
                <Check size={16} /> You&apos;re subscribed to VibeOS Insights!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter__form">
                <div className="newsletter__input-wrapper">
                  <Mail size={16} className="input-icon" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter__input"
                  />
                </div>
                <button type="submit" className="newsletter__btn">
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="vibe-footer__divider" />

        {/* Navigation Grid (4 Columns) */}
        <div className="vibe-footer__grid">
          {/* Column 1: Platform */}
          <div className="vibe-footer__col">
            <h5 className="vibe-footer__col-title">Platform</h5>
            <ul className="vibe-footer__col-list">
              <li><Link href="/platform/engagement">Vibe Index Matrix</Link></li>
              <li><Link href="/platform/retention-insights">Retention Insights</Link></li>
              <li><Link href="/platform/pulse-surveys">Pulse Surveys</Link></li>
              <li><Link href="/platform/ready-to-use-surveys">Ready-to-use Surveys</Link></li>
              <li><Link href="/platform/ai-comment-summaries">AI Comment Summaries</Link></li>
              <li><Link href="/platform/proven-action-plans">Proven Action Plans</Link></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="vibe-footer__col">
            <h5 className="vibe-footer__col-title">Solutions</h5>
            <ul className="vibe-footer__col-list">
              <li><Link href="/solutions/enterprise">Enterprise Culture</Link></li>
              <li><Link href="/solutions/manager-coaching">Manager Coaching</Link></li>
              <li><Link href="/solutions/burnout-prevention">Burnout Prevention</Link></li>
              <li><Link href="/solutions/okr-alignment">OKR Alignment</Link></li>
              <li><Link href="/solutions/psychological-safety">Psychological Safety</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="vibe-footer__col">
            <h5 className="vibe-footer__col-title">Resources</h5>
            <ul className="vibe-footer__col-list">
              <li><Link href="/insights/people-science">People Science</Link></li>
              <li><Link href="/insights/roi-calculator">ROI Calculator</Link></li>
              <li><Link href="/resources/case-studies">Case Studies</Link></li>
              <li><Link href="/resources/benchmarks">Workplace Benchmarks</Link></li>
              <li><Link href="/docs/api">API & Integrations</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="vibe-footer__col">
            <h5 className="vibe-footer__col-title">Company</h5>
            <ul className="vibe-footer__col-list">
              <li><Link href="/about">About VibeOS</Link></li>
              <li>
                <Link href="/careers" className="vibe-footer__link-badge-wrapper">
                  Careers <span className="vibe-footer__badge">We&apos;re hiring</span>
                </Link>
              </li>
              <li><Link href="/contact">Contact Sales</Link></li>
              <li><Link href="/security">Security & Compliance</Link></li>
              <li><Link href="/press">Press & Media</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="vibe-footer__divider" />

        {/* Bottom Bar: Copyright, Legal, Status & Socials */}
        <div className="vibe-footer__bottom">
          <div className="vibe-footer__bottom-left">
            <span className="vibe-footer__copyright">
              © {new Date().getFullYear()} VibeOS Inc. All rights reserved.
            </span>
            <div className="vibe-footer__status">
              <span className="status-dot" />
              <span>All systems operational</span>
            </div>
          </div>

          <div className="vibe-footer__legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Settings</Link>
            <Link href="/security">
              <ShieldCheck size={14} className="legal-icon" /> Security
            </Link>
          </div>

          <div className="vibe-footer__socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href="https://slack.com" target="_blank" rel="noopener noreferrer" aria-label="Slack">
              <FiSlack size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
