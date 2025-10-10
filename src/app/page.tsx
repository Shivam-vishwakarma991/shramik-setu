'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your request! We will contact you soon.')
  }

  return (
    <div className="min-h-screen bg-light text-dark">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary-dark text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <i className="fas fa-hands-helping text-3xl"></i>
              <h1 className="text-2xl font-bold">ShramikSetu</h1>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-primary-dark md:bg-transparent p-5 md:p-0 transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 md:translate-y-0 md:opacity-100'}`}>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
                <li><a href="#home" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Home</a></li>
                <li><a href="#services" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Services</a></li>
                <li><a href="#pricing" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Pricing</a></li>
                <li><a href="#offers" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Special Offers</a></li>
                <li><a href="#founder" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Founder</a></li>
                <li><a href="#whatsapp" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">WhatsApp</a></li>
                <li><a href="#contact" onClick={closeMenu} className="text-white hover:bg-white/20 px-3 py-2 rounded transition-all">Contact</a></li>
              </ul>
            </nav>
            
            <a href="tel:6268396616" className="bg-accent text-white px-5 py-3 rounded-full font-bold hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center gap-2">
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-black/70 to-black/70 bg-cover bg-center text-white py-24 text-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-shadow-lg">ShramikSetu – Your Complete Home & Auto Solution</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">Professional cleaning, repair, and maintenance services for your car, home, and business. Quality service at affordable prices!</p>
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-8">
            <a href="#services" className="bg-accent text-white px-6 py-4 rounded-full font-bold hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <i className="fas fa-concierge-bell"></i> Our Services
            </a>
            <a href="#contact" className="bg-accent text-white px-6 py-4 rounded-full font-bold hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
              <i className="fas fa-calendar-check"></i> Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Comprehensive Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We offer a wide range of professional services to keep your vehicles, home, and business in perfect condition</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-car"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Car Cleaning</h3>
                <p className="text-gray-600 mb-5">Complete interior and exterior car cleaning with pressure wash, shampoo, vacuuming, and polish.</p>
                <a href="#pricing" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">View Plans</a>
              </div>
            </div>

            {/* Home Deep Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-home"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Home Deep Cleaning</h3>
                <p className="text-gray-600 mb-5">Thorough cleaning of rooms, bathrooms, kitchen, fans, tiles and all hard-to-reach areas.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Sofa Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-couch"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Sofa Cleaning</h3>
                <p className="text-gray-600 mb-5">Professional sofa cleaning and dusting to remove stains, odors and allergens effectively.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Car Repair & Servicing */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-tools"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Car Repair & Servicing</h3>
                <p className="text-gray-600 mb-5">Complete car maintenance, repair services, engine checkups, and regular servicing.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Fabrication Work */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-hammer"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Fabrication Work</h3>
                <p className="text-gray-600 mb-5">Custom metal fabrication, welding, gates, grills, and structural work for home and business.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Pest Control */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-bug"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Pest Control</h3>
                <p className="text-gray-600 mb-5">Professional pest control services for insects, rodents, and termites in homes and offices.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Water Tank Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-tint"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Water Tank Cleaning</h3>
                <p className="text-gray-600 mb-5">Deep cleaning and sanitization of water tanks to ensure clean and safe water supply.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Solar Panel Cleaning */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-sun"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Solar Panel Cleaning</h3>
                <p className="text-gray-600 mb-5">Professional cleaning of solar panels to maintain efficiency and maximize energy production.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>

            {/* Bike Wash & Polish */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-motorcycle"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Bike Wash & Polish</h3>
                <p className="text-gray-600 mb-5">Complete bike cleaning, washing and polishing to keep your two-wheeler shining like new.</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Car Cleaning Monthly Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the perfect plan for your vehicle and enjoy professional cleaning services regularly</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="p-5 text-left font-semibold">Car Type</th>
                  <th className="p-5 text-left font-semibold">Regular Price</th>
                  <th className="p-5 text-left font-semibold">Offer Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-orange-50">
                  <td className="p-5"><i className="fas fa-car-side mr-2"></i> XUV / Premium SUV</td>
                  <td className="p-5">₹1799</td>
                  <td className="p-5 text-accent font-bold text-lg">₹1499 Only / Month</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-orange-50">
                  <td className="p-5"><i className="fas fa-car mr-2"></i> SUV / Sedan</td>
                  <td className="p-5">₹1499</td>
                  <td className="p-5 text-accent font-bold text-lg">₹1199 Only / Month</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="p-5"><i className="fas fa-car-alt mr-2"></i> Hatchback / Small Car</td>
                  <td className="p-5">₹1099</td>
                  <td className="p-5 text-accent font-bold text-lg">₹899 Only / Month</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Long-Term Savings</h2>
            <p className="text-lg text-gray-600 mb-8">Save more with our long-term subscription plans</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">3-Month Plan</h3>
                <p className="text-gray-600">Get ₹200 Cashback when you subscribe for 3 months</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-calendar-check"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">6-Month Plan</h3>
                <p className="text-gray-600">Get ₹300 Cashback + Bike Wash or Solar Panel Cleaning Service</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-primary text-white text-4xl p-8 text-center">
                <i className="fas fa-calendar-star"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">12-Month Plan</h3>
                <p className="text-gray-600">Get ₹500 Cashback + 2 Bike Wash or Solar Panel Cleaning Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-20 bg-gradient-to-r from-secondary to-green-800 text-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Special Diwali Offers</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">Celebrate this Diwali with our exclusive offers and make your surroundings sparkle</p>
          </div>
          
          <div className="bg-accent text-white p-4 rounded-lg text-center mb-8 max-w-2xl mx-auto font-bold text-lg border-2 border-dashed border-yellow-400">
            <i className="fas fa-clock mr-2"></i> Offer valid only till 18th October!
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-accent text-white text-4xl p-8 text-center">
                <i className="fas fa-percentage"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Diwali Discount</h3>
                <p className="text-white/80 mb-5">Get special Diwali discounts on all our cleaning services. Limited time offer!</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-accent text-white text-4xl p-8 text-center">
                <i className="fas fa-gift"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Free Add-on Service</h3>
                <p className="text-white/80 mb-5">Book any two services and get one additional service free. Perfect for Diwali cleaning!</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg hover:-translate-y-2 transition-transform">
              <div className="bg-accent text-white text-4xl p-8 text-center">
                <i className="fas fa-star"></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Priority Booking</h3>
                <p className="text-white/80 mb-5">Book before 18th October and get priority scheduling for Diwali week!</p>
                <a href="#contact" className="bg-accent text-white px-4 py-2 rounded-full font-bold hover:bg-red-700 transition-all">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-3xl font-bold mb-4">Sagar Vishwakarma</div>
          <div className="text-xl mb-6 opacity-90">Founder & CEO, ShramikSetu</div>
          <div className="text-lg leading-relaxed mb-8 italic">
            &ldquo;At ShramikSetu, we believe in providing quality service with complete transparency and customer satisfaction. 
            Our mission is to make professional cleaning, repair, and maintenance services accessible to everyone at affordable prices. 
            With years of experience in the industry, we understand your needs and deliver solutions that exceed expectations.&rdquo;
          </div>
          <div className="text-xl font-bold">- Sagar Vishwakarma</div>
        </div>
      </section>

      {/* WhatsApp QR Section */}
      <section id="whatsapp" className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Connect With Us on WhatsApp</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Scan the QR code to start a conversation with us on WhatsApp</p>
          </div>
          
          <div className="flex flex-col items-center gap-5">
            <div className="w-48 h-48 bg-green-500 rounded-2xl flex items-center justify-center text-white text-8xl shadow-2xl">
              <i className="fab fa-whatsapp"></i>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scan this QR code with your phone&apos;s camera to open a WhatsApp chat with ShramikSetu. Get instant quotes, book services, and get your questions answered quickly!
            </p>
            <a href="https://wa.me/916268396616" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-4 rounded-full font-bold hover:bg-green-600 hover:-translate-y-1 transition-all flex items-center gap-2">
              <i className="fab fa-whatsapp"></i> Open WhatsApp Directly
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Get in touch with us to book a service or for any queries</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Call / WhatsApp</h3>
                  <p className="text-gray-600">6268396616</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-600">shramiksetu1@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-globe"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Website</h3>
                  <p className="text-gray-600">www.shramiksetu.com <span className="text-accent">(Launching Soon)</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Sunday: 7:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Founder</h3>
                  <p className="text-gray-600">Sagar Vishwakarma</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Book a Service</h3>
              <p className="text-gray-600 mb-6">Fill out the form below and we&apos;ll get back to you soon</p>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your name" required />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your phone number" required />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Required</label>
                  <select id="service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Any specific requirements or questions"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-accent text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-all flex items-center justify-center gap-2">
                  <i className="fas fa-paper-plane"></i> Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-5 text-primary">ShramikSetu</h3>
              <p className="text-gray-300 mb-4">Your trusted partner for professional cleaning, repair, and maintenance services. We bring quality and reliability to your doorstep!</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/916268396616" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-5 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#offers" className="text-gray-300 hover:text-primary transition-colors">Special Offers</a></li>
                <li><a href="#founder" className="text-gray-300 hover:text-primary transition-colors">Founder</a></li>
                <li><a href="#whatsapp" className="text-gray-300 hover:text-primary transition-colors">WhatsApp</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-5 text-primary">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Car Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Car Repair & Servicing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Home Deep Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sofa Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Fabrication Work</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Pest Control</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Water Tank Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Solar Panel Cleaning</a></li>
                <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Bike Wash & Polish</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-5 text-primary">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li><i className="fas fa-phone-alt mr-2"></i> 6268396616</li>
                <li><i className="fas fa-envelope mr-2"></i> shramiksetu1@gmail.com</li>
                <li><i className="fas fa-globe mr-2"></i> www.shramiksetu.com</li>
                <li><i className="fas fa-clock mr-2"></i> 7:00 AM - 7:00 PM</li>
                <li><i className="fas fa-user mr-2"></i> Founder: Sagar Vishwakarma</li>
                <li><i className="fas fa-map-marker-alt mr-2"></i> Serving All Major Cities</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2023 ShramikSetu. All Rights Reserved. | Founded by Sagar Vishwakarma | Your Helping Hand, Every Day!</p>
          </div>
        </div>
      </footer>
    </div>
  )
}