import { Link } from 'react-router-dom'
import { useState, useRef } from 'react'
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Music,
  Image as ImageIcon,
  BookOpen,
  Gamepad,
  Video,
  Cpu,
} from 'lucide-react'

interface TopSlide {
  title: string
  category: string
  image: string
  artist: string
  year: string
  desc: string
}

interface CarouselCard {
  src: string
  bg: string
  alt: string
  label: string
}

export default function HomePage() {
  const [sliderIndex, setSliderIndex] = useState<number>(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollDeals = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const card = container.firstElementChild as HTMLElement | null
      if (!card) return
      const scrollAmount = card.clientWidth + 18 // 18px for gap-4.5

      if (direction === 'left') {
        // If at the beginning, wrap to end (last card)
        if (container.scrollLeft <= 5) {
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        }
      } else {
        // If at the end, wrap to beginning (first card)
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 5) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      }
    }
  }

  // Top slider items matching "Jeri - Alive" and others
  const topSlides: TopSlide[] = [
    {
      title: "Jérï - Alive",
      category: "Audio / Pop Album",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      artist: "Jérï Mitchell",
      year: "2026",
      desc: "Alive is the premium breakout audio album of the season, showcasing raw, independent vocals and synth pop rhythms."
    },
    {
      title: "Neon Dreams - EP",
      category: "Audio / Synthwave",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800",
      artist: "Vector Prime",
      year: "2026",
      desc: "Experience high-energy instrumental beats, nostalgic textures, and commercial license ready rhythms."
    }
  ]

  // Carousel card data — 50 cards with correct image URLs and extensions
  const carouselCards: CarouselCard[] = (() => {
    const pngSlides = new Set<number>([8, 9, 10, 11, 12])
    const specialBgs: Record<number, string> = { 1: 'bg-[#e9e6ff]', 2: 'bg-white', 3: 'bg-[#990085]' }
    // Card-to-slide mapping: cards 1-3 → slides 1-3, cards 4-5 → slide 5, cards 6-50 → slides 6-50
    const slideNumbers = [1, 2, 3, 5, 5, ...Array.from({ length: 45 }, (_, i) => i + 6)]

    const getLabel = (num: number): string => {
      if ([1, 2, 3, 4, 5, 10, 15, 16, 17, 18, 19, 20, 29].includes(num)) return "Digital Audio";
      if ([6, 7, 11, 14, 30, 32, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50].includes(num)) return "Digital Art";
      if ([8, 9, 21, 23, 24, 25, 26, 28].includes(num)) return "Digital Movie";
      if ([27, 33].includes(num)) return "Digital Literature";
      if ([12, 13].includes(num)) return "Digital Game";
      return "";
    };

    return slideNumbers.map((num, i) => {
      const ext = pngSlides.has(num) ? 'png' : 'jpg'
      const padded = String(num).padStart(2, '0')
      const cardNumber = i + 1;
      return {
        src: `https://www.digabyss.com/carousel/mobile/photos/slide-${padded}.${ext}`,
        bg: specialBgs[num] || 'bg-black',
        alt: i < 3 ? ['Audio', 'Art', 'Games'][i] : 'Freelancers',
        label: getLabel(cardNumber)
      }
    })
  })()

  return (
    <div className="-mt-16 sm:-mt-20 md:-mt-28 -mb-12 pt-16 sm:pt-20 md:pt-28 pb-12 bg-[#121212] text-white font-sans antialiased min-h-screen overflow-hidden">
      {/* 1. Header Album Slider (Alive Album) */}
      {false && (
        <section className="max-w-4xl mx-auto px-4 pt-6 pb-4">
          <div className="text-center mb-3">
            <span className="text-[11px] font-bold tracking-widest text-secondary uppercase border-b-2 border-accent pb-0.5">
              Featured Audio Album
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border shadow-md aspect-[1.8/1] md:aspect-[2.2/1] bg-card group">
            {/* Main Album Image */}
            <img
              src={topSlides[sliderIndex].image}
              alt={topSlides[sliderIndex].title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-[1.02] transition-transform duration-700"
            />

            {/* Jeri Alive Styled Signature Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-white font-serif tracking-widest text-2xl uppercase font-bold drop-shadow-md">
                  {topSlides[sliderIndex].artist.split(' ')[0]}
                </span>
                <span className="text-[10px] bg-accent text-primary font-extrabold px-2.5 py-0.5 rounded-full uppercase shadow">
                  Buy / Negotiate
                </span>
              </div>

              <div className="space-y-1">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide text-white drop-shadow-lg font-serif italic">
                  {topSlides[sliderIndex].title.split(' - ')[1] || "Alive"}
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground max-w-md drop-shadow line-clamp-2">
                  {topSlides[sliderIndex].desc}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setSliderIndex((prev: number) => (prev === 0 ? topSlides.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-accent text-white hover:text-primary transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSliderIndex((prev: number) => (prev + 1) % topSlides.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 hover:bg-accent text-white hover:text-primary transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      {/* 2. Deals/Categories Grid (Watch Out for This) */}
      <section className="w-full px-6 md:px-12 lg:px-20 py-8 relative">


        {/* Navigation Arrows outside the grid */}
        <button onClick={() => scrollDeals('left')} className="hidden md:flex absolute left-6 md:left-8 top-[55%] -translate-y-1/2 p-2 bg-transparent hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors z-10">
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button onClick={() => scrollDeals('right')} className="hidden md:flex absolute right-6 md:right-8 top-[55%] -translate-y-1/2 p-2 bg-transparent hover:bg-white/10 text-gray-400 hover:text-white rounded-full transition-colors z-10">
          <ChevronRight className="w-8 h-8" />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4.5 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

          {carouselCards.map((card, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[45vw] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] shrink-0 snap-start flex flex-col gap-3 cursor-pointer group"
            >
              <div className={`relative overflow-hidden rounded-2xl w-full aspect-[3/4] ${card.bg}`}>
                <img
                  src={card.src}
                  alt={card.alt}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {card.label && (
                <div className="text-center px-2">
                  <span className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase">
                    {card.label}
                  </span>
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* 3. The Market Place Headline */}
      <div className="bg-[#121212] text-white">
        <section className="max-w-7xl mx-auto px-4 pt-6 md:pt-8 pb-12 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans mb-10">
            The Market Place{' '}
            <br className="sm:hidden" />
            For Creative Minds <span className="text-success text-[0.6em] align-baseline">&copy;</span>
          </h1>

          <section className="w-full px-4 py-8">
            <div className="max-w-4xl mx-auto bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-8 text-center">
              <div className="mx-auto space-y-4 max-w-3xl">
                <h3 className="font-bold text-2xl md:text-3xl text-white">BUY SELL TRADE NEGOTIATE</h3>
                <p className="text-sm md:text-base text-gray-400 mx-auto max-w-2xl">
                  Click A Category Below To Discover How You Can Earn Money Using DIGABYSS.COM
                </p>
                <p className="text-sm md:text-base text-gray-400 uppercase tracking-[0.2em] mx-auto max-w-2xl">
                  BUY SELL TRADE NEGOTIATE
                </p>
              </div>
            </div>
          </section>

        </section>

        {/* 4. Media Categories Listing */}
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Category: Audio */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Audio Productions &raquo;</span>
                <Music className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/audio02-300x196.jpg"
                  alt="Audio thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Audio Productions</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Do you create sounds that are unique? Then you can sell them here at DIGABYSS.COM.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/audio-production" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Category: Digital Art */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Art Store &raquo;</span>
                <ImageIcon className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/digital-art1-300x196.jpg"
                  alt="Art thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Digital Art & Literature</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Excellent Creations of Digital Art? Are You a Writer With Unlimited Imagination? Show the World What You Have to Offer.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/digital-art" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>


            {/* Category: Games */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Game Productions &raquo;</span>
                <Gamepad className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/game.png"
                  alt="Games thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Game Productions</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Gamers love new games. You create the product... The players will let all know what masterpiece you have developed.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/games-production" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Category: Movies & Videos */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Video Productions &raquo;</span>
                <Video className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/video.png"
                  alt="Video thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Video Productions</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Make your awesome visual creations be seen around the world.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/video-production" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Category: Software */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Software Architect &raquo;</span>
                <Cpu className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/prog.jpg"
                  alt="Software thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Software Architect</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    New useful software applications are in great demand. You code the applications and demonstrate the fantastic use all over the planet.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/software" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Category: Register & Advertise */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Advertise Hub &raquo;</span>
                <BookOpen className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/artist.jpg"
                  alt="Advertise thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Register & Advertise</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    as an Independent Agent, Artist, Manager, Model, Musician, Actor, Writer, Producer, Sound Technician Engineer, Videographer, Make Up Artist, Photographer or Lighting Technician.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/register-advertise" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>



            {/* Category: Register & Hire */}
            <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-5 hover:border-success transition-all space-y-4 group">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-gray-400 group-hover:text-white transition-colors">Register & Hire &raquo;</span>
                <Music className="w-5 h-5 text-success" />
              </div>
              <div className="flex gap-4 items-start">
                <img
                  src="https://www.digabyss.com/wp-content/uploads/2014/01/video-sexy-11-300x2251.jpg"
                  alt="Audio thumbnail"
                  className="w-20 h-20 rounded-lg object-cover bg-[#2a2a2a] shrink-0"
                />
                <div className="space-y-1.5">
                  <h3 className="font-bold text-lg text-white">Register & Hire</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    A "work for hire" Agent, Artist, Manager, Model, Musician, Actor, Writer, Producer, Sound Technician, Videographer or Photographer.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-[#2a2a2a] flex justify-end mt-2">
                <Link to="/register-hire" className="text-xs font-bold text-success hover:text-white transition-colors flex items-center gap-1">
                  <span>Learn More Watch Video</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Promotional Poster Banners */}
        <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Comedy Nights */}
          <div className="relative rounded-xl overflow-hidden aspect-[1.5/1] lg:aspect-auto lg:h-[300px] border border-[#2a2a2a] bg-[#1d1d1d] group">
            <img
              src="https://www.digabyss.com/wp-content/uploads/2014/01/comedy.jpg"
              alt="Comedy nights"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="self-start text-[10px] tracking-widest font-bold uppercase bg-success text-black px-3 py-1 rounded mb-3">
                Diglevision Originals
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                COMEDY NIGHTS
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                Stream raw, independent stand-up specials from creators around the globe. Buy, Sell, and Negotiate content.
              </p>
            </div>
          </div>

          {/* The Creative Mind */}
          <div className="relative rounded-xl overflow-hidden aspect-[1.5/1] lg:aspect-auto lg:h-[300px] border border-[#2a2a2a] bg-[#1d1d1d] group">
            <img
              src="https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800"
              alt="Creative Mind"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="self-start text-[10px] tracking-widest font-bold uppercase bg-success text-black px-3 py-1 rounded mb-3">
                Digabyss Exclusive
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                THE CREATIVE MIND
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                Explore the inner worlds of independent creatives and discover their artistic journeys.
              </p>
            </div>
          </div>

          {/* Game Night */}
          <div className="relative rounded-xl overflow-hidden aspect-[1.5/1] lg:aspect-auto lg:h-[300px] border border-[#2a2a2a] bg-[#1d1d1d] group">
            <img
              src="https://www.digabyss.com/wp-content/uploads/2014/01/game.png"
              alt="Game Night"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent p-6 flex flex-col justify-end text-white">
              <span className="self-start text-[10px] tracking-widest font-bold uppercase bg-success text-black px-3 py-1 rounded mb-3">
                Gaming Hub
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                GAME NIGHT
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-2">
                Find and trade indie games from talented developers worldwide. Your next favorite game is here.
              </p>
            </div>
          </div>

        </section>

        {/* Verified Top Seller */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://www.digabyss.com/wp-content/uploads/2014/01/Topseller.jpg"
              alt="Verified Top Seller"
              className="w-20 h-20 rounded-xl object-cover bg-[#2a2a2a] shrink-0"
            />
            <div className="text-center sm:text-left space-y-2">
              <h3 className="font-bold text-xl md:text-2xl text-white">Verified Top Seller Program</h3>
              <p className="text-sm text-gray-400 max-w-lg">
                We reward independent creators who maintain highly-rated transactions. Earn the top seller stamp today and boost your visibility.
              </p>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}
