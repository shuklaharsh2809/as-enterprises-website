import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Users, 
  Award,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Building,
  Lightbulb,
  Wrench,
  Wind,
  Power,
  Sun,
  Cpu,
  Factory,
  HardHat
} from 'lucide-react';
import emailjs from '@emailjs/browser';

// Import images properly for Vite
import heroImage from './images/image.png';
import cablesImage from './images/cables.jpg';
import joiningKitImage from './images/joiningkit.jpg';
import solarCablesImage from './images/solarcables.webp';
import otherProductsImage from './images/otherProducts.webp';
import toast, { Toaster } from 'react-hot-toast';

const partnerLogos = {
  Havells: <Lightbulb className="w-10 h-10 text-red-500" />,
  Legrand: <Building className="w-10 h-10 text-blue-800" />,
  Schneider: <Power className="w-10 h-10 text-green-500" />,
  Siemens: <Cpu className="w-10 h-10 text-cyan-500" />,
  ABB: <Wind className="w-10 h-10 text-red-600" />,
  Polycab: <Wrench className="w-10 h-10 text-yellow-500" />,
  Finolex: <HardHat className="w-10 h-10 text-orange-500" />,
  KEI: <Zap className="w-10 h-10 text-blue-500" />,
  Anchor: <Shield className="w-10 h-10 text-gray-700" />,
  Crompton: <Factory className="w-10 h-10 text-purple-500" />,
  Godrej: <Building className="w-10 h-10 text-red-700" />,
  'Orient Electric': <Lightbulb className="w-10 h-10 text-green-600" />,
  'V-Guard': <Shield className="w-10 h-10 text-yellow-600" />,
  Bajaj: <Power className="w-10 h-10 text-blue-600" />,
  Philips: <Sun className="w-10 h-10 text-blue-400" />,
};

const Section = ({ children, id }: { children: React.ReactNode, id: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ from_name: '', from_email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_h4lxe5z', 
      'template_joz55wo', 
      formData, 
      'Y7z2gMb8MlJ-8cDIc'
    )
      .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          // alert('Enquiry sent successfully!');
          toast.success('Enquiry sent successfully!');
          setFormData({ from_name: '', from_email: '', message: '' });
          setLoading(false);
      }, (error) => {
          console.log('FAILED...', error);
          // alert('Failed to send enquiry. Please try again later.');
          toast.error('Failed to send enquiry. Please try again later.');
      });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">A S ENTERPRISES</h1>
                  <p className="text-sm text-gray-600 font-medium">Electrical Accessories</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">About</button>
                <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">Products</button>
                <button onClick={() => scrollToSection('strengths')} className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">Strengths</button>
                <button onClick={() => scrollToSection('partners')} className="text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200">Partners</button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')} 
                  className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Contact
                </motion.button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-xl border-t">
              <button onClick={() => scrollToSection('home')} className="block text-gray-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">About</button>
              <button onClick={() => scrollToSection('products')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Products</button>
              <button onClick={() => scrollToSection('strengths')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Strengths</button>
              <button onClick={() => scrollToSection('partners')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Partners</button>
              <button onClick={() => scrollToSection('contact')} className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Contact</button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            src={heroImage} 
            alt="Electrical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mr-6 shadow-2xl">
              <Zap className="w-12 h-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">A S ENTERPRISES</h1>
              <p className="text-2xl md:text-3xl text-blue-200 mt-3 font-medium">Electrical Accessories | Wires • Cables • Kits • Fittings</p>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
          >
            Your trusted supplier of high-quality electrical solutions, specializing in cable wires, jointing kits, and solar cables for diverse industries.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(239, 68, 68, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-xl font-semibold text-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get in Touch <ArrowRight className="w-6 h-6 ml-3" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#1e3a8a' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('products')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 rounded-xl font-semibold text-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              Explore Products <ChevronRight className="w-6 h-6 ml-3" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Section id="about">
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">About Us</span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 leading-tight">Powering India's Infrastructure</h2>
                </div>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  A S ENTERPRISES is a trusted supplier of high-quality electrical solutions, specializing in the distribution of cable wires, jointing kits, and solar cables. With a commitment to excellence, reliability, and sustainability, we serve diverse industries including power utilities, solar EPCs, infrastructure developers, and OEMs.
                </p>
                <div className="flex items-center mb-8">
                  <div className="flex -space-x-2">
                    <CheckCircle className="w-8 h-8 text-blue-700 bg-blue-100 rounded-full p-1" />
                    <CheckCircle className="w-8 h-8 text-green-700 bg-green-100 rounded-full p-1" />
                    <CheckCircle className="w-8 h-8 text-red-700 bg-red-100 rounded-full p-1" />
                  </div>
                  <span className="ml-4 text-gray-600 font-medium">Trusted by 500+ companies nationwide</span>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Request a Quote
                </motion.button>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <img 
                  src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electrical engineering and power systems"
                  className="rounded-3xl shadow-2xl"
                />
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 500 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Award className="w-12 h-12 text-blue-700" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="mission-vision">
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Our Foundation</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl border-l-4 border-blue-700 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower customers with dependable electrical connectivity by delivering premium products, technical expertise, and personalized service.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl border-l-4 border-red-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be a leading reseller of innovative cable technologies, supporting India's infrastructure and renewable energy goals.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="products">
        <div className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Our Products</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Premium Product Range</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">High-quality electrical solutions engineered for reliability, performance, and safety across all applications</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Cable Wires", description: "Copper and aluminum cables for low, medium, and high-voltage applications.", image: cablesImage, alt: "High-quality electrical cables and wires" },
                { title: "Jointing Kits", description: "Heat shrink kits for power cable jointing and termination.", image: joiningKitImage, alt: "Professional electrical jointing and termination kits" },
                { title: "Solar Cables", description: "UV-resistant, flexible cables compliant with IEC standards for efficient solar installations.", image: solarCablesImage, alt: "Solar cable installation and renewable energy systems" },
                { title: "Other Products", description: "Switch sockets, lugs, thimbles, and glands.", image: otherProductsImage, alt: "Electrical fittings, switches, and accessories" }
              ].map((product, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <div className="overflow-hidden rounded-xl">
                    <img 
                      src={product.image} 
                      alt={product.alt}
                      className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="strengths">
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Key Strengths</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover what makes A S ENTERPRISES the preferred choice for electrical solutions across India</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users className="w-10 h-10 text-blue-700" />, title: "Strategic Partnerships", description: "Strategic partnerships with reputed manufacturers", color: "blue" },
                { icon: <Zap className="w-10 h-10 text-green-600" />, title: "Timely Delivery", description: "Timely delivery and competitive pricing", color: "green" },
                { icon: <Award className="w-10 h-10 text-red-600" />, title: "Expert Knowledge", description: "Expert product knowledge and responsive customer support", color: "red" },
                { icon: <Shield className="w-10 h-10 text-purple-600" />, title: "Custom Solutions", description: "Custom solutions for projects and bulk procurement", color: "purple" }
              ].map((strength, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10 }}
                  className="text-center group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br from-${strength.color}-100 to-${strength.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    {strength.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="markets-served">
        <div className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-blue-200 font-semibold text-lg tracking-wide uppercase">Our Reach</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-2">Markets Served</h2>
            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Serving power utilities, solar EPCs, infrastructure developers, and OEMs across India with premium electrical solutions and unmatched service excellence.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05, boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.3)' }}
              className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-12 inline-block shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Pan-India Coverage</h3>
              <p className="text-blue-200 text-lg leading-relaxed max-w-md">Trusted by leading companies nationwide for reliable electrical connectivity solutions</p>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section id="partners">
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Trusted Partners</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Leading Electronics Companies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We partner with world-renowned manufacturers to deliver premium electrical accessories and solutions</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {Object.entries(partnerLogos).map(([name, logo], index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.1)' }}
                  className="bg-gray-50 p-6 rounded-2xl text-center transition-all duration-300 group"
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {logo}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
                  <p className="text-sm text-gray-500">Electrical Solutions</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">And many more trusted manufacturers...</p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Partner With Us
              </motion.button>
            </div>
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to power your next project? Connect with our electrical experts for personalized solutions and competitive pricing</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: <MapPin className="w-10 h-10 text-red-600" />, title: "Address", content: "Sector-5, Rohini, Delhi-110085", color: "red" },
                { icon: <Mail className="w-10 h-10 text-blue-700" />, title: "Email", content: "infoasenterprises2025@gmail.com", color: "blue" },
                { icon: <Phone className="w-10 h-10 text-green-600" />, title: "Phone", content: "8920501986", color: "green" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                  className="bg-white p-10 rounded-2xl shadow-lg text-center transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed break-all">{item.content}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16">
              <motion.form 
                onSubmit={handleSubmit}
                whileHover={{ boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-10 rounded-2xl shadow-lg max-w-2xl mx-auto"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Enquiry Form</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" id="from_name" name="from_name" value={formData.from_name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" id="from_email" name="from_email" value={formData.from_email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                </div>
                <div className="text-center mt-8">
                  {loading ? (
                   <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   type="submit"
                   className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                   >
                     Sending...
                   </motion.button>
                  ) : (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
                    >
                      Send Enquiry
                    </motion.button>
                  )}
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">A S ENTERPRISES</h3>
                <p className="text-gray-400 font-medium">Electrical Accessories</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 text-lg">
              Your trusted supplier of high-quality electrical solutions
            </p>
            <p className="text-gray-500">
              © 2025 A S ENTERPRISES. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;