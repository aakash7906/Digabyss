export default function ContactPage() {
  return (
    <div className="-mt-28 -mb-12 min-h-screen bg-[#0d0e12] text-white pt-44 pb-28 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

        {/* Left Column (Form) */}
        <div className="lg:col-span-7 flex flex-col pt-8">
          <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase mb-8">Contact</span>
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium mb-8 text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.03em" }}>
            Say something.
          </h1>
          <p className="text-[#a1a1aa] text-lg md:text-[1.35rem] mb-16 max-w-xl leading-relaxed">
            Commissions, licensing, exhibitions, or a quiet conversation about the work — the door is open.
          </p>

          <form className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-3">
              <label className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Name</label>
              <input type="text" placeholder="Your name" className="bg-[#14151a] border border-[#27272a] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#52525b] transition-colors placeholder-[#52525b] text-base" />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Email</label>
              <input type="email" placeholder="you@studio.com" className="bg-[#14151a] border border-[#27272a] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#52525b] transition-colors placeholder-[#52525b] text-base" />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Subject</label>
              <input type="text" placeholder="Commission, licensing, other..." className="bg-[#14151a] border border-[#27272a] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#52525b] transition-colors placeholder-[#52525b] text-base" />
            </div>

            <div className="flex flex-col space-y-3">
              <label className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Message</label>
              <textarea placeholder="Take your time." rows={6} className="bg-[#14151a] border border-[#27272a] rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#52525b] transition-colors resize-none placeholder-[#52525b] text-base"></textarea>
            </div>

            <div className="pt-4">
              <button type="button" className="bg-white text-black hover:bg-gray-200 transition-colors font-medium rounded-full px-8 py-3.5 text-[15px]">
                Send message
              </button>
            </div>
          </form>
        </div>

        {/* Right Column (Info) */}
        <div className="lg:col-span-5 flex flex-col space-y-10 lg:pt-56">

          <div className="flex flex-col space-y-4 pb-8 border-b border-[#27272a]">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">General</span>
            <a href="mailto:hello@digabyss.com" className="text-white hover:text-gray-300 transition-colors text-lg">hello@digabyss.com</a>
          </div>

          <div className="flex flex-col space-y-4 pb-8 border-b border-[#27272a]">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Commissions</span>
            <a href="mailto:studio@digabyss.com" className="text-white hover:text-gray-300 transition-colors text-lg">studio@digabyss.com</a>
          </div>

          <div className="flex flex-col space-y-4 pb-8 border-b border-[#27272a]">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Licensing</span>
            <a href="mailto:licensing@digabyss.com" className="text-white hover:text-gray-300 transition-colors text-lg">licensing@digabyss.com</a>
          </div>

          <div className="flex flex-col space-y-4 pb-8 border-b border-[#27272a]">
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#6b7280] uppercase">Response</span>
            <span className="text-white text-lg">Usually within 3 working days</span>
          </div>

        </div>

      </div>
    </div>
  )
}
