import React, { useState } from 'react';
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
  Star,
  CheckCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
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
                <button onClick={() => scrollToSection('contact')} className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">Contact</button>
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
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-md shadow-xl border-t">
              <button onClick={() => scrollToSection('home')} className="block text-gray-900 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Home</button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">About</button>
              <button onClick={() => scrollToSection('products')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Products</button>
              <button onClick={() => scrollToSection('strengths')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Strengths</button>
              <button onClick={() => scrollToSection('partners')} className="block text-gray-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Partners</button>
              <button onClick={() => scrollToSection('contact')} className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="src/images/image.png" 
            alt="Electrical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Centered Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mr-6 shadow-2xl">
              <Zap className="w-12 h-12 text-blue-700" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">A S ENTERPRISES</h1>
              <p className="text-2xl md:text-3xl text-blue-200 mt-3 font-medium">Electrical Accessories | Wires • Cables • Kits • Fittings</p>
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-blue-100 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Your trusted supplier of high-quality electrical solutions, specializing in cable wires, jointing kits, and solar cables for diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 rounded-xl font-semibold text-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Get in Touch <ArrowRight className="w-6 h-6 ml-3" />
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-12 py-6 rounded-xl font-semibold text-xl flex items-center justify-center transition-all duration-300 hover:shadow-2xl"
            >
              Explore Products <ChevronRight className="w-6 h-6 ml-3" />
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-700" />
                  </div>
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                  </div>
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-red-700" />
                  </div>
                </div>
                <span className="ml-4 text-gray-600 font-medium">Trusted by 500+ companies nationwide</span>
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Request a Quote
              </button>
            </div>
            
            <div className="relative">
              <div className="transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Electrical engineering and power systems"
                  className="rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center shadow-lg">
                <Award className="w-12 h-12 text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Our Foundation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl border-l-4 border-blue-700 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower customers with dependable electrical connectivity by delivering premium products, technical expertise, and personalized service.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-10 rounded-3xl border-l-4 border-red-600 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leading reseller of innovative cable technologies, supporting India's infrastructure and renewable energy goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Premium Product Range</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">High-quality electrical solutions engineered for reliability, performance, and safety across all applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cable Wires</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Copper and aluminum cables for low, medium, and high-voltage applications.</p>
              <img 
                src="src/images/cables.jpg" 
                alt="High-quality electrical cables and wires"
                className="w-full h-60     object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Jointing Kits</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Heat shrink kits for power cable jointing and termination.</p>
              <img 
                src="src/images/joiningkit.jpg" 
                alt="Professional electrical jointing and termination kits"
                className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solar Cables</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">UV-resistant, flexible cables compliant with IEC standards for efficient solar installations.</p>
              <img 
                src="src/images/solarcables.webp" 
                alt="Solar cable installation and renewable energy systems"
                className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Products</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Switch sockets, lugs, thimbles, and glands.</p>
              <img 
                src="src/images/otherProducts.webp" 
                alt="Electrical fittings, switches, and accessories"
                className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section id="strengths" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Key Strengths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover what makes A S ENTERPRISES the preferred choice for electrical solutions across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Users className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Partnerships</h3>
              <p className="text-gray-600 leading-relaxed">Strategic partnerships with reputed manufacturers</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Timely delivery and competitive pricing</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Knowledge</h3>
              <p className="text-gray-600 leading-relaxed">Expert product knowledge and responsive customer support</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Custom solutions for projects and bulk procurement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-200 font-semibold text-lg tracking-wide uppercase">Our Reach</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 mt-2">Markets Served</h2>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Serving power utilities, solar EPCs, infrastructure developers, and OEMs across India with premium electrical solutions and unmatched service excellence.
          </p>
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl p-12 inline-block shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-blue-700" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Pan-India Coverage</h3>
            <p className="text-blue-200 text-lg leading-relaxed max-w-md">Trusted by leading companies nationwide for reliable electrical connectivity solutions</p>
          </div>
        </div>
      </section>

      {/* Our Partners - Electronics Companies */}
      <section id="partners" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Trusted Partners</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Leading Electronics Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We partner with world-renowned manufacturers to deliver premium electrical accessories and solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Havells */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-blue-700">H</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Havells</h3>
              <p className="text-sm text-gray-600">Switches & Sockets</p>
            </div>

            {/* Legrand */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-red-700">L</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Legrand</h3>
              <p className="text-sm text-gray-600">Electrical Solutions</p>
            </div>

            {/* Schneider Electric */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-green-700">S</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Schneider</h3>
              <p className="text-sm text-gray-600">Power Management</p>
            </div>

            {/* Siemens */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-purple-700">S</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Siemens</h3>
              <p className="text-sm text-gray-600">Industrial Solutions</p>
            </div>

            {/* ABB */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-orange-700">A</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ABB</h3>
              <p className="text-sm text-gray-600">Power & Automation</p>
            </div>

            {/* Polycab */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-indigo-700">P</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Polycab</h3>
              <p className="text-sm text-gray-600">Cables & Wires</p>
            </div>

            {/* Finolex */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-teal-700">F</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Finolex</h3>
              <p className="text-sm text-gray-600">Electrical Cables</p>
            </div>

            {/* KEI */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-pink-700">K</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">KEI</h3>
              <p className="text-sm text-gray-600">Power Cables</p>
            </div>

            {/* Anchor */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-yellow-700">A</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Anchor</h3>
              <p className="text-sm text-gray-600">Electrical Accessories</p>
            </div>

            {/* Crompton */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-cyan-700">C</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Crompton</h3>
              <p className="text-sm text-gray-600">Electrical Products</p>
            </div>

            {/* Godrej */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-emerald-700">G</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Godrej</h3>
              <p className="text-sm text-gray-600">Electrical Appliances</p>
            </div>

            {/* Orient Electric */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-rose-700">O</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Orient Electric</h3>
              <p className="text-sm text-gray-600">Electrical Equipment</p>
            </div>

            {/* V-Guard */}
            <div className="bg-gradient-to-br from-violet-50 to-violet-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-violet-700">V</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">V-Guard</h3>
              <p className="text-sm text-gray-600">Voltage Stabilizers</p>
            </div>

            {/* Bajaj */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-sky-700">B</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bajaj</h3>
              <p className="text-sm text-gray-600">Electrical Products</p>
            </div>

            {/* Philips */}
            <div className="bg-gradient-to-br from-lime-50 to-lime-100 p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <div className="text-2xl font-bold text-lime-700">P</div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Philips</h3>
              <p className="text-sm text-gray-600">Lighting Solutions</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">And many more trusted manufacturers...</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-700 font-semibold text-lg tracking-wide uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to power your next project? Connect with our electrical experts for personalized solutions and competitive pricing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Address</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Sector-5, Rohini, Delhi-110085</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email</h3>
              <p className="text-lg text-gray-600 leading-relaxed break-all">infoasenterprises2025@gmail.com</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl text-center transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone</h3>
              <p className="text-lg text-gray-600 leading-relaxed">8920501986</p>
            </div>
          </div>

          <div className="text-center space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button 
              onClick={() => window.open('mailto:infoasenterprises2025@gmail.com')}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              Send Email
            </button>
            <button 
              onClick={() => window.open('tel:8920501986')}
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              Call Now
            </button>
          </div>
        </div>
      </section>

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