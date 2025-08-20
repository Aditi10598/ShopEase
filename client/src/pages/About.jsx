import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { FaUsers, FaGlobe, FaAward, FaHeart } from "react-icons/fa";
import { MdSecurity, MdLocalShipping, MdSupport } from "react-icons/md";

const stats = [
  { number: "50K+", label: "Happy Customers", icon: <FaUsers /> },
  { number: "25+", label: "Countries Served", icon: <FaGlobe /> },
  { number: "8 Years", label: "Industry Experience", icon: <FaAward /> },
  { number: "99%", label: "Customer Satisfaction", icon: <FaHeart /> },
];

const values = [
  {
    icon: <MdSecurity />,
    title: "Trust & Security",
    description:
      "Your security is our priority. We use industry-leading encryption and security measures to protect your data and transactions.",
  },
  {
    icon: <MdLocalShipping />,
    title: "Fast & Reliable",
    description:
      "Quick delivery and reliable service. We partner with trusted shipping providers to ensure your orders arrive on time.",
  },
  {
    icon: <MdSupport />,
    title: "Customer First",
    description:
      "24/7 customer support and hassle-free returns. Our dedicated team is always here to help you with any questions or concerns.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About ShopEase Shopping
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              ShopEase, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to the table on the daily. Fashion trends seem to change at lightning speed, yet the ShopEase shopping app has managed to keep up without any hiccups. In addition, ShopEase has vowed to serve customers to the best of its ability by introducing its first-ever loyalty program, The ShopEase Insider. Gain access to priority delivery, early sales, lucrative deals and other special perks on all your shopping with the ShopEase app. Download the ShopEase app on your Android or IOS device today and experience shopping like never before!


            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brandRed rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of dedicated personnel with an equally loyal customer base have made ShopEase the online platform that it is today. 
                </p>
                <p>
                  The original B2B venture for personalized gifts was conceived in 2018 but transitioned into a full-fledged ecommerce giant within a span of just a few years. By 2022, ShopEase had introduced 350 Indian and international brands to its platform, and this has only grown in number each passing year. Today ShopEase sits on top of the online fashion game with an astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.
                </p>
                <p>
                  The ShopEase shopping app came into existence in the year 2022 to further encourage customers’ shopping sprees. Download the app on your Android or IOS device this very minute to experience fashion like never before
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-brandRed rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl text-white">🛍️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Quality First
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Every product is carefully selected
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the
              experience we create for our customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-brandRed rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
      <h1>load</h1>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of satisfied customers and discover why ShopEase
              Shopping is the preferred choice for online shopping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <button className="px-8 py-4 bg-brandRed text-white rounded-lg hover:bg-[#d63b5f] transition-colors font-semibold">
                  Shop Now
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About;
