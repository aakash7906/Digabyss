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
import { OurProductsDesktop, OurProductsMobile } from './OurProducts'
import { useCart } from '@/Pages/context/CartContext'

interface NavLink {
  name: string
  path: string
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  const [searchExpanded, setSearchExpanded] = useState<boolean>(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Links for desktop navbar
  const desktopLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Order Information', path: '/order-info' },
    { name: 'Schedule Digital Streaming', path: '/schedule-digital-streaming' },
  ]

  // Links for mobile drawer
  const mobileLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Order Information', path: '/order-info' },
    { name: 'Schedule Digital Streaming', path: '/schedule-digital-streaming' },
  ]

  const isActive = (path: string): boolean => {
    return location.pathname === path
  }

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black text-primary-foreground">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-3.5 flex items-center justify-between">

        {/* Left Section: Logo */}
        <div className="flex items-center shrink-0 lg:mr-4">
          <Link to="/" className="cursor-pointer flex items-center shrink-0">
            <Logo />
          </Link>
        </div>

        {/* Center Section: Responsive Desktop Navigation Links */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-3.5 xl:gap-6 px-2">
          {desktopLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs xl:text-m font-semibold tracking-wide whitespace-nowrap transition-colors hover:text-success ${isActive(link.path) ? 'text-success' : 'text-primary-foreground/90'
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Our Products Dropdown */}
          <OurProductsDesktop />
        </nav>

        {/* Right Section: Expandable Search + Icons + Symmetrical Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 shrink-0 lg:ml-4 relative">

          {/* Expandable Search */}
          <div ref={searchRef} className="flex items-center relative h-10">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-7 transition-all duration-300 ease-in-out bg-background text-foreground text-xs sm:text-sm rounded-full py-1.5 px-3.5 focus:outline-none focus:ring-1 focus:ring-success ${searchExpanded ? 'w-36 sm:w-48 md:w-64 opacity-100 pointer-events-auto' : 'w-0 opacity-0 pointer-events-none'
                }`}
            />
            <button
              onClick={() => setSearchExpanded(!searchExpanded)}
              className={`p-1 hover:text-success transition-colors cursor-pointer z-10 ${searchExpanded ? 'text-success' : 'text-primary-foreground'}`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          <Link to="/login-signup" className="group relative flex items-center justify-center p-1 hover:text-success transition-colors cursor-pointer" aria-label="User Account">
            <User className="w-5 h-5" />
            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              Login/Register
            </span>
          </Link>

          <Link to="/viewcart" className="relative flex items-center justify-center p-1 hover:text-success transition-colors cursor-pointer group" aria-label="Shopping Cart">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1.5 bg-success text-primary font-bold text-[10px] w-[16px] h-[16px] rounded-full flex items-center justify-center border border-black">
              {cartCount}
            </span>
            <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
              Shopping Cart
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center p-1 hover:text-success transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

            {/* Our Products Accordion (Mobile) */}
            <OurProductsMobile onNavigate={() => setMobileMenuOpen(false)} />

          </nav>
        </div>
      )}
    </header>
  )
}
