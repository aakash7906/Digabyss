import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ourProductsMenu, type MenuItem } from '@/components/OurProducts'
import { fetchProductsByCategory, type Product } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Star, ChevronRight, Filter, ShoppingBag, ArrowRight, Check } from 'lucide-react'

// Helper function to turn slugs into readable titles e.g. 'digital-assets' -> 'Digital Assets'
const formatSlugTitle = (slug?: string): string => {
  if (!slug) return ''
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
}

export default function ProductCategoryPage() {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>()
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { addToCart } = useCart()
  const [addedProductId, setAddedProductId] = useState<string | number | null>(null)

  // Find category object from menu definition
  const categoryObj = ourProductsMenu.find(
    (c: MenuItem) => c.path.toLowerCase() === `/product-category/${category?.toLowerCase()}`
  )

  // Human readable category title
  const categoryTitle = categoryObj ? categoryObj.name : formatSlugTitle(category)

  // Active subcategory slug
  const activeSubcategorySlug = subcategory && subcategory !== 'all' ? subcategory : null

  const subcategoryObj = categoryObj?.children?.find(
    (s: MenuItem) => s.path.toLowerCase() === `/product-category/${category?.toLowerCase()}/${activeSubcategorySlug?.toLowerCase()}`
  )
  const subcategoryTitle = subcategoryObj ? subcategoryObj.name : formatSlugTitle(activeSubcategorySlug || undefined)

  // Async data fetching from backend / Firebase
  useEffect(() => {
    let isMounted = true
    setIsLoading(true)
    setError(null)

    fetchProductsByCategory(category, activeSubcategorySlug)
      .then((data: Product[]) => {
        if (isMounted) {
          setProducts(data)
          setIsLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          console.error("Error fetching category products:", err)
          setError("Failed to load products. Please try again later.")
          setIsLoading(false)
        }
      })

    return () => {
      isMounted = false
    }
  }, [category, activeSubcategorySlug])

  return (
    <div className="bg-[#121212] text-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 pt-1 md:pt-8">
          <Link to="/" className="hover:text-success transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-400">Our Products</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            to={`/product-category/${category}`}
            className={`hover:text-success transition-colors ${!activeSubcategorySlug ? 'text-success font-semibold' : ''}`}
          >
            {categoryTitle}
          </Link>
          {activeSubcategorySlug && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-success font-semibold">{subcategoryTitle}</span>
            </>
          )}
        </nav>

        {/* Page Header */}
        <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-success/5 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="relative z-10 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-success">
              Marketplace Category
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              {activeSubcategorySlug ? `${categoryTitle} — ${subcategoryTitle}` : `${categoryTitle} Products`}
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl">
              Explore verified digital assets, media productions, and freelance services available to Buy, Sell, Trade, and Negotiate directly on Digabyss.
            </p>
          </div>
        </div>

        {/* Subcategory Pills / Filter Bar */}
        {categoryObj && categoryObj.children && categoryObj.children.length > 0 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1.5 shrink-0 mr-2">
              <Filter className="w-3.5 h-3.5 text-success" /> Filter Subcategories:
            </span>
            <Link
              to={`/product-category/${category}`}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                !activeSubcategorySlug
                  ? 'bg-success text-black shadow-lg shadow-success/20'
                  : 'bg-[#1d1d1d] text-gray-300 border border-[#2a2a2a] hover:border-success/50 hover:text-white'
              }`}
            >
              All {categoryTitle}
            </Link>

            {categoryObj.children.map((sub: MenuItem) => {
              const subSlug = sub.path.split('/').pop()
              const isSelected = activeSubcategorySlug?.toLowerCase() === subSlug?.toLowerCase()
              return (
                <Link
                  key={sub.path}
                  to={sub.path}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-success text-black shadow-lg shadow-success/20'
                      : 'bg-[#1d1d1d] text-gray-300 border border-[#2a2a2a] hover:border-success/50 hover:text-white'
                  }`}
                >
                  {sub.name}
                </Link>
              )
            })}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Loading State / Skeleton */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl overflow-hidden animate-pulse">
                <div className="aspect-video bg-[#252525]"></div>
                <div className="p-5 space-y-3">
                  <div className="h-3 bg-[#252525] rounded w-1/3"></div>
                  <div className="h-5 bg-[#252525] rounded w-3/4"></div>
                  <div className="h-3 bg-[#252525] rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          /* Product Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <div
                key={product.id}
                className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-success transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <Link to={`/shop`} className="block relative aspect-video overflow-hidden bg-black cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-success flex items-center gap-1 border border-white/10">
                      <Star className="w-3 h-3 fill-success" />
                      {product.rating}
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{product.author}</span>
                      <span className="uppercase tracking-wider font-semibold text-gray-500">
                        {product.subcategorySlug}
                      </span>
                    </div>

                    <Link to={`/shop`} className="block">
                      <h3 className="font-bold text-lg text-white group-hover:text-success transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer / Action */}
                <div className="p-5 pt-0 border-t border-[#2a2a2a]/50 mt-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-500 block">Price</span>
                    <span className="text-lg font-extrabold text-white">${product.price.toFixed(2)}</span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product)
                      setAddedProductId(product.id)
                      setTimeout(() => setAddedProductId(null), 2000)
                    }}
                    className="px-4 py-2 bg-success hover:bg-success/90 text-black text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                  >
                    {addedProductId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-black" />
                        Added!
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5" />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-12 text-center space-y-4">
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-gray-500 mx-auto border border-[#2a2a2a]">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">No products found</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              There are currently no items listed under <strong className="text-white">{activeSubcategorySlug ? subcategoryTitle : categoryTitle}</strong>. New digital assets and productions are added daily.
            </p>
            <div className="pt-2">
              <Link
                to={`/product-category/${category}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-success text-black font-bold text-xs rounded-full hover:bg-success/90 transition-all"
              >
                View all {categoryTitle} products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
