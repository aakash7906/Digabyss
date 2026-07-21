import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Scale,
  RotateCcw,
  ShieldCheck,
  FileCode2,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Search,
  ArrowRight,
  Users,
  MessageSquare
} from 'lucide-react'

interface PolicySection {
  id: string
  category: 'terms' | 'returns' | 'licensing' | 'creators' | string
  title: string
  icon: React.ComponentType<{ className?: string }>
  summary: string
  content: React.ReactNode
}

export default function TermsConditionsPage() {
  const [activeTab, setActiveTab] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  const policySections: PolicySection[] = [
    {
      id: 'terms-of-service',
      category: 'terms',
      title: '1. User Account & Platform Acceptance',
      icon: Scale,
      summary: 'Rules for accessing DIGABYSS marketplace, account creation, and user conduct.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            By accessing or using DIGABYSS.COM ("Platform"), creating an account, purchasing digital assets, or listing items for sale/negotiation, you agree to be bound by these Terms & Conditions. If you do not agree, you must cease using the Platform immediately.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Eligibility:</strong> You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to form a binding contract.</li>
            <li><strong className="text-white">Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account.</li>
            <li><strong className="text-white">Prohibited Conduct:</strong> Users may not upload malicious software, infringe intellectual property, engage in abusive price manipulation, or bypass Platform escrow/negotiation tools.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'marketplace-framework',
      category: 'terms',
      title: '2. Buy, Sell, Trade & Negotiate Framework',
      icon: Users,
      summary: 'How direct creator-to-buyer transactions and custom negotiations work.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            DIGABYSS operates as a decentralized-feeling direct marketplace connecting independent developers, musicians, 3D artists, writers, and digital creators directly with buyers.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Direct Marketplace:</strong> Prices listed by creators are set independently. DIGABYSS provides infrastructure for delivery and buyer protection.</li>
            <li><strong className="text-white">Negotiation Offer Rules:</strong> When using the "Negotiate" feature, submitting a custom offer creates a 48-hour price hold. Once accepted by the creator, the buyer has 24 hours to complete checkout at the agreed rate.</li>
            <li><strong className="text-white">Freelance & Gig Board:</strong> Custom milestone commissions arranged via the Freelance Board must use DIGABYSS escrow payments to qualify for buyer protection.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'return-refund-policy',
      category: 'returns',
      title: '3. Digital Return & Refund Policy',
      icon: RotateCcw,
      summary: 'Our 7-Day Money-Back Guarantee, eligible scenarios, and non-refundable items.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            Because DIGABYSS specializes in non-tangible, digital downloads (source code, audio files, 3D models, graphics, literature), standard physical return rules do not apply. However, we offer a <strong className="text-success">7-Day Money-Back Guarantee</strong> under specific conditions.
          </p>

          <div className="bg-[#181818] border border-success/30 rounded-2xl p-5 space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wide">
              <CheckCircle2 className="w-5 h-5 text-success" />
              Eligible Refund Scenarios (Full Money-Back)
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong className="text-white">Corrupted or Unreadable Files:</strong> Archive files (.zip, .rar) or media files that cannot be uncompressed or opened despite standard tools.</li>
              <li><strong className="text-white">Major Misrepresentation:</strong> The downloaded file significantly differs from the preview, features list, or audio sample provided on the listing page.</li>
              <li><strong className="text-white">Non-Functional Source Code/Assets:</strong> Software, scripts, or game assets containing critical, unfixable core errors not disclosed in system requirements.</li>
              <li><strong className="text-white">Duplicate Purchase:</strong> Accidental double payment for the exact same item within a 24-hour window.</li>
              <li><strong className="text-white">Unfulfilled Custom Commission:</strong> Freelancer fails to deliver agreed milestone files within the agreed delivery timeframe.</li>
            </ul>
          </div>

          <div className="bg-[#181818] border border-red-500/30 rounded-2xl p-5 space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wide">
              <AlertCircle className="w-5 h-5 text-red-400" />
              Ineligible Refund Scenarios
            </h4>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong className="text-white">Change of Mind:</strong> Wanting a refund simply because you no longer need the asset after completing full file download.</li>
              <li><strong className="text-white">System Incompatibility:</strong> Failure to verify software version requirements (e.g. buying a Blender 4.0 plugin for Blender 2.8) clearly stated in the description.</li>
              <li><strong className="text-white">Lack of Technical Skill:</strong> Requesting refunds because you lack the software or skills required to edit or utilize the digital asset.</li>
              <li><strong className="text-white">Claims Made After 7 Days:</strong> Refund requests submitted after 7 calendar days from transaction date.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'dispute-resolution',
      category: 'returns',
      title: '4. Dispute Escalation & Refund Process',
      icon: RotateCcw,
      summary: 'Step-by-step process for resolving buyer-creator payment disputes.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            We strongly encourage direct communication between buyers and creators to resolve asset issues. Follow these steps to request a refund:
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li>
              <strong className="text-white">Step 1: Contact Creator:</strong> Use the "Contact Seller" button on the order details page or messaging dashboard to report the defect. Creators have 48 hours to provide a fix or replacement link.
            </li>
            <li>
              <strong className="text-white">Step 2: Submit Refund Ticket:</strong> If the creator is unresponsive or unable to fix the issue, submit a ticket via our <Link to="/contact" className="text-success hover:underline">Contact Support</Link> form with your Order ID and evidence (screenshots/error logs).
            </li>
            <li>
              <strong className="text-white">Step 3: DIGABYSS Mediation:</strong> Our compliance team inspects the digital payload. If approved, funds are returned to your original payment method (Credit Card, PayPal, or Crypto) within 3-5 business days.
            </li>
          </ol>
        </div>
      )
    },
    {
      id: 'licensing-terms',
      category: 'licensing',
      title: '5. Digital Licensing & Usage Rights',
      icon: FileCode2,
      summary: 'Permitted uses for Standard, Commercial, and Extended Royalty-Free Licenses.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            When purchasing digital items on DIGABYSS, you are purchasing a non-exclusive, non-transferable license to use the item, NOT ownership of the underlying intellectual property.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-[#181818] p-4 rounded-xl border border-[#2a2a2a]">
              <h5 className="font-bold text-success mb-1">Standard License</h5>
              <p className="text-xs text-gray-400">For personal projects, non-profit presentations, indie game prototypes, or single end-product commercial use (up to 5,000 sales/copies).</p>
            </div>
            <div className="bg-[#181818] p-4 rounded-xl border border-[#2a2a2a]">
              <h5 className="font-bold text-success mb-1">Commercial / Extended License</h5>
              <p className="text-xs text-gray-400">Unlimited commercial end-products, broadcast rights, music sync for film/games, and resale within larger non-source projects.</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 italic">
            * Redistribution, re-selling raw source files, or re-hosting DIGABYSS files on torrents, stock sites, or AI training repositories is strictly prohibited and subject to legal action.
          </p>
        </div>
      )
    },
    {
      id: 'creator-terms',
      category: 'creators',
      title: '6. Creator Listing & Payout Guidelines',
      icon: DollarSign,
      summary: 'Revenue share, fee breakdown, and copyright enforcement for sellers.',
      content: (
        <div className="space-y-4 text-gray-300">
          <p>
            Creators retaining rights on DIGABYSS agree to maintain high-quality listings, respond to buyer inquiries, and respect third-party copyrights.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-white">Revenue Split:</strong> Creators keep 85% to 92% of earnings depending on seller tier and Verified Creator status.</li>
            <li><strong className="text-white">Payout Schedule:</strong> Payouts are disbursed automatically every Monday or instantly upon request once balance exceeds $20.00 USD.</li>
            <li><strong className="text-white">Zero Tolerance Copyright:</strong> Uploading copyrighted music, cracked software, or stolen art results in immediate account termination and forfeiture of pending balances.</li>
          </ul>
        </div>
      )
    }
  ]

  const filteredSections = policySections.filter(section => {
    const matchesTab = activeTab === 'all' || section.category === activeTab
    const matchesSearch = searchQuery === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      section.summary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-4 md:pt-0 pb-16 font-sans">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-10">

        {/* 1. Header Hero Area */}
        <section className="text-center space-y-4 pt-2 md:pt-8 max-w-3xl mx-auto">
          <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-success/20">
            <Scale className="w-7 h-7 text-success" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Terms & <span className="text-transparent bg-clip-text bg-gradient-to-r from-success to-emerald-400">Return Policy</span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
            Last Updated: July 21, 2026 · Complete guidelines governing marketplace rules, digital licensing, price negotiations, and our 7-day refund protection.
          </p>
        </section>

        {/* 2. Key Highlights Banner (Quick Summary Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#1d1d1d] border border-[#2a2a2a] p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-success/40 transition-colors">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">7-Day Refund</h3>
              <p className="text-xs text-gray-400 mt-1">Full money-back for corrupted, missing, or misdescribed digital assets.</p>
            </div>
          </div>

          <div className="bg-[#1d1d1d] border border-[#2a2a2a] p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-success/40 transition-colors">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Instant Access</h3>
              <p className="text-xs text-gray-400 mt-1">Immediate secure downloads & license keys sent upon order completion.</p>
            </div>
          </div>

          <div className="bg-[#1d1d1d] border border-[#2a2a2a] p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-success/40 transition-colors">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Binding Negotiation</h3>
              <p className="text-xs text-gray-400 mt-1">Peer-to-peer accepted price offers are locked for 24 hours.</p>
            </div>
          </div>

          <div className="bg-[#1d1d1d] border border-[#2a2a2a] p-5 rounded-2xl flex flex-col justify-between space-y-3 hover:border-success/40 transition-colors">
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center text-success">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Royalty-Free</h3>
              <p className="text-xs text-gray-400 mt-1">Clear licensing terms for personal, commercial, and game projects.</p>
            </div>
          </div>
        </div>

        {/* 3. Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1d1d1d] border border-[#2a2a2a] p-3 rounded-2xl">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Policies' },
              { id: 'terms', label: 'Terms of Service' },
              { id: 'returns', label: 'Return & Refunds' },
              { id: 'licensing', label: 'Licensing' },
              { id: 'creators', label: 'Creator Terms' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-success text-black'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search policy terms..."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
            />
          </div>
        </div>

        {/* 4. Policy Sections Accordion List */}
        <div className="space-y-4">
          {filteredSections.length > 0 ? (
            filteredSections.map((section) => {
              const IconComponent = section.icon
              const isOpen = expandedSection === section.id || activeTab !== 'all' || searchQuery !== ''

              return (
                <div
                  key={section.id}
                  className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {section.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{section.summary}</p>
                      </div>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#2a2a2a]/60 text-sm leading-relaxed animate-in fade-in duration-200">
                      {section.content}
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <div className="text-center py-12 bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl space-y-3">
              <HelpCircle className="w-10 h-10 text-gray-500 mx-auto" />
              <h3 className="text-base font-bold">No Policy Found</h3>
              <p className="text-xs text-gray-400">No terms matching "{searchQuery}". Try searching for terms like "refund", "license", or "download".</p>
            </div>
          )}
        </div>

        {/* 5. Direct Support & Escalation Banner */}
        <div className="bg-gradient-to-r from-[#1d1d1d] via-[#1a2e22] to-[#1d1d1d] border border-success/30 rounded-3xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold text-white">Have Questions About Your Order or Refund?</h3>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Our support team is online 24/7 to resolve licensing queries, download glitches, or facilitate refund claims.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-success hover:bg-success/90 text-black font-bold text-xs rounded-xl transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Contact Support Team
            </Link>
            <Link
              to="/order-information"
              className="px-6 py-3 bg-[#121212] hover:bg-black text-white border border-[#2a2a2a] font-bold text-xs rounded-xl transition-all flex items-center gap-2"
            >
              View Order Information
              <ArrowRight className="w-4 h-4 text-success" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
