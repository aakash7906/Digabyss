import { Package, Truck, CheckCircle, Clock, Search, ArrowRight } from 'lucide-react'

export default function OrderInformationPage() {
  const orderSteps = [
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Browse & Purchase',
      description: 'Find the digital content you love from independent creators. Use Buy or Negotiate to set your price.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Instant Confirmation',
      description: 'Receive an immediate order confirmation with your receipt, download links, and license details.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Digital Delivery',
      description: 'All digital products are delivered instantly to your account. Access your files anytime from your dashboard.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Lifetime Access',
      description: 'Once purchased, your digital content is available forever in your account library with free updates.'
    },
  ]

  const faqs = [
    {
      question: 'How do I track my order?',
      answer: 'Log into your account and visit the "My Orders" section. All purchases, download links, and transaction history are available there.'
    },
    {
      question: 'Can I get a refund?',
      answer: 'Digital products are non-refundable once delivered. However, if you experience technical issues, our support team will assist you. Please review our Terms & Return Policy for full details.'
    },
    {
      question: 'How does the Negotiate feature work?',
      answer: 'On select listings, you can submit an offer to the seller. The seller may accept, counter, or decline. Once both parties agree, the transaction is processed instantly.'
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit and debit cards, PayPal, and select cryptocurrency payments. All transactions are secured with industry-standard encryption.'
    },
    {
      question: 'Can I re-download my purchased files?',
      answer: 'Yes. All purchased files remain in your account library indefinitely. You can re-download them at any time from your dashboard.'
    },
    {
      question: 'How do I contact a seller?',
      answer: 'Each product listing has a "Contact Seller" option. You can message creators directly through the platform to ask questions or negotiate terms.'
    },
  ]

  return (
    <div className="min-h-screen bg-[#121212] text-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Order Information
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Everything you need to know about purchasing, tracking, and managing your digital content orders on DIGABYSS.COM.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-6 text-center space-y-4 hover:border-success transition-colors group"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-success to-success/70 flex items-center justify-center text-black">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-success uppercase tracking-wider">
                Step {index + 1}
              </div>
              <h3 className="font-bold text-lg text-white">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Order Lookup */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-8 md:p-12">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold text-white">Track Your Order</h2>
            <p className="text-sm text-gray-400">
              Enter your order ID or email address to view your order status and download links.
            </p>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Order ID or Email Address"
                  className="w-full bg-[#121212] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-success transition-colors"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <button className="px-6 py-3 bg-success hover:bg-success/80 text-black font-bold text-sm rounded-lg transition-colors shrink-0">
                Look Up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-6 hover:border-success transition-colors"
            >
              <h3 className="font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-xl p-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Need More Help?</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto mb-6">
            Our support team is available to assist you with any order-related questions or issues.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-success hover:bg-success/80 text-black font-bold rounded-lg transition-colors"
          >
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
