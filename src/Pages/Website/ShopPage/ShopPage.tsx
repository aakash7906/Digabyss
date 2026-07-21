import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star, ArrowRight, Eye, X, Check } from 'lucide-react'
import { useCart, type Product as CartProduct } from '@/Pages/context/CartContext'

interface Product {
  id: number
  title: string
  subtitle?: string
  description?: string
  price: number
  originalPrice?: number
  discount?: string
  image: string
  category: string
  rating: number
  isHD?: boolean
}

export default function ShopPage() {
  const { addToCart } = useCart()
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [addedItemId, setAddedItemId] = useState<number | string | null>(null)

  // Modals state
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const categories = [
    { name: 'All', count: 3352 },
    { name: 'Anime & Manga', count: 124 },
    { name: 'Posters & Prints', count: 89 },
    { name: 'Music Albums', count: 56 },
    { name: 'Fine Art & Decor', count: 43 },
  ]

  const baseProducts = [
    { title: '(13x19) Rapture Retro Travel Poster', price: 7.83, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/36c7e26f18a7.jpg', category: 'Posters & Prints', rating: 4.6 },
    { title: '(24x36) Breaking Bad - I am the one who knocks Poster', price: 4.25, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/d738577cd666.jpg', category: 'Posters & Prints', rating: 4.9 },
    { title: '(MD-HelenF3) Realistic Female Mannequin Head', subtitle: 'Flesh Tone Pretty make-up', price: 24.99, originalPrice: 29.99, discount: '17%', image: 'https://www.digabyss.com/wp-content/uploads/2014/07/664e144d5ad5.jpg', category: 'Fine Art & Decor', rating: 4.5 },
    { title: "(What's The Story) Morning Glory? (Remastered-LP)", price: 34.98, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/a19750190846.jpg', category: 'Music Albums', rating: 4.8 },
    { title: '[Featurette] Salt - The Ultimate Female Action Hero', price: 0.00, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/b11afe32c582.jpg', category: 'Fine Art & Decor', rating: 4.7 },
    { title: '"Now" - Chicago XXXVI', price: 10.00, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/0071b92ca050.jpg', category: 'Music Albums', rating: 4.6 },
    { title: '+', price: 9.49, image: 'https://www.digabyss.com/wp-content/uploads/2014/07/b7005681e6d7.jpg', category: 'Music Albums', rating: 4.9 },
  ]

  // Generate ~3000 optimized items to simulate a large e-commerce catalog
  const initialProducts: Product[] = Array.from({ length: 3000 }, (_, i) => {
    const base = baseProducts[i % baseProducts.length]
    return {
      ...base,
      id: i + 1,
      title: `${base.title} ${i > 6 ? `(Vol. ${Math.floor(i / 7) + 1})` : ''}`,
    }
  })

  const ITEMS_PER_PAGE = 24

  // Filter, Search & Sort Logic
  const filteredProducts = initialProducts.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.subtitle && p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return a.id - b.id // default
  })

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const pagedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const generatePagination = () => {
    let pages: (number | string)[] = []
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, '...', totalPages]
      } else if (currentPage >= totalPages - 2) {
        pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
      }
    }
    return pages
  }

  const handleAddToCart = (product: Product) => {
    const cartProd: CartProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating,
      category: product.category,
      subtitle: product.subtitle,
      discount: product.discount,
      isHD: product.isHD
    }
    addToCart(cartProd)
    setAddedItemId(product.id)
    setTimeout(() => {
      setAddedItemId(null)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans antialiased pb-12 pt-4">

      {/* 1. Header Hero Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 text-white">
          The Market Place <span className="text-success text-[0.6em] align-baseline">&copy;</span>
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mb-4">
          Discover original anime designs, fine art prints, retro travel posters, music records, and high-definition creative content.
        </p>

        {/* Live Search Input */}
        <div className="w-full max-w-md relative">
          <input
            type="text"
            placeholder="Search items in market..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            className="w-full bg-transparent border border-white/20 rounded-xl px-5 py-2.5 text-sm focus:outline-none focus:border-success focus:ring-1 focus:ring-success transition-all placeholder-gray-500"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </section>

      {/* 2. Interactive Navigation Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-4 pb-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategory(cat.name)
                setCurrentPage(1)
              }}
              className={`px-4 py-2 rounded-xl font-bold text-[10px] shrink-0 tracking-wider transition-all cursor-pointer border uppercase ${activeCategory === cat.name
                  ? 'bg-success text-black border-success'
                  : 'bg-transparent border-white/20 text-gray-300 hover:border-success hover:text-white'
                }`}
            >
              {cat.name.toUpperCase()}
              <span className={`ml-2 text-[10px] font-semibold ${activeCategory === cat.name ? 'text-black/60' : 'text-gray-500'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* 3. Catalog Utility Top Bar (Pagination state details + Sorting) */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-[11px] font-semibold text-gray-400">
          Showing {pagedProducts.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)} of {filteredProducts.length} results
        </div>

        <div className="flex items-center gap-3">
          <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-white/20 text-gray-300 text-xs font-semibold rounded-xl px-4 py-2 focus:outline-none focus:border-success transition-colors cursor-pointer"
          >
            <option value="default">Default sorting</option>
            <option value="popularity">Sort by popularity</option>
            <option value="rating">Sort by average rating</option>
            <option value="latest">Sort by latest</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
          </select>
        </div>
      </section>

      {/* 4. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pagedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden hover:border-success/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Product Visual Frame */}
              <div className="relative aspect-square overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay Tags & Badges */}
                {product.discount && (
                  <span className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-wider bg-[#1d63ed] text-white px-2.5 py-1 rounded-md shadow-lg">
                    -{product.discount}
                  </span>
                )}
                {!product.discount && product.isHD && (
                  <span className="absolute top-3 left-3 text-[11px] font-extrabold uppercase tracking-wider bg-success text-black px-2.5 py-1 rounded-md shadow-lg">
                    HD
                  </span>
                )}

                {/* Centered Hover Action Circular Buttons (Matching Reference Image) */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {/* Teal Add to Cart Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(product)
                    }}
                    className="w-12 h-12 rounded-full bg-success text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    aria-label="Add to cart"
                    title="Add to Cart"
                  >
                    {addedItemId === product.id ? (
                      <Check className="w-5 h-5 text-black animate-in zoom-in" />
                    ) : (
                      <ShoppingBag className="w-5 h-5 text-black" />
                    )}
                  </button>

                  {/* Dark Quick View Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setQuickViewProduct(product)
                    }}
                    className="w-12 h-12 rounded-full bg-[#2a2a2a]/90 border border-white/20 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    aria-label="Quick view"
                    title="Quick View"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Product Metadata Info */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{product.category}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-gray-200">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm text-success group-hover:text-success transition-colors leading-snug line-clamp-2">
                    {product.title}
                  </h3>
                  {product.subtitle && (
                    <p className="text-[12px] text-gray-400 leading-normal line-clamp-2">
                      {product.subtitle}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#2e2e2e]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-success">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {pagedProducts.length === 0 && (
            <div className="col-span-full py-16 text-center text-gray-500 text-sm">
              No products found matching your search.
            </div>
          )}
        </div>
      </section>

      {/* 5. Pagination */}
      {totalPages > 1 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center pb-12">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 select-none [&::-webkit-scrollbar]:hidden">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 h-9 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center justify-center uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            {generatePagination().map((num, idx) => (
              num === '...' ? (
                <span key={`dots-${idx}`} className="text-gray-600 text-xs px-1 font-bold shrink-0">...</span>
              ) : (
                <button
                  key={`page-${num}`}
                  onClick={() => setCurrentPage(num as number)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center justify-center ${currentPage === num
                      ? 'bg-success text-black shadow-lg font-black'
                      : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white'
                    }`}
                >
                  {num}
                </button>
              )
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 h-9 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 flex items-center justify-center uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* 6. CTA Footer Register Area */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#1d1d1d]/40 border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-success/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Do You Have Creative Files to Sell?</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">
            Join the DIGABYSS creative economy. Publish your digital audio rhythms, vector arts, game assets, or code packages and negotiate deals instantly.
          </p>
          <Link
            to="/login-signup"
            className="inline-flex items-center gap-2 px-6 py-3 bg-success hover:bg-success/80 text-black font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02]"
          >
            Start Selling Assets
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick View Modal Overlay */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1d1d1d] border border-white/10 rounded-2xl w-full max-w-xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col md:flex-row gap-6 mt-4">
              <div className="w-full md:w-1/2 aspect-square rounded-xl overflow-hidden bg-black shrink-0">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-black bg-success/10 text-success border border-success/20 px-2 py-0.5 rounded uppercase">
                      {quickViewProduct.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span className="font-bold text-gray-300">{quickViewProduct.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-success leading-snug">{quickViewProduct.title}</h3>
                  {quickViewProduct.description && (
                    <p className="text-xs text-gray-400 leading-relaxed">{quickViewProduct.description}</p>
                  )}
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4 mt-6">
                  <span className="text-2xl font-extrabold text-success">${quickViewProduct.price.toFixed(2)}</span>
                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct)
                      setQuickViewProduct(null)
                    }}
                    className="px-5 py-2.5 bg-success text-black font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-success/90 transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <ShoppingBag className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
