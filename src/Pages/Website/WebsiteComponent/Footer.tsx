import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground pt-16 pb-12 relative z-10 w-full border-t border-[#2a2a2a]/40">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-10 lg:px-12">

        {/* About Us & Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* About us branding section */}
          <div className="lg:col-span-1 space-y-5">
            <Link to="/" className="cursor-pointer inline-block hover:opacity-90 transition-opacity">
              <Logo />
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/90 max-w-sm">
              Digabyss is the market place for creative minds. We serve as a direct portal connecting global independent developers, writers, designers, and musicians directly with clients under the Buy, Sell, Trade, and Negotiate framework.
            </p>

            {/* Circular Blue Social Handles */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#184880] hover:bg-[#184880]/80 flex items-center justify-center text-white transition-all shadow-md cursor-pointer hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#184880] hover:bg-[#184880]/80 flex items-center justify-center text-white transition-all shadow-md cursor-pointer hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#184880] hover:bg-[#184880]/80 flex items-center justify-center text-white transition-all shadow-md cursor-pointer hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#184880] hover:bg-[#184880]/80 flex items-center justify-center text-white transition-all shadow-md cursor-pointer hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Digital files category list */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Digital Stores
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/product-category/audio" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Audio & Beat Pack
                </Link>
              </li>
              <li>
                <Link to="/product-category/digital-art" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Artworks & Photos
                </Link>
              </li>
              <li>
                <Link to="/product-category/literature" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Novels & Literature
                </Link>
              </li>
              <li>
                <Link to="/product-category/games" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Indie Games
                </Link>
              </li>
              <li>
                <Link to="/product-category/software" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Software & Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links section */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/about" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-primary-foreground hover:text-success transition-colors font-medium">
                  Terms & Return Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected section */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">
              Stay Connected
            </h4>
            <p className="text-xs text-primary-foreground/80 mb-5 leading-relaxed max-w-xs">
              Receive updates about new creative assets and freelancing opportunities.
            </p>
            <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="space-y-3.5">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0d1e36] border border-white/20 rounded-lg px-4 py-3 text-xs font-medium text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-success/50 focus:border-success transition-all"
              />
              <button
                type="submit"
                className="w-full bg-[#e2bb44] hover:bg-[#e2bb44]/90 text-black font-bold text-sm py-2.5 rounded-lg transition-all shadow-md cursor-pointer"
              >
                Subscribe
              </button>
            </form>

            {/* Copyright Text relocated below subscribe button */}
            <p className="text-xs text-primary-foreground/80 font-medium pt-5 leading-relaxed">
              &copy; {new Date().getFullYear()} Digabyss. All rights reserved. Created for artists worldwide.
            </p>
          </div>

        </div>

      </div>
    </footer>
  )
}