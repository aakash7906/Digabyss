import { Shield, FileText, Lock, Eye, Mail } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#121212] text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        
        {/* Header Section */}
        <section className="text-center space-y-4 pt-4">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-success" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-400">Effective Date: July 20, 2026</p>
        </section>

        {/* Content Container */}
        <div className="bg-[#1d1d1d] border border-[#2a2a2a] rounded-3xl p-8 md:p-12 space-y-12">
          
          {/* Introduction */}
          <section className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-lg">
              At Digabyss, we are committed to protecting your privacy and ensuring that your personal information is handled securely and responsibly. This Privacy Policy outlines how we collect, use, and safeguard the data you provide when using our platform to buy, sell, trade, and negotiate digital assets and services.
            </p>
          </section>

          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-relaxed">
              <li><strong className="text-white">Account Information:</strong> Name, email address, password, and profile details when you register as a creator or buyer.</li>
              <li><strong className="text-white">Transaction Data:</strong> Payment details, billing address, and transaction history. (Note: We use secure third-party payment processors and do not store sensitive credit card data directly).</li>
              <li><strong className="text-white">Usage Data:</strong> Information about how you interact with our website, including IP addresses, browser types, and pages visited, to help us improve the user experience.</li>
              <li><strong className="text-white">Communications:</strong> Messages sent between users for negotiation purposes and correspondence with our support team.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Eye className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">We use the collected information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300 leading-relaxed">
              <li>To provide, operate, and maintain the Digabyss marketplace.</li>
              <li>To facilitate secure transactions and peer-to-peer negotiations.</li>
              <li>To verify user identities for our Verified Top Seller program.</li>
              <li>To communicate with you regarding updates, support, and promotional offers.</li>
              <li>To detect and prevent fraudulent activities and ensure platform security.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-bold">3. Data Security & Sharing</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. 
              <strong className="text-white"> We do not sell your personal data to third parties.</strong> We may share your information only with trusted service providers who assist us in operating our platform (e.g., payment gateways, hosting services), and they are strictly bound by confidentiality agreements.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-bold">4. Your Privacy Rights</h2>
            </div>
            <p className="text-[#d1d5db] leading-relaxed">
              You have the right to access, update, or delete your personal information at any time. You can manage your data directly through your Account Settings or contact our support team for assistance. You may also opt-out of receiving promotional communications from us.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4 pt-8 border-t border-[#2a2a2a]">
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@digabyss.com" className="text-success font-medium hover:underline mt-2 inline-block">privacy@digabyss.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
