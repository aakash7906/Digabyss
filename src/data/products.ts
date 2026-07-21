export interface Product {
  id: string | number
  title: string
  description?: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  author?: string
  category?: string
  subcategorySlug?: string
  subtitle?: string
  discount?: string
  isHD?: boolean
}

export const sampleProducts: Product[] = [
  {
    id: 101,
    title: 'Cyberpunk UI Kit Pro Edition',
    description: 'Complete vector UI components, HUD elements, and customizable neon widgets for web and game development.',
    price: 29.99,
    originalPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    author: 'NeoSynth Studio',
    category: 'digital-assets',
    subcategorySlug: 'ui-kits'
  },
  {
    id: 102,
    title: '3D Sci-Fi Mech & Weapon Pack',
    description: 'High-poly 3D models with 4K PBR textures, fully rigged and ready for Unreal Engine and Unity.',
    price: 45.00,
    originalPrice: 65.00,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    author: 'Vortex 3D Lab',
    category: 'digital-assets',
    subcategorySlug: '3d-models'
  },
  {
    id: 103,
    title: 'Futuristic Display Typeface - KINETIC',
    description: 'Bold futuristic typography font family including TTF, OTF, and WebFont formats with 12 weights.',
    price: 18.50,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    author: 'TypeFoundry Co',
    category: 'digital-assets',
    subcategorySlug: 'fonts'
  },
  {
    id: 104,
    title: 'Minimalist Monoline Icon Set (500+)',
    description: 'Clean vector icons available in SVG, EPS, and PNG formats. Perfect for modern web and mobile apps.',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    author: 'DesignCraft',
    category: 'digital-assets',
    subcategorySlug: 'icons'
  },
  {
    id: 201,
    title: 'Synthwave & Retrowave Audio Collection',
    description: '8 royalty-free full synthwave tracks with stems and loops included for videos and stream background.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    author: 'Waveform Beats',
    category: 'media-productions',
    subcategorySlug: 'audio'
  },
  {
    id: 202,
    title: 'Cinematic Glitch Video Transitions Pack',
    description: 'Over 50+ Premiere Pro and DaVinci Resolve drag-and-drop video transition overlays in 4K resolution.',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    author: 'FX Motion Studio',
    category: 'media-productions',
    subcategorySlug: 'video-vfx'
  },
  {
    id: 203,
    title: 'Urban Cyberpunk Stock Photo Bundle',
    description: 'Collection of 40 ultra-high resolution night urban city stock photos with commercial licensing rights.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    author: 'Tokyo Lens',
    category: 'media-productions',
    subcategorySlug: 'photos'
  },
  {
    id: 301,
    title: 'Full-Stack React & Next.js Web Development',
    description: 'Custom responsive web application development with modern UI animation and backend integration.',
    price: 250.00,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
    author: 'DevNinja Agency',
    category: 'services',
    subcategorySlug: 'web-dev'
  },
  {
    id: 302,
    title: 'Custom Brand Identity & Logo Design',
    description: 'Professional brand design including logo mark, typography guidelines, and complete visual identity manual.',
    price: 180.00,
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    author: 'Studio Apex',
    category: 'services',
    subcategorySlug: 'design'
  },
  {
    id: 401,
    title: '(13x19) Rapture Retro Travel Poster',
    description: 'High quality matte art paper print of underwater retro city poster.',
    price: 7.83,
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    author: 'ArtHouse',
    category: 'posters-prints',
    subcategorySlug: 'retro-posters'
  },
  {
    id: 402,
    title: 'Neon Genesis Anime Art Print',
    description: 'Vibrant limited print featuring mech warrior aesthetic and Japanese calligraphy.',
    price: 14.50,
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    author: 'Otaku Prints',
    category: 'posters-prints',
    subcategorySlug: 'anime-manga'
  }
]

export const fetchProductsByCategory = async (
  category?: string,
  subcategorySlug?: string | null
): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 300))

  return sampleProducts.filter(product => {
    let matchesCategory = true
    let matchesSubcategory = true

    if (category && category !== 'all') {
      matchesCategory = product.category?.toLowerCase() === category.toLowerCase()
    }

    if (subcategorySlug && subcategorySlug !== 'all') {
      matchesSubcategory = product.subcategorySlug?.toLowerCase() === subcategorySlug.toLowerCase()
    }

    // If no exact match found for generic category, return all or category products
    return matchesCategory && matchesSubcategory
  })
}
