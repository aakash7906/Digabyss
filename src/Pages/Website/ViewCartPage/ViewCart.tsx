import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '@/Pages/context/CartContext'
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Tag,
  Check,
  ArrowRight
} from 'lucide-react'

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartSubtotal,
  } = useCart()

  const [promoCode, setPromoCode] = useState<string>('')
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0) // percentage e.g. 10 for 10%
  const [promoError, setPromoError] = useState<string>('')
  const [promoSuccess, setPromoSuccess] = useState<string>('')

  const subtotal = getCartSubtotal()
  const discountAmount = (subtotal * appliedDiscount) / 100
  const finalTotal = subtotal - discountAmount

  const handleApplyPromo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPromoError('')
    setPromoSuccess('')

    const code = promoCode.trim().toUpperCase()
    if (code === 'DIGABYSS10' || code === 'CREATOR10') {
      setAppliedDiscount(10)
      setPromoSuccess('10% Promo Code Applied!')
    } else if (code === 'VIP20') {
      setAppliedDiscount(20)
      setPromoSuccess('20% VIP Discount Applied!')
    } else {
      setPromoError('Invalid promo code. Try "DIGABYSS10"')
    }
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-8">

        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 pt-2 md:pt-8">
          <Link to="/" className="hover:text-success transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
          <span className="text-success font-semibold">Shopping Cart</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2a2a2a] pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-success" />
              Your Shopping Cart
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Review your selected digital assets, audio tracks, and creative services before checkout.
            </p>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
            >
              <Trash2 className="w-4 h-4" /> Clear All Items
            </button>
          )}
        </div>

        {/* Cart Content */}
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-3xl p-12 text-center space-y-5 max-w-lg mx-auto my-12">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-gray-500 mx-auto border border-[#2a2a2a]">
              <ShoppingBag className="w-10 h-10 text-gray-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Your Cart is Empty</h3>
              <p className="text-gray-400 text-sm">
                Looks like you haven't added any digital assets or products to your cart yet.
              </p>
            </div>
            <div className="pt-3">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-success hover:bg-success/90 text-black font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-lg hover:scale-105"
              >
                Explore Marketplace <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Item List */}
            <div className="lg:col-span-8 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center gap-5 hover:border-success/40 transition-colors"
                >
                  {/* Thumbnail */}
                  <Link
                    to={`/shop/product/${item.id}`}
                    className="w-24 h-24 rounded-xl overflow-hidden bg-black shrink-0 relative border border-white/5"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 space-y-1 text-center sm:text-left w-full">
                    {item.category && (
                      <span className="text-[10px] font-bold text-success uppercase tracking-wider block">
                        {item.category}
                      </span>
                    )}
                    <Link
                      to={`/shop/product/${item.id}`}
                      className="font-bold text-white text-base hover:text-success transition-colors line-clamp-1 block"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-gray-400 font-semibold">
                      Unit Price: ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-black border border-[#2a2a2a] rounded-xl px-3 py-1.5">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-sm font-bold w-6 text-center text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right shrink-0 min-w-[90px]">
                    <span className="text-xs text-gray-500 block uppercase font-bold text-[9px]">Total</span>
                    <span className="text-lg font-black text-success">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-400 transition-colors p-2 cursor-pointer"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="pt-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-success transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-3xl p-6 md:p-8 space-y-6 sticky top-28">
                <h3 className="text-xl font-bold text-white border-b border-[#2a2a2a] pb-4">
                  Order Summary
                </h3>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="space-y-2">
                  <label className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-success" /> Have a Promo Code?
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. DIGABYSS10)"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-black border border-[#2a2a2a] rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none focus:border-success"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-[11px] text-red-400 font-semibold">{promoError}</p>}
                  {promoSuccess && (
                    <p className="text-[11px] text-success font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> {promoSuccess}
                    </p>
                  )}
                </form>

                {/* Cost Breakdown */}
                <div className="space-y-3 pt-4 border-t border-[#2a2a2a] text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-semibold text-white">${subtotal.toFixed(2)}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Discount ({appliedDiscount}%)</span>
                      <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-400">
                    <span>Digital Asset Delivery</span>
                    <span className="font-semibold text-success uppercase text-xs">Free / Instant</span>
                  </div>

                  <div className="flex justify-between text-lg font-black text-white pt-4 border-t border-[#2a2a2a]">
                    <span>Total Amount</span>
                    <span className="text-success">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout Action */}
                <button className="w-full py-4 bg-success hover:bg-success/90 text-black font-extrabold text-sm uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-lg shadow-success/10 flex items-center justify-center gap-2 hover:scale-[1.02]">
                  Proceed to Checkout <ArrowRight className="w-4 h-4" />
                </button>

                {/* Security Tag */}
                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-success" />
                  <span>256-Bit Encrypted Secure Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
