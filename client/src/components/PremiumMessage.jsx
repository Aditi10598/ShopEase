import { motion } from "framer-motion";
import { FaStar, FaGift, FaCode, FaRocket, FaLock } from "react-icons/fa";
import { MdSecurity, MdSupportAgent } from "react-icons/md";

const PremiumMessage = ({
  title = "Conatct Features",
  description = "Please feel free to use the contact from to the right to reach out to us.",
  showFeatures = true,
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Focus */}
      <section className="bg-gradient-to-br from-white-500 via-white-500 to-white-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-black/20 backdrop-blur-sm rounded-3xl mb-8">
              <FaLock className="text-4xl text-[#ef476f]" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-black-100 bg-clip-text text-black">
              🔒 {title}
            </h1>
            <p className="text-1.5xl md:text-0.5xl font-small mb-1 bg-gradient-to-r from-black to-black-100 bg-clip-text text-black">
              {description}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-black/20">
              <h3 className="text-2xl font-bold text-black mb-4">
                💎 Get in Touch
              </h3>
              <p className="text-xl text-black/90 mb-6">
                We want to hear from you. Please feel free to email shopease@Mykeysmart.com or fill out the form below. Please allow 1-3 business days to respond. 
                
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href=""
                  target=""
                  rel=""
                  className="inline-flex items-center gap-4 border-2 border-[#ef476f] text-[#ef476f] px-10 py-5 rounded-2xl hover:bg-[#ef476f] hover:text-white transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
                >
                  <FaGift className="text-2xl text-[#ef476f] group-hover:text-white" />
                  Wholesale
                </a>
                <div className="text-lg text-black bg-white px-6 py-3 rounded-xl border border-black/90">
                  Custom Orders
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {showFeatures && (
        <>
          {/* What You Get */}
          <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto text-center"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  💎 We're (always) here to help
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Please feel free to use the contact from to the right to reach out to us.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/30">
                    <FaCode className="text-4xl text-amber-400 mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Start a return
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Exchanges available here,too!
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30">
                    <MdSecurity className="text-4xl text-blue-400 mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Learn About Warrenty
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Discover more here
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30">
                    <FaRocket className="text-4xl text-green-400 mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Track Your Order
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Just sign in to get started                    </p>
                  </div>
                </div>

                {/* Premium CTA */}
                <div className="bg-white text-black rounded-3xl p-8 md:p-12 text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                    🎯 Customer Support
                  </h3>
                  <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Need to get in touch? Email us at shopease@Mykeysmart.com
                  </p>
                  <a
                    href=""
                    target=""
                    rel=""
                    className="inline-flex items-center gap-4 border-2 border-[#ef476f] text-[#ef476f] px-10 py-5 rounded-2xl hover:bg-[#ef476f] hover:text-white transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
                  >
                    <FaGift className="text-2xl text-[#ef476f] group-hover:text-white" />
                    Claim Now
                  </a>
                  <p className="text-black/80 mt-6 text-lg">
                    💰 Secure payment • 🔄 Shopping updates • 📞 call
                    support
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Premium Features Showcase */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-6xl mx-auto"
              >
                {/* Main Feature Highlight */}
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    🚀 SERVICES
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Have a question? Feel free to check out our FAQ'S or send us an email or text.
                  </p>
                </div>

                {/* Feature Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <FaRocket className="text-3xl text-amber-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Returns
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Changed your mind?
                      Start Your Return Here
                    </p>
                    <div className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
                      ⚡ Live & Fast
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <MdSecurity className="text-3xl text-blue-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Warranty
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Have a concern with your piece?
                      Start Your Claim Here
                    </p>
                    <div className="text-sm text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block">
                      🔒 Grade
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <FaCode className="text-3xl text-green-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Brand Collaborations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      for media or stylist requests for brand collaborations
                    </p>
                    <div className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block">
                      📦 Ready to touch
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <MdSupportAgent className="text-3xl text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Contact us
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Text only +91 7867567556
                    </p>
                    <div className="text-sm text-purple-700 bg-purple-100 px-3 py-1 rounded-full inline-block">
                      📊 Support
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <FaGift className="text-3xl text-teal-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Affiliate & Influencer requests
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Interested to partnering with Shopease?
                    </p>
                    <div className="text-sm text-teal-700 bg-teal-100 px-3 py-1 rounded-full inline-block">
                      🎁 Gifts
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                    <FaStar className="text-3xl text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Store Locations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Find your nearest Shopease
                    </p>
                    <div className="text-sm text-red-700 bg-red-100 px-3 py-1 rounded-full inline-block">
                      🤝 We&apos;ve Got You
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default PremiumMessage;
