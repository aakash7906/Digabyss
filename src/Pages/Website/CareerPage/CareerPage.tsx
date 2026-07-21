import { Link } from 'react-router-dom'
import { Briefcase, Rocket, Heart, Globe, Code, Palette, Megaphone, ArrowRight } from 'lucide-react'

export default function CareerPage() {
  const perks = [
    { icon: Rocket, title: 'Shape the Future', desc: 'Work on a platform that is redefining how independent creators monetize their skills and digital assets worldwide.' },
    { icon: Heart, title: 'Creator-First Culture', desc: 'We live and breathe the creative economy. Every team member is empowered to innovate, experiment, and push boundaries.' },
    { icon: Globe, title: 'Remote & Global', desc: 'Work from anywhere. Our team spans across the globe, united by a shared mission to democratize creative commerce.' },
  ]

  const openings = [
    { role: 'Full-Stack Developer', type: 'Remote · Full-Time', icon: Code, desc: 'Build and scale the marketplace platform, payment integrations, and real-time negotiation features.' },
    { role: 'UI/UX Designer', type: 'Remote · Full-Time', icon: Palette, desc: 'Design premium, intuitive interfaces for creators and buyers across web and mobile experiences.' },
    { role: 'Community & Marketing Lead', type: 'Remote · Full-Time', icon: Megaphone, desc: 'Grow and engage our global community of independent artists, musicians, developers, and freelancers.' },
  ]

  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-20">

        {/* Hero */}
        <section className="text-center space-y-6 pt-4 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Build the Marketplace for <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-400">Creative Minds</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            We're looking for passionate people who want to eliminate gatekeepers and empower independent creators everywhere.
          </p>
        </section>

        {/* Why Join Us — Perks */}
        <section className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Why Join Digabyss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-8 space-y-4 hover:border-success transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-success border border-[#2a2a2a]">
                  <perk.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{perk.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">Open Positions</h2>
            <p className="text-gray-400">Find your place in the creative revolution.</p>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.role} className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 hover:border-success transition-colors group">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-success border border-[#2a2a2a] shrink-0">
                  <job.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-lg font-bold group-hover:text-success transition-colors">{job.role}</h3>
                  <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">{job.type}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{job.desc}</p>
                </div>
                <Link to="/contact" className="flex items-center gap-2 text-success text-sm font-bold hover:underline shrink-0">
                  Apply <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black border border-[#2a2a2a] rounded-3xl p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-success/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Don't see your role?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We're always on the lookout for exceptional talent. Send us your portfolio and tell us how you'd contribute to the Digabyss mission.
            </p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-success hover:bg-success/90 text-black font-bold rounded-full transition-all hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
