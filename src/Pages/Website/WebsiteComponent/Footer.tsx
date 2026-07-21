import { Link } from 'react-router-dom'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa6'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-black text-primary-foreground pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Us & Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* About us branding section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="cursor-pointer">
              <Logo />
            </Link>
            <p className="text-sm text-primary-foreground leading-relaxed max-w-sm">
              Digabyss is the market place for creative minds. We serve as a direct portal connecting global independent developers, writers, designers, and musicians directly with clients under the Buy, Sell, Trade, and Negotiate framework.
            </p>

            {/* Social handles */}
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-secondary hover:bg-accent hover:text-primary transition-all rounded-full text-white">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary hover:bg-accent hover:text-primary transition-all rounded-full text-white">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary hover:bg-accent hover:text-primary transition-all rounded-full text-white">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary hover:bg-accent hover:text-primary transition-all rounded-full text-white">
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Digital files category list */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Digital Stores</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Audio & Beat Pack</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Artworks & Photos</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Novels & Literature</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Indie Games</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Software & Tools</Link></li>
            </ul>
          </div>

          {/* Directory networking links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Networking</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/contact" className="hover:text-white transition-colors">Freelance Board</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Gigs Listings</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Verified Program</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Negotiation Rules</Link></li>
            </ul>
          </div>

          {/* Quick contact and news signup */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Stay Connected</h4>
            <p className="text-xs text-primary-foreground mb-4 leading-normal">
              Receive updates detailing new creative assets and freelancing jobs.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-secondary/50 border border-foreground rounded-lg px-3 py-2 text-xs text-white placeholder-primary-foreground focus:outline-none focus:ring-1 focus:ring-accent transition-all"
              />
              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-black font-bold text-xs py-2.5 rounded-lg transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* copyright metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground">
          <p>&copy; {new Date().getFullYear()} Digabyss. All rights reserved. Created for artists worldwide.</p>
          <div className="flex gap-4">
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms & Return Policy</Link>
            <Link to="/careers" className="hover:underline">Careers</Link>
            <Link to="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
