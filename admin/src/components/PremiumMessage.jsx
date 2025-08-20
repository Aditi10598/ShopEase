import { FaCrown, FaStar, FaRocket, FaGift } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import PropTypes from "prop-types";

const PremiumMessage = ({
  title = "Our Services",
  description = "This feature is available in the premium version only.",
  features = [],
  
}) => {
  const defaultFeatures = [
    "Returns",
    "Warrenty",
    "Brand Collaborations",
    "Contact us",
    "Affiliate and influencer requests",
    "Store Locations",
  ];

  const featureList = features.length > 0 ? features : defaultFeatures;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#ef476f] via-[#e14c75] to-[#c32c53] rounded-full mb-6 shadow-2xl">
            <FaCrown className="text-4xl text-white" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-4">
            <HiSparkles className="text-2xl text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ef476f] to-[#b63758] bg-clip-text text-transparent">
              {title}
            </h1>
            <HiSparkles className="text-2xl text-purple-600" />
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Feature List */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FaStar className="text-2xl text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">
                Premium Features
              </h2>
            </div>

            <ul className="space-y-4">
              {featureList.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Upgrade Benefits */}
          <div className="bg-gradient-to-br from-[#ef476f] to-[#d63f63] rounded-2xl p-8 text-white shadow-xl
">
            <div className="flex items-center gap-3 mb-6">
              <FaRocket className="text-2xl" />
              <h2 className="text-2xl font-bold">We are(always) here to help</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaGift className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Start a return</h3>
                  <p className="text-purple-100">
                    Exchanges available here,too!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiSparkles className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Learn about warrenty
                  </h3>
                  <p className="text-purple-100">
                    Discover more here
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaStar className="text-2xl text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    Track your order
                  </h3>
                  <p className="text-purple-100">
                    Just sign in to get order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Customer Support
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Need to get in touch? E-mail us at shopease@Mykeysmart.com 
            </p>

            <a
               href=""
              target=""
              rel=""
               className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ef476f] to-[#d83762] hover:from-[#d83762] hover:to-[#b12b51] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              /<FaCrown className="text-xl" />
               <span className="text-lg">Claim Now</span> 
              <HiSparkles className="text-xl" />
            </a> 

            <p className="text-sm text-gray-500 mt-4">
              Secure payment • Shopping updates • Call Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

PremiumMessage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.array,
  showDemoPreview: PropTypes.bool,
};

export default PremiumMessage;
