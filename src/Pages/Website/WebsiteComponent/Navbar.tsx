import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X
} from 'lucide-react'

import Logo from './Logo'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchExpanded, setSearchExpanded] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchExpanded(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Links for desktop navbar
  const desktopLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Account', path: '/my-account' },
    { name: 'Shop', path: '/shop' },
    { name: 'Order Information', path: '/order-info' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Return Policy', path: '/terms' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ]

  // Links for mobile drawer
  const mobileLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Account', path: '/my-account' },
    { name: 'Shop', path: '/shop' },
    { name: 'Order Information', path: '/order-info' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Return Policy', path: '/terms' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'About Us', path: '/about' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-primary-foreground">
      <div className="w-full mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">

        {/* Left Section: Logo & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 shrink-0 mr-6">
          {/* Mobile Menu Button - Only visible on small screens */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center hover:text-success transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="cursor-pointer flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-6">
          {desktopLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-m font-semibold tracking-wide whitespace-nowrap transition-colors hover:text-success ${isActive(link.path) ? 'text-success' : 'text-primary-foreground/90'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Section: Expandable Search + Icons */}
        <div className="flex items-center gap-5 lg:gap-6 shrink-0 ml-6 relative">

          {/* Expandable Search */}
          <div ref={searchRef} className="flex items-center relative h-10">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-8 transition-all duration-300 ease-in-out bg-background text-foreground text-sm rounded-full py-1.5 px-4 focus:outline-none focus:ring-1 focus:ring-success ${searchExpanded ? 'w-48 md:w-64 opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none'
                }`}
            />
            <button
              onClick={() => setSearchExpanded(!searchExpanded)}
              className={`hover:text-success transition-colors cursor-pointer z-10 ${searchExpanded ? 'text-success' : 'text-primary-foreground'}`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <Link to="/login-signup" className="group relative flex items-center justify-center hover:text-success transition-colors cursor-pointer">
            <User className="w-5 h-5" />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Login/Register
            </span>
          </Link>

          <button className="relative hover:text-success transition-colors cursor-pointer">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-2 bg-success text-primary font-bold text-[10px] w-[16px] h-[16px] rounded-full flex items-center justify-center border border-black">
              0
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col p-6 gap-2">

            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Menu</h3>
            {mobileLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium py-3 px-4 rounded-lg transition-colors ${isActive(link.path)
                  ? 'text-foreground bg-success font-semibold'
                  : 'text-muted-foreground hover:bg-white/10 hover:text-primary-foreground'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
