import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/Pages/Website/WebsiteComponent/Navbar'
import Footer from '@/Pages/Website/WebsiteComponent/Footer'
import { CartProvider } from '@/Pages/context/CartContext'

export function WebsiteLayout() {
  const location = useLocation()

  // Reset scroll position to top when navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // Identify routes that should have the dark background to avoid white margins
  const isDarkPage =
    ['/', '/shop', '/viewcart', '/cart', '/account', '/my-account', '/login-signup', '/about', '/contact', '/privacy', '/privacy-policy', '/terms', '/careers', '/order-information', '/order-info', '/schedule-digital-streaming', '/schedule-streaming'].includes(location.pathname) ||
    location.pathname.startsWith('/product-category') ||
    location.pathname.startsWith('/shop/product')

  return (
    <CartProvider>
      <div className={`flex flex-col min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${isDarkPage ? 'bg-[#121212] text-white' : 'bg-background text-foreground'}`}>
        {/* Global Capsule Floating Navbar */}
        <Navbar />

        {/* Main Route Content (padded to sit nicely below fixed navbar) */}
        <main className="flex-grow pt-16 sm:pt-20 md:pt-28 pb-12">
          <Outlet />
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </CartProvider>
  )
}

export default WebsiteLayout
