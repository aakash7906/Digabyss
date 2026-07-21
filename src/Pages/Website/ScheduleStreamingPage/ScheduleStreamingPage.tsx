import { useState, type FormEvent } from 'react'
import { Calendar, Video, Clock, Radio, Users, Check, ArrowRight, Sparkles } from 'lucide-react'

interface StreamEvent {
  id: string
  title: string
  host: string
  category: string
  date: string
  time: string
  price: string
  viewers: number
  thumbnail: string
}

export default function ScheduleStreamingPage() {
  const [streamTitle, setStreamTitle] = useState('')
  const [category, setCategory] = useState('Audio & Music')
  const [streamDate, setStreamDate] = useState('')
  const [streamTime, setStreamTime] = useState('')
  const [accessType, setAccessType] = useState('Free')
  const [ticketPrice, setTicketPrice] = useState('')
  const [description, setDescription] = useState('')
  const [isScheduled, setIsScheduled] = useState(false)

  const upcomingStreams: StreamEvent[] = [
    {
      id: '1',
      title: 'Live Synth Pop Beatmaking & Vocal Mixing Session',
      host: 'Jérï Mitchell',
      category: 'Audio & Music',
      date: 'Today',
      time: '8:00 PM EST',
      price: 'Free Access',
      viewers: 1420,
      thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '2',
      title: 'Digital Concept Art Speedpaint & Q&A',
      host: 'Elena Rostova',
      category: 'Digital Art',
      date: 'Tomorrow',
      time: '6:00 PM EST',
      price: '$5.00 Ticket',
      viewers: 890,
      thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: '3',
      title: 'Indie Game Alpha Playtest & Code Review',
      host: 'Vector Studios',
      category: 'Indie Gaming',
      date: 'July 24',
      time: '9:30 PM EST',
      price: 'Negotiate Access',
      viewers: 2150,
      thumbnail: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800'
    }
  ]

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!streamTitle || !streamDate || !streamTime) return
    setIsScheduled(true)
    setTimeout(() => {
      setIsScheduled(false)
      setStreamTitle('')
      setStreamDate('')
      setStreamTime('')
      setDescription('')
    }, 4000)
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen pt-4 pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">

        {/* Hero Section */}
        <section className="text-center space-y-4 max-w-3xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-success/10 border border-success/20 text-success font-bold text-xs uppercase tracking-widest mb-2">
            <Radio className="w-3.5 h-3.5 animate-pulse" /> Live Broadcast Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Schedule Digital <span className="text-success">Streaming</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Broadcast live music performances, digital art speedpaints, game playtests, or premiere videos directly to your followers on Digabyss.
          </p>
        </section>

        {/* Stream Scheduler Form & Live Status */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 md:p-8 space-y-6 shadow-xl">
            <div className="border-b border-[#2e2e2e] pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-success" />
                  Schedule a Stream Event
                </h2>
                <p className="text-xs text-gray-400 mt-1">Fill in details to generate your streaming RTMP server key and event landing page.</p>
              </div>
            </div>

            {isScheduled && (
              <div className="bg-success/15 border border-success/40 rounded-xl p-4 text-success text-xs font-bold flex items-center gap-3 animate-in fade-in duration-300">
                <Check className="w-5 h-5 shrink-0" />
                <span>Stream Broadcast Scheduled Successfully! Your event link and RTMP stream key have been generated.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Stream Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Live Acoustic Beatmaking Session & Album Premiere"
                  value={streamTitle}
                  onChange={(e) => setStreamTitle(e.target.value)}
                  className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success focus:ring-1 focus:ring-success transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-success transition-all cursor-pointer"
                  >
                    <option value="Audio & Music">Audio & Music</option>
                    <option value="Digital Art">Digital Art & Illustration</option>
                    <option value="Indie Gaming">Indie Gaming & Devlog</option>
                    <option value="Literature">Literature & Story Reading</option>
                    <option value="Video Premiere">Video Premiere</option>
                    <option value="Software Workshop">Software & Coding Workshop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Access Type *
                  </label>
                  <select
                    value={accessType}
                    onChange={(e) => setAccessType(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-success transition-all cursor-pointer"
                  >
                    <option value="Free">Free Access for Followers</option>
                    <option value="Paid Ticket">Paid Ticket Pass</option>
                    <option value="Negotiate">Negotiate Access Terms</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Broadcast Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={streamDate}
                    onChange={(e) => setStreamDate(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-success transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={streamTime}
                    onChange={(e) => setStreamTime(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white focus:outline-none focus:border-success transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Ticket Price ($)
                  </label>
                  <input
                    type="text"
                    placeholder="0.00"
                    disabled={accessType === 'Free'}
                    value={ticketPrice}
                    onChange={(e) => setTicketPrice(e.target.value)}
                    className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success disabled:opacity-40 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                  Stream Agenda / Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your broadcast agenda, topics, or exclusive perks for attendees..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#121212] border border-[#2e2e2e] rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-success hover:bg-success/90 text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                Schedule Stream Event <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Info & Live Guidelines Panel (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-success" />
                Live Broadcast Features
              </h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                  <span><strong>Full Ultra-HD RTMP Streaming:</strong> Compatible with OBS Studio, Streamlabs, and vMix.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                  <span><strong>Monetization & Tickets:</strong> Charge ticket admission or let attendees negotiate price directly.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                  <span><strong>Instant VOD Replay:</strong> Automatically save live broadcasts to your profile library for ongoing sales.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Video className="w-4 h-4 text-success" />
                Recommended Stream Settings
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-[#121212] p-3 rounded-xl border border-[#2e2e2e]">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Max Resolution</span>
                  <span className="font-bold text-white">1080p (60 FPS)</span>
                </div>
                <div className="bg-[#121212] p-3 rounded-xl border border-[#2e2e2e]">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Bitrate</span>
                  <span className="font-bold text-white">6000 Kbps</span>
                </div>
                <div className="bg-[#121212] p-3 rounded-xl border border-[#2e2e2e]">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Audio Codec</span>
                  <span className="font-bold text-white">AAC 320 Kbps</span>
                </div>
                <div className="bg-[#121212] p-3 rounded-xl border border-[#2e2e2e]">
                  <span className="text-gray-400 block text-[10px] uppercase font-bold">Keyframe Interval</span>
                  <span className="font-bold text-white">2 Seconds</span>
                </div>
              </div>
            </div>

          </div>

        </section>

        {/* Upcoming Scheduled Streams Grid */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2e2e2e] pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Upcoming Scheduled Live Streams</h2>
              <p className="text-xs text-gray-400">Discover upcoming broadcasts and live events from verified creators.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl overflow-hidden hover:border-success/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                    />
                    <div className="absolute top-3 left-3 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-lg">
                      <Radio className="w-3 h-3 animate-pulse" /> Live Event
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md text-xs font-bold text-gray-300 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-success" />
                      {stream.date} · {stream.time}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span className="text-success font-bold uppercase tracking-wider text-[10px]">{stream.category}</span>
                      <span className="flex items-center gap-1 text-gray-400 text-[11px]">
                        <Users className="w-3.5 h-3.5 text-gray-500" /> {stream.viewers.toLocaleString()} Attending
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-success transition-colors line-clamp-2">
                      {stream.title}
                    </h3>
                    <p className="text-xs text-gray-400">Hosted by <strong className="text-white">{stream.host}</strong></p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-[#2e2e2e]/50 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-success bg-success/10 px-2.5 py-1 rounded-lg border border-success/20">
                    {stream.price}
                  </span>
                  <button className="px-4 py-2 bg-success hover:bg-success/90 text-black text-xs font-bold rounded-lg transition-all cursor-pointer">
                    Set Reminder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
