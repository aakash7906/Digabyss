import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import {
  User,
  ShoppingBag,
  CreditCard,
  Settings,
  LogOut,
  Plus,
  ChevronDown,
  ChevronUp,
  Edit2,
  Trash2,
  Lock,
  Bell,
  Upload,
  Check,
  X
} from 'lucide-react'

interface Asset {
  id: number
  title: string
  type: string
  price: string
  image: string
}

interface PaymentMethod {
  id: number
  type: string
  last4: string
  exp: string
  isDefault: boolean
}

interface SidebarItem {
  name: string
  icon: ReactNode
  isLogout?: boolean
}

export default function MyAccountPage() {
  const [activeTab, setActiveTab] = useState('Profile')

  // Profile State
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.j@example.com',
    memberSince: 'Jan 2024',
    phone: '+1 555-0199',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  })
  const [isEditing, setIsEditing] = useState(false)
  const [tempProfile, setTempProfile] = useState({ ...profileData })

  // Active Assets State
  const [activeAssets, setActiveAssets] = useState<Asset[]>([
    {
      id: 1,
      title: 'Cosmic Rhythms',
      type: 'Audio',
      price: '$1.00',
      image: 'https://www.digabyss.com/wp-content/uploads/2014/01/audio02-300x196.jpg'
    },
    {
      id: 2,
      title: 'City Lights',
      type: 'Digital Art',
      price: '$150',
      image: 'https://www.digabyss.com/wp-content/uploads/2014/01/digital-art1-300x196.jpg'
    },
    {
      id: 3,
      title: 'The Last Starship',
      type: 'Game Asset',
      price: '$150',
      image: 'https://www.digabyss.com/wp-content/uploads/2014/01/game.png'
    }
  ])

  // Upload Asset modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  const [newAsset, setNewAsset] = useState({
    title: '',
    type: 'Audio',
    price: '',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300'
  })

  // Transactions details open state
  const [expandedTxIndex, setExpandedTxIndex] = useState<number | null>(null)

  // Payment Methods State
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { id: 1, type: 'Visa', last4: '4242', exp: '12/27', isDefault: true },
    { id: 2, type: 'Mastercard', last4: '8899', exp: '08/26', isDefault: false }
  ])
  const [showAddPayment, setShowAddPayment] = useState(false)
  const [newCard, setNewCard] = useState({ number: '', exp: '', cvc: '' })

  // Settings State
  const [settings, setSettings] = useState({
    emailNotifications: true,
    twoFactor: false,
    profilePublic: true
  })

  const sidebarItems: SidebarItem[] = [
    { name: 'Profile', icon: <User className="w-5 h-5" /> },
    { name: 'Order History', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Payment Methods', icon: <CreditCard className="w-5 h-5" /> },
    { name: 'Settings', icon: <Settings className="w-5 h-5" /> },
    { name: 'Logout', icon: <LogOut className="w-5 h-5" />, isLogout: true }
  ]

  const transactions = [
    {
      date: 'Jan 1 2024',
      type: 'Audio',
      desc: 'Morway Platform Purchase Sync Fee',
      member: '$1.00.00',
      post: '$1.00',
      action: 'More',
      details: 'Sync transaction cleared via Stripe. License type: Commercial sync use rights. Digital footprint hash verified on chain.'
    },
    {
      date: 'Jan 3 2024',
      type: 'Audio',
      desc: 'Techniccom Freelancer Contract Payout',
      member: '$131.07',
      post: '$1.37',
      action: 'Hire',
      details: 'Milestone 2 release payment approved. Platform service fee of 2.5% deducted. Funds successfully routed to bank account.'
    }
  ]

  // Handler functions
  const handleProfileSave = () => {
    setProfileData({ ...tempProfile })
    setIsEditing(false)
  }

  const handleProfileCancel = () => {
    setTempProfile({ ...profileData })
    setIsEditing(false)
  }

  const handleUploadAsset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newAsset.title || !newAsset.price) return
    const createdAsset: Asset = {
      id: Date.now(),
      title: newAsset.title,
      type: newAsset.type,
      price: `$${parseFloat(newAsset.price).toFixed(2)}`,
      image: newAsset.image
    }
    setActiveAssets([createdAsset, ...activeAssets])
    setIsUploadOpen(false)
    setNewAsset({
      title: '',
      type: 'Audio',
      price: '',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=300'
    })
  }

  const handleAddPayment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newCard.number || !newCard.exp) return
    const cardNum = newCard.number.replace(/\s?/g, '')
    const last4 = cardNum.slice(-4) || '1111'
    const newPM: PaymentMethod = {
      id: Date.now(),
      type: cardNum.startsWith('5') ? 'Mastercard' : 'Visa',
      last4,
      exp: newCard.exp,
      isDefault: paymentMethods.length === 0
    }
    setPaymentMethods([...paymentMethods, newPM])
    setShowAddPayment(false)
    setNewCard({ number: '', exp: '', cvc: '' })
  }

  const handleSetDefaultPM = (id: number) => {
    setPaymentMethods(paymentMethods.map(pm => ({
      ...pm,
      isDefault: pm.id === id
    })))
  }

  const handleDeletePM = (id: number) => {
    setPaymentMethods(paymentMethods.filter(pm => pm.id !== id))
  }

  return (
    <div className="-mt-28 -mb-12 pt-36 pb-12 bg-[#121212] text-white flex items-start justify-center px-4 md:px-8 min-h-screen">
      {/* Outer Dashboard Frame */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 relative">

        {/* Decorative Background Blur */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-success/5 rounded-full blur-3xl pointer-events-none" />

        {/* 1. Left Sidebar Navigation */}
        <aside className="w-full md:w-64 shrink-0 flex flex-col gap-5 md:gap-6 z-10">
          {/* User Profile Avatar Top Left */}
          <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 px-4">
            <div className="relative group shrink-0">
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-success to-purple-600 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-500" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#121212]">
                <img
                  src={profileData.avatar}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-1 right-1 bg-success text-black p-1 rounded-full text-xs font-bold border border-[#121212] flex items-center justify-center">
                <User className="w-3 h-3" />
              </span>
            </div>
            <div className="md:mt-3 text-left">
              <h4 className="font-bold text-base text-white">{profileData.name}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{profileData.email}</p>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <nav className="flex flex-row md:flex-col gap-2 md:gap-1.5 overflow-x-auto md:overflow-visible pb-3 md:pb-0 scroll-hide select-none">
            {sidebarItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  if (item.isLogout) {
                    window.location.href = '/'
                  } else {
                    setActiveTab(item.name)
                  }
                }}
                className={`flex items-center gap-2.5 md:gap-3.5 px-4 md:px-5 py-2.5 md:py-3.5 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${activeTab === item.name
                  ? 'bg-success/15 text-success border-b-2 md:border-b-0 md:border-l-4 border-success font-bold shadow-[inset_1px_0_0_0_#00e9bf]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* 2. Main Dashboard Content */}
        <main className="flex-1 flex flex-col gap-6 z-10">

          {/* Active Tab: PROFILE */}
          {activeTab === 'Profile' && (
            <>
              {/* Welcome Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Welcome back, {profileData.name.split(' ')[0]}!
                  </h2>
                  <p className="text-sm text-success font-medium mt-1">
                    Your successfull login.
                  </p>
                </div>
                <button
                  onClick={() => setIsUploadOpen(true)}
                  className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-success to-success/80 hover:to-success text-black font-extrabold text-sm rounded-xl transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  <span>Upload & Sell</span>
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Profile Summary Card */}
              <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-white">Profile Summary</h3>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-xs text-success hover:text-white transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleProfileSave}
                        className="text-xs text-success hover:text-white transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={handleProfileCancel}
                        className="text-xs text-red-400 hover:text-white transition-colors font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">Name</label>
                    <input
                      type="text"
                      disabled={!isEditing}
                      value={isEditing ? tempProfile.name : profileData.name}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setTempProfile({ ...tempProfile, name: e.target.value })}
                      className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${isEditing
                        ? 'bg-black border border-success text-white focus:ring-1 focus:ring-success'
                        : 'bg-[#121212] border border-[#2a2a2a] text-gray-300'
                        }`}
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">Email</label>
                    <input
                      type="email"
                      disabled={!isEditing}
                      value={isEditing ? tempProfile.email : profileData.email}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setTempProfile({ ...tempProfile, email: e.target.value })}
                      className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${isEditing
                        ? 'bg-black border border-success text-white focus:ring-1 focus:ring-success'
                        : 'bg-[#121212] border border-[#2a2a2a] text-gray-300'
                        }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">Member Since</label>
                      <input
                        type="text"
                        disabled
                        value={profileData.memberSince}
                        className="w-full bg-[#121212] border border-[#2a2a2a] text-gray-400 rounded-xl px-4 py-3 text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1.5">Phone</label>
                      <input
                        type="text"
                        disabled={!isEditing}
                        value={isEditing ? tempProfile.phone : profileData.phone}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTempProfile({ ...tempProfile, phone: e.target.value })}
                        className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-all ${isEditing
                          ? 'bg-black border border-success text-white focus:ring-1 focus:ring-success'
                          : 'bg-[#121212] border border-[#2a2a2a] text-gray-300'
                          }`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Latest Transaction Table Card */}
              <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-6">
                <h3 className="font-bold text-lg text-white mb-6">Latest Transaction</h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-[#2a2a2a] text-gray-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4 font-semibold">Date</th>
                        <th className="pb-4 font-semibold">Type</th>
                        <th className="pb-4 font-semibold">Description</th>
                        <th className="pb-4 font-semibold text-right">Member</th>
                        <th className="pb-4 font-semibold text-right">Post</th>
                        <th className="pb-4 font-semibold text-right">Transaction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2a2a2a]">
                      {transactions.map((tx, index) => (
                        <tr key={index} className="text-gray-300 hover:text-white transition-colors">
                          <td className="py-4 font-medium">{tx.date}</td>
                          <td className="py-4">
                            <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-[#1d1d1d] border border-[#2a2a2a] text-gray-400">
                              {tx.type}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="space-y-1">
                              <div>{tx.desc.split(' ')[0]}</div>
                              {expandedTxIndex === index && (
                                <p className="text-xs text-gray-500 max-w-sm font-normal leading-relaxed">
                                  {tx.details}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="py-4 text-right font-semibold text-gray-200">{tx.member}</td>
                          <td className="py-4 text-right font-semibold text-success">{tx.post}</td>
                          <td className="py-4 text-right">
                            <button
                              onClick={() => setExpandedTxIndex(expandedTxIndex === index ? null : index)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1d1d1d] hover:bg-success/10 border border-[#2a2a2a] hover:border-success/30 text-xs font-bold text-gray-300 hover:text-success rounded-lg transition-all cursor-pointer"
                            >
                              <span>{expandedTxIndex === index ? 'Less' : tx.action}</span>
                              {expandedTxIndex === index ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {/* Active Tab: ORDER HISTORY */}
          {activeTab === 'Order History' && (
            <div className="space-y-6">
              <div className="border-b border-white/5 pb-4">
                <h2 className="text-2xl font-bold">Order History</h2>
                <p className="text-xs text-gray-400 mt-1">Manage and access your previous digital purchases.</p>
              </div>

              <div className="space-y-4">
                {[
                  { id: 'DB-98431', date: 'Jan 10, 2026', total: '$14.99', items: 1, title: 'Midnight Echoes - Full Album', status: 'Completed' },
                  { id: 'DB-97120', date: 'Dec 18, 2025', total: '$29.99', items: 1, title: 'Fantasy Character Pack', status: 'Completed' }
                ].map((order) => (
                  <div key={order.id} className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-success/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-white">{order.id}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-md">
                          {order.status}
                        </span>
                      </div>
                      <h4 className="font-semibold text-sm text-gray-300">{order.title}</h4>
                      <p className="text-xs text-gray-500">Ordered on {order.date} &bull; {order.items} Item</p>
                    </div>
                    <div className="flex items-center gap-4 self-stretch md:self-auto justify-between border-t border-[#2a2a2a] md:border-0 pt-3 md:pt-0">
                      <div className="text-right md:space-y-0.5">
                        <p className="text-xs text-gray-400 md:hidden">Price</p>
                        <span className="text-base font-extrabold text-success">{order.total}</span>
                      </div>
                      <button className="px-4 py-2 bg-[#1d1d1d] hover:bg-success hover:text-black border border-[#2a2a2a] text-xs font-bold rounded-lg transition-colors cursor-pointer">
                        Download File
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Active Tab: PAYMENT METHODS */}
          {activeTab === 'Payment Methods' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-2xl font-bold">Payment Methods</h2>
                  <p className="text-xs text-gray-400 mt-1">Manage credit cards and payment gateways.</p>
                </div>
                <button
                  onClick={() => setShowAddPayment(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-success hover:bg-success/80 text-black font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add New Card
                </button>
              </div>

              {/* Add Payment Form */}
              {showAddPayment && (
                <form onSubmit={handleAddPayment} className="bg-[#1d1d1d] border border-success/30 rounded-2xl p-5 space-y-4">
                  <div className="flex justify-between items-center border-b border-[#2a2a2a] pb-2">
                    <h4 className="font-bold text-sm text-white">Add Card Details</h4>
                    <button type="button" onClick={() => setShowAddPayment(false)} className="text-gray-500 hover:text-white">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Card Number</label>
                      <input
                        type="text"
                        placeholder="4111 2222 3333 4444"
                        value={newCard.number}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCard({ ...newCard, number: e.target.value })}
                        maxLength={19}
                        className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#00e9bf]"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM/YY"
                          value={newCard.exp}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCard({ ...newCard, exp: e.target.value })}
                          maxLength={5}
                          className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#00e9bf]"
                          required
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">CVC / CVV</label>
                        <input
                          type="password"
                          placeholder="***"
                          value={newCard.cvc}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => setNewCard({ ...newCard, cvc: e.target.value })}
                          maxLength={3}
                          className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#00e9bf]"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setShowAddPayment(false)}
                        className="px-4 py-2 bg-transparent text-gray-400 hover:text-white text-xs font-semibold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-success text-black font-bold text-xs rounded-lg hover:bg-success/80 transition-colors"
                      >
                        Save Card
                      </button>
                    </div>
                  </div>
                </form>
              )}

              {/* Payment Methods List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentMethods.map((pm) => (
                  <div key={pm.id} className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-5 flex flex-col justify-between h-36 relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm text-white">{pm.type} Card</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Exp: {pm.exp}</p>
                      </div>
                      <button
                        onClick={() => handleDeletePM(pm.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold tracking-wider text-gray-300">•••• •••• •••• {pm.last4}</span>
                      {pm.isDefault ? (
                        <span className="text-[9px] font-bold bg-success/10 border border-success/20 text-success px-2 py-1 rounded">
                          Default
                        </span>
                      ) : (
                        <button
                          onClick={() => handleSetDefaultPM(pm.id)}
                          className="text-[9px] font-bold text-gray-500 hover:text-success transition-colors"
                        >
                          Set Default
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                {paymentMethods.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-8 col-span-2">No payment methods added yet.</p>
                )}
              </div>
            </div>
          )}

          {/* Active Tab: SETTINGS */}
          {activeTab === 'Settings' && (
            <div className="space-y-6">
              <div className="border-b border-[#2a2a2a] pb-4">
                <h2 className="text-2xl font-bold">Settings</h2>
                <p className="text-xs text-gray-400 mt-1">Configure account security and configuration choices.</p>
              </div>

              <div className="space-y-5">
                {/* Security Settings */}
                <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-5 space-y-4">
                  <h3 className="font-bold text-sm text-white flex items-center gap-2">
                    <Lock className="w-4 h-4 text-success" />
                    Security Options
                  </h3>

                  <div className="flex items-center justify-between py-2 border-b border-[#2a2a2a]">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200">Two-Factor Authentication</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Secure your independent creator assets account.</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, twoFactor: !settings.twoFactor })}
                      className={`w-11 h-6 rounded-full transition-all relative ${settings.twoFactor ? 'bg-success' : 'bg-black border border-[#2a2a2a]'
                        }`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-black transition-all ${settings.twoFactor ? 'left-6 bg-black' : 'left-1 bg-gray-500'
                        }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200">Update Password</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Revoke active sessions and replace password credentials.</p>
                    </div>
                    <button className="px-3.5 py-1.5 bg-[#1d1d1d] hover:bg-white/10 border border-[#2a2a2a] text-xs font-bold rounded-lg transition-colors cursor-pointer">
                      Reset
                    </button>
                  </div>
                </div>

                {/* Account Settings */}
                <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl p-5 space-y-4">
                  <h3 className="font-bold text-sm text-white flex items-center gap-2">
                    <Bell className="w-4 h-4 text-success" />
                    Notification Details
                  </h3>

                  <div className="flex items-center justify-between py-2 border-b border-[#2a2a2a]">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200">Email Notifications</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Receive download receipts and account logs via email.</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, emailNotifications: !settings.emailNotifications })}
                      className={`w-11 h-6 rounded-full transition-all relative ${settings.emailNotifications ? 'bg-success' : 'bg-black border border-[#2a2a2a]'
                        }`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-black transition-all ${settings.emailNotifications ? 'left-6 bg-black' : 'left-1 bg-gray-500'
                        }`} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-200">Public Profile Directory</h4>
                      <p className="text-xs text-gray-500 mt-0.5">List your freelance services on our search pages.</p>
                    </div>
                    <button
                      onClick={() => setSettings({ ...settings, profilePublic: !settings.profilePublic })}
                      className={`w-11 h-6 rounded-full transition-all relative ${settings.profilePublic ? 'bg-success' : 'bg-black border border-[#2a2a2a]'
                        }`}
                    >
                      <span className={`absolute top-1 w-4 h-4 rounded-full bg-black transition-all ${settings.profilePublic ? 'left-6 bg-black' : 'left-1 bg-gray-500'
                        }`} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* 3. Upload & Sell Modal (Interactive popup) */}
      {isUploadOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-2xl w-full max-w-md p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setIsUploadOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-success" />
                List Digital Asset
              </h3>
              <p className="text-xs text-gray-400 mt-1">Submit your new asset metadata to publish it live.</p>
            </div>

            <form onSubmit={handleUploadAsset} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Asset Title</label>
                <input
                  type="text"
                  placeholder="e.g. Neon Horizon Synth Beat"
                  value={newAsset.title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewAsset({ ...newAsset, title: e.target.value })}
                  className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-success transition-colors text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category Type</label>
                  <select
                    value={newAsset.type}
                    onChange={(e: ChangeEvent<HTMLSelectElement>) => setNewAsset({ ...newAsset, type: e.target.value })}
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-success transition-colors text-white"
                  >
                    <option value="Audio">Audio</option>
                    <option value="Digital Art">Digital Art</option>
                    <option value="Game Asset">Game Asset</option>
                    <option value="Software">Software</option>
                    <option value="Video">Video</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Price (USD)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="e.g. 9.99"
                    value={newAsset.price}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewAsset({ ...newAsset, price: e.target.value })}
                    className="w-full bg-[#121212] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-success transition-colors text-white"
                    required
                  />
                </div>
              </div>

              <div className="border-2 border-dashed border-[#2a2a2a] rounded-xl p-6 text-center hover:border-success/50 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 text-gray-500 group-hover:text-success mx-auto mb-2 transition-colors" />
                <p className="text-xs font-semibold text-gray-300 group-hover:text-white">Choose item file</p>
                <p className="text-[10px] text-gray-500 mt-1">MP3, WAV, ZIP, PNG, or MP4 up to 50MB</p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-[#2a2a2a]">
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="flex-1 py-3 border border-[#2a2a2a] hover:bg-white/5 text-gray-400 hover:text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-success hover:bg-success/80 text-black text-xs font-extrabold rounded-xl transition-all cursor-pointer"
                >
                  Publish Asset
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
