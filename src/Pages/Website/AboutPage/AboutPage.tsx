import { Link } from 'react-router-dom'
import { CheckCircle2, Target, Users, Zap, Shield, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-24">

        {/* 1. Hero Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto pt-4">
          <span className="text-success text-sm font-bold tracking-widest uppercase">About Digabyss</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Democratizing the Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-400">Creative Economy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            A boundless marketplace for independent minds to Buy, Sell, Trade, and Negotiate without traditional gatekeepers.
          </p>
        </section>

        {/* 2. Our Motive (The "Why") */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-[#1d1d1d] border border-[#2a2a2a] rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 text-success text-xs font-bold uppercase tracking-wider">
              <Target className="w-4 h-4" />
              Our Motive
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Empowering the Independent Creator</h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Digabyss is built with a singular motive: to eliminate traditional gatekeepers. For too long, independent artists, developers, and creators have struggled with high licensing fees and intermediaries taking a cut of their hard work.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              We provide a direct, peer-to-peer space where you can successfully monetize your files and skills on your own terms. Your work, your price, your profit.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-[#2a2a2a]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              alt="Creators collaborating"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1d] via-transparent to-transparent"></div>
          </div>
        </section>

        {/* 3. The Need (The Problem We Solve) */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">The Needs We Address</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The creative industry is broken for the independent creator. Digabyss was engineered to solve these core issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Need 1 */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-8 space-y-4 hover:border-success transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-success border border-[#2a2a2a]">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">High Middleman Fees</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Traditional platforms take massive cuts from your sales. Digabyss drastically reduces overhead, ensuring the majority of the profit goes directly into your pocket.
              </p>
            </div>

            {/* Need 2 */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-8 space-y-4 hover:border-success transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-success border border-[#2a2a2a]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Direct Connection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Creators need a way to communicate and negotiate directly with buyers and clients. Our platform facilitates transparent, peer-to-peer relationships.
              </p>
            </div>

            {/* Need 3 */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-8 space-y-4 hover:border-success transition-colors">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-success border border-[#2a2a2a]">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Global Exposure</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Independent talent often gets buried. We provide a categorized, search-optimized hub for buyers worldwide to find your specific skills and digital assets.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Why We Present Digabyss */}
        <section className="bg-black border border-[#2a2a2a] rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-success/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          <div className="relative z-10 space-y-12 max-w-4xl">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Why We Built This</h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                We present Digabyss because the digital world needs a true marketplace—a bazaar for the modern era where the phrase <strong className="text-white font-bold">Buy, Sell, Trade, Negotiate</strong> actually means something.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Verified Top Seller Program</h4>
                  <p className="text-sm text-gray-400 mt-2">We reward creators who maintain high-quality transactions, giving you the stamp of approval to boost your visibility and trust.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-6 h-6 text-success shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Freedom to Negotiate</h4>
                  <p className="text-sm text-gray-400 mt-2">Don't settle for fixed prices. Digabyss allows buyers and sellers to negotiate terms that work for both parties, fostering fair trade.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Join the Movement (CTA) */}
        <section className="text-center space-y-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to take control?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you're looking to sell your digital art, offer freelance services, or find the perfect talent for your next project, Digabyss is your platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/signup" className="px-8 py-4 bg-success hover:bg-success/90 text-black font-bold rounded-full transition-all hover:scale-105">
              Start Selling
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-[#1d1d1d] border border-[#2a2a2a] hover:border-success text-white font-bold rounded-full transition-all hover:scale-105">
              Hire Talent
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
