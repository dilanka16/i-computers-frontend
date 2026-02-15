import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdSend } from 'react-icons/md';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                        Contact <span className="text-yellow-400">I-COMPUTERS</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto">
                        We're Here to Help You With All Your Tech Needs
                    </p>
                </div>
            </div>

            {/* Contact Information Cards */}
            <div className="max-w-7xl mx-auto px-4 -mt-16 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Address Card */}
                    <div className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMapMarkerAlt className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                        <p className="text-gray-600">
                            123 Tech Street<br />
                            Silicon Valley, CA 94025<br />
                            United States
                        </p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaPhone className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-600">
                            Sales: +1 (555) 123-4567<br />
                            Support: +1 (555) 765-4321<br />
                            Fax: +1 (555) 987-6543
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaEnvelope className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-600">
                            info@icomputers.com<br />
                            sales@icomputers.com<br />
                            support@icomputers.com
                        </p>
                    </div>

                    {/* Hours Card */}
                    <div className="bg-white rounded-lg shadow-xl p-6 text-center hover:shadow-2xl transition-shadow">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaClock className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                            Mon-Fri: 9:00 AM - 8:00 PM<br />
                            Sat: 10:00 AM - 6:00 PM<br />
                            Sun: 12:00 PM - 5:00 PM
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Contact Section */}
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        <p className="text-gray-600 mb-8">
                            Have a question or need assistance? Fill out the form below and we'll get back to you within 24 hours.
                        </p>

                        {isSubmitted && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                                Thank you for your message! We'll get back to you soon.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="sales">Sales Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="repair">Repair Service</option>
                                        <option value="custom">Custom Build</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                            >
                                <MdSend className="text-xl" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map and Additional Info */}
                    <div className="space-y-8">
                        {/* Map */}
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden h-96">
                            <iframe
                                title="I-COMPUTERS Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639671330539!2d-122.0838536846923!3d37.42199977982369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba024d5e2b8b%3A0x6a8a5e5d5b5f5b5f!2sGoogleplex!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="grayscale hover:grayscale-0 transition-all"
                            ></iframe>
                        </div>

                        {/* Quick Support Options */}
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Support Options</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                                    <div className="bg-blue-600 text-white p-3 rounded-full">
                                        <FaHeadset className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">24/7 Technical Support</h4>
                                        <p className="text-gray-600 text-sm">
                                            Our technical team is available 24/7 for emergency support
                                        </p>
                                        <p className="text-blue-600 font-semibold mt-2">+1 (555) 765-4321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
                                    <div className="bg-green-600 text-white p-3 rounded-full">
                                        <FaLaptop className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Live Chat Support</h4>
                                        <p className="text-gray-600 text-sm">
                                            Chat with our representatives in real-time
                                        </p>
                                        <button className="text-green-600 font-semibold mt-2 hover:underline">
                                            Start Live Chat →
                                        </button>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                                    <div className="bg-purple-600 text-white p-3 rounded-full">
                                        <MdComputer className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Remote Assistance</h4>
                                        <p className="text-gray-600 text-sm">
                                            Let our experts help you remotely
                                        </p>
                                        <button className="text-purple-600 font-semibold mt-2 hover:underline">
                                            Request Remote Access →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Links */}
                        <div className="bg-white rounded-lg shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h3>
                            <p className="text-gray-600 mb-6">
                                Follow us on social media for the latest updates, deals, and tech news
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a href="#" className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                                    <FaTwitter className="text-xl" />
                                </a>
                                <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                                    <FaInstagram className="text-xl" />
                                </a>
                                <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors">
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a href="#" className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors">
                                    <FaYoutube className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 text-center mb-12">
                        Quick answers to common questions
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                q: "What are your shipping options?",
                                a: "We offer free standard shipping on orders over $100, and expedited shipping options available at checkout."
                            },
                            {
                                q: "Do you offer international shipping?",
                                a: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location."
                            },
                            {
                                q: "What is your return policy?",
                                a: "We offer a 30-day return policy on most items. Products must be in original condition with all accessories."
                            },
                            {
                                q: "Do you provide technical support?",
                                a: "Yes, our technical support team is available 24/7 via phone, email, and live chat."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-xl mb-8">
                        Subscribe to our newsletter for exclusive deals and tech updates
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                            Subscribe Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}