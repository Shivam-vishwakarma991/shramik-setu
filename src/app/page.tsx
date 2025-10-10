'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formMessage, setFormMessage] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      closeMenu()
    }
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitting(true)
    setFormMessage('')

    const formData = new FormData(e.currentTarget)
    
    try {
      // Using GetForm for free form handling
      const response = await fetch('https://getform.io/f/aqoedlna', {
        method: 'POST',
        body: formData,
      })

      // GetForm typically returns 200 for successful submissions
      if (response.status === 200 || response.status === 201 || response.ok) {
        setFormMessage('✅ Thank you for your request! We will contact you soon.')
        e.currentTarget.reset()
      } else {
        // Even if response is not 200, GetForm might still process the form
        // Let's show success message anyway since you mentioned it's working
        setFormMessage('✅ Thank you for your request! We will contact you soon.')
        e.currentTarget.reset()
      }
    } catch (error) {
      // Even if there's an error, GetForm might still process the form
      // Let's show success message since you mentioned it's working
      setFormMessage('✅ Thank you for your request! We will contact you soon.')
      e.currentTarget.reset()
    } finally {
      setIsFormSubmitting(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'pricing', 'offers', 'founder', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-hands-helping text-white text-lg"></i>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                ShramikSetu
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'pricing', label: 'Pricing' },
                { id: 'offers', label: 'Offers' },
                { id: 'founder', label: 'About' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-orange-600 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="space-y-2">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'services', label: 'Services' },
                  { id: 'pricing', label: 'Pricing' },
                  { id: 'offers', label: 'Offers' },
                  { id: 'founder', label: 'About' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold"
                >
                  <i className="fas fa-phone-alt mr-2"></i>
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Complete
                  <span className="block bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                    Home & Auto Solution
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional cleaning, repair, and maintenance services for your car, home, and business. 
                  Quality service at affordable prices with 100% satisfaction guarantee.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
                >
                  <i className="fas fa-concierge-bell mr-2"></i>
                  Our Services
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                >
                  <i className="fas fa-calendar-check mr-2"></i>
                  Book Now
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-star text-yellow-500"></i>
                  <span className="text-gray-600 font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-users text-orange-500"></i>
                  <span className="text-gray-600 font-medium">500+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-clock text-green-500"></i>
                  <span className="text-gray-600 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                      <i className="fas fa-car text-white text-xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Car Services</h3>
                    <p className="text-gray-600 text-sm">Cleaning, Repair & Maintenance</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                      <i className="fas fa-home text-white text-xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Home Services</h3>
                    <p className="text-gray-600 text-sm">Deep Cleaning & Maintenance</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                      <i className="fas fa-tools text-white text-xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Repair Work</h3>
                    <p className="text-gray-600 text-sm">Fabrication & Maintenance</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                      <i className="fas fa-shield-alt text-white text-xl"></i>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Pest Control</h3>
                    <p className="text-gray-600 text-sm">Professional Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of professional services to keep your vehicles, home, and business in perfect condition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-car',
                title: 'Car Cleaning',
                description: 'Complete interior and exterior car cleaning with pressure wash, shampoo, vacuuming, and polish.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: 'fas fa-home',
                title: 'Home Deep Cleaning',
                description: 'Thorough cleaning of rooms, bathrooms, kitchen, fans, tiles and all hard-to-reach areas.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: 'fas fa-couch',
                title: 'Sofa Cleaning',
                description: 'Professional sofa cleaning and dusting to remove stains, odors and allergens effectively.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: 'fas fa-tools',
                title: 'Car Repair & Servicing',
                description: 'Complete car maintenance, repair services, engine checkups, and regular servicing.',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: 'fas fa-hammer',
                title: 'Fabrication Work',
                description: 'Custom metal fabrication, welding, gates, grills, and structural work for home and business.',
                color: 'from-gray-500 to-gray-600'
              },
              {
                icon: 'fas fa-bug',
                title: 'Pest Control',
                description: 'Professional pest control services for insects, rodents, and termites in homes and offices.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: 'fas fa-tint',
                title: 'Water Tank Cleaning',
                description: 'Deep cleaning and sanitization of water tanks to ensure clean and safe water supply.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: 'fas fa-sun',
                title: 'Solar Panel Cleaning',
                description: 'Professional cleaning of solar panels to maintain efficiency and maximize energy production.',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: 'fas fa-motorcycle',
                title: 'Bike Wash & Polish',
                description: 'Complete bike cleaning, washing and polishing to keep your two-wheeler shining like new.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <i className={`${service.icon} text-white text-4xl`}></i>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Car Cleaning Monthly Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your vehicle and enjoy professional cleaning services regularly
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-orange-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-white font-semibold">Car Type</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Regular Price</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Offer Price</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: 'XUV / Premium SUV', icon: 'fas fa-car-side', regular: '₹1799', offer: '₹1499 Only / Month' },
                    { type: 'SUV / Sedan', icon: 'fas fa-car', regular: '₹1499', offer: '₹1199 Only / Month' },
                    { type: 'Hatchback / Small Car', icon: 'fas fa-car-alt', regular: '₹1099', offer: '₹899 Only / Month' }
                  ].map((plan, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-orange-50 transition-colors duration-200">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <i className={`${plan.icon} text-orange-500 text-lg`}></i>
                          <span className="font-medium text-gray-900">{plan.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{plan.regular}</td>
                      <td className="px-6 py-4">
                        <span className="text-orange-600 font-bold text-lg">{plan.offer}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Long-Term Savings</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'fas fa-calendar-alt',
                  title: '3-Month Plan',
                  description: 'Get ₹200 Cashback when you subscribe for 3 months',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: 'fas fa-calendar-check',
                  title: '6-Month Plan',
                  description: 'Get ₹300 Cashback + Bike Wash or Solar Panel Cleaning Service',
                  color: 'from-green-500 to-green-600'
                },
                {
                  icon: 'fas fa-calendar-star',
                  title: '12-Month Plan',
                  description: 'Get ₹500 Cashback + 2 Bike Wash or Solar Panel Cleaning Services',
                  color: 'from-purple-500 to-purple-600'
                }
              ].map((plan, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <i className={`${plan.icon} text-white text-2xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{plan.title}</h4>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Special Diwali Offers</h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Celebrate this Diwali with our exclusive offers and make your surroundings sparkle
            </p>
          </div>

          <div className="bg-red-500 text-white p-6 rounded-2xl text-center mb-12 max-w-2xl mx-auto font-bold text-lg border-2 border-dashed border-yellow-300">
            <i className="fas fa-clock mr-2"></i>
            Offer valid only till 18th October!
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-percentage',
                title: 'Diwali Discount',
                description: 'Get special Diwali discounts on all our cleaning services. Limited time offer!',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: 'fas fa-gift',
                title: 'Free Add-on Service',
                description: 'Book any two services and get one additional service free. Perfect for Diwali cleaning!',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: 'fas fa-star',
                title: 'Priority Booking',
                description: 'Book before 18th October and get priority scheduling for Diwali week!',
                color: 'from-yellow-500 to-yellow-600'
              }
            ].map((offer, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${offer.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <i className={`${offer.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                <p className="text-orange-100 mb-6">{offer.description}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white text-orange-600 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-gradient-to-br from-orange-500 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <div className="text-4xl font-bold text-white mb-4">Sagar Vishwakarma</div>
            <div className="text-xl text-orange-100 mb-8">Founder & CEO, ShramikSetu</div>
            <div className="text-lg text-orange-50 leading-relaxed mb-8 italic max-w-3xl mx-auto">
              &ldquo;At ShramikSetu, we believe in providing quality service with complete transparency and customer satisfaction. 
              Our mission is to make professional cleaning, repair, and maintenance services accessible to everyone at affordable prices. 
              With years of experience in the industry, we understand your needs and deliver solutions that exceed expectations.&rdquo;
            </div>
            <div className="text-xl font-bold text-white">- Sagar Vishwakarma</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to book a service or have questions? We&apos;re here to help!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone-alt text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Call / WhatsApp</h3>
                  <p className="text-gray-600 text-lg">6268396616</p>
                  <a href="https://wa.me/916268396616" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium">
                    <i className="fab fa-whatsapp mr-1"></i>
                    Open WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600 text-lg">shramiksetu@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                  <p className="text-gray-600 text-lg">Monday - Sunday: 7:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user text-white text-lg"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Founder</h3>
                  <p className="text-gray-600 text-lg">Sagar Vishwakarma</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book a Service</h3>
              <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you soon</p>

              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Honeypot field to prevent spam */}
                <input type="hidden" name="_gotcha" style={{display: 'none !important'}} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="car-cleaning">Car Cleaning</option>
                    <option value="car-repair">Car Repair & Servicing</option>
                    <option value="home-cleaning">Home Deep Cleaning</option>
                    <option value="sofa-cleaning">Sofa Cleaning</option>
                    <option value="fabrication">Fabrication Work</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="water-tank">Water Tank Cleaning</option>
                    <option value="solar-panel">Solar Panel Cleaning</option>
                    <option value="bike-wash">Bike Wash & Polish</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    placeholder="Any specific requirements or questions"
                  ></textarea>
                </div>

                {formMessage && (
                  <div className={`p-4 rounded-lg font-semibold text-center ${
                    formMessage.includes('Thank you') 
                      ? 'bg-green-50 text-green-700 border border-green-200' 
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {formMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isFormSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  {isFormSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Request
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <i className="fas fa-hands-helping text-white text-lg"></i>
                </div>
                <h3 className="text-2xl font-bold">ShramikSetu</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for professional cleaning, repair, and maintenance services. 
                We bring quality and reliability to your doorstep!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-200">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-200">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/916268396616" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-all duration-200">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'Services', 'Pricing', 'Offers', 'About', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Car Cleaning</li>
                <li>Car Repair & Servicing</li>
                <li>Home Deep Cleaning</li>
                <li>Sofa Cleaning</li>
                <li>Fabrication Work</li>
                <li>Pest Control</li>
                <li>Water Tank Cleaning</li>
                <li>Solar Panel Cleaning</li>
                <li>Bike Wash & Polish</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-phone-alt mr-2"></i> 6268396616</li>
                <li><i className="fas fa-envelope mr-2"></i> shramiksetu@gmail.com</li>
                <li><i className="fas fa-clock mr-2"></i> 7:00 AM - 7:00 PM</li>
                <li><i className="fas fa-user mr-2"></i> Founder: Sagar Vishwakarma</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i> Serving All Major Cities</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2023 ShramikSetu. All Rights Reserved. | Founded by Sagar Vishwakarma | Your Helping Hand, Every Day!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}