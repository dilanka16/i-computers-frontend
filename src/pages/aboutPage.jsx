import { FaLaptop, FaShieldAlt, FaTruck, FaHeadset, FaStar, FaAward } from 'react-icons/fa';
import { MdComputer, MdSecurity, MdSupportAgent } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                        Welcome to <span className="text-yellow-400">I-COMPUTERS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
                        Your Trusted Partner in Technology Since 2010
                    </p>
                </div>
            </div>

            {/* Company Story Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            Founded in 2010, I-COMPUTERS has grown from a small local computer shop to one of the most trusted computer retailers in the region. We started with a simple mission: to provide high-quality computers and exceptional service at competitive prices.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                            Today, we're proud to serve thousands of satisfied customers, from individual users to large corporations, offering everything from custom-built gaming PCs to enterprise-level workstations.
                        </p>
                        <p className="text-lg text-gray-700">
                            Our team of certified technicians and sales professionals are passionate about technology and dedicated to helping you find the perfect solution for your needs.
                        </p>
                    </div>
                    <div className="relative">
                        <img 
                            src="/api/placeholder/600/400" 
                            alt="I-COMPUTERS Store" 
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-lg shadow-lg">
                            <p className="text-3xl font-bold text-gray-900">13+</p>
                            <p className="text-gray-800">Years of Excellence</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Why Choose I-COMPUTERS?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaLaptop className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Expert Consultation</h3>
                            <p className="text-gray-600">
                                Our experienced team provides personalized advice to help you choose the perfect computer for your needs.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaShieldAlt className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                            <p className="text-gray-600">
                                All our products come with comprehensive warranties and quality assurance from top brands.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaTruck className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                            <p className="text-gray-600">
                                Quick and reliable shipping with real-time tracking and secure packaging for all orders.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MdComputer className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Custom Builds</h3>
                            <p className="text-gray-600">
                                Custom-configured PCs tailored to your specific requirements, from gaming to professional workstations.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaHeadset className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                            <p className="text-gray-600">
                                Round-the-clock customer support and technical assistance whenever you need it.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaAward className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Certified Technicians</h3>
                            <p className="text-gray-600">
                                Our team holds industry certifications and undergoes regular training to stay current with latest technology.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-blue-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">10,000+</div>
                            <div className="text-blue-100">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">15,000+</div>
                            <div className="text-blue-100">Products Sold</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-blue-100">Brand Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">98%</div>
                            <div className="text-blue-100">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Meet Our Leadership Team
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src={`/api/placeholder/400/300`} 
                                alt={`Team Member ${item}`}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-1">John Doe</h3>
                                <p className="text-blue-600 mb-3">CEO & Founder</p>
                                <p className="text-gray-600">
                                    With over 20 years of experience in the tech industry, John leads our team with passion and expertise.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Brands Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        Brands We Work With
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                        {['Dell', 'HP', 'Lenovo', 'Apple', 'Microsoft', 'Asus'].map((brand) => (
                            <div key={brand} className="bg-white p-4 rounded-lg shadow text-center">
                                <p className="text-gray-700 font-semibold">{brand}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    What Our Customers Say
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="mr-1" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4">
                                "Excellent service and knowledgeable staff. They helped me build the perfect gaming PC within my budget. Highly recommended!"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                                <div>
                                    <p className="font-semibold">Sarah Johnson</p>
                                    <p className="text-gray-500 text-sm">Gaming Enthusiast</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Computer?</h2>
                    <p className="text-xl mb-8">
                        Visit our store or browse our online catalog today!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link 
                            to="/products" 
                            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                        >
                            Shop Now
                        </Link>
                        <Link 
                            to="/contact" 
                            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}