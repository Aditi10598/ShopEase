import { motion } from "framer-motion";
import { FaLock, FaGift, FaTimes } from "react-icons/fa";

const PremiumModal = ({
  isOpen,
  onClose,
  title = "Contact Feature",
  description = "Please feel free to use the contact from to the right to reach out to us.",
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#ef476f] to-[#d63f63] rounded-2xl flex items-center justify-center
">
            <FaLock className="text-2xl text-white" />
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <FaTimes className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">🔒 {title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Premium Access Info */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 border border-amber-200">
            <h4 className="font-semibold text-gray-900 mb-2">
              💎 Get in Touch
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              We want to hear from you. Please feel free to email shopease@Mykeysmart.com or fill out the form below. Please allow 1-3 business days to respond. 
            </p>
            <div className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
              ⚡ Wholesale • Custom Orders
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href=""
              target="_blank"
              rel=""
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ef476f] to-[#d63f63] text-white px-6 py-3 rounded-xl hover:from-[#d63f63] hover:to-[#c43a5c] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
"
            >
              <FaGift className="text-lg" />
              Claim Now
            </a>
            <button
              onClick={onClose}
              className="w-full px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PremiumModal;
