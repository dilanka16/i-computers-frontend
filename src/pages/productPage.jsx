import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../components/loader";
import Productcard from "../components/productCard";

export default function ProductPage(){

    const [products , setProducts] = useState([]);
    const [loaded , setLoaded] = useState(false);
    const [showSocialIcons, setShowSocialIcons] = useState(false);
    
    
    useEffect(()=>{
        if(!loaded){
             axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      });
        }

    },[])
    return(
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 relative">
            {
                !loaded?(<Loader/>):
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Sticky Search Header */}
                    <div className="sticky top-4 z-20 mb-8 animate-slideDown">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative group">
                                {/* Decorative gradient background */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                                
                                {/* Search input container */}
                                <div className="relative bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-lg shadow-black/50 border border-gray-700">
                                    <div className="flex items-center px-6 py-3">
                                        {/* Search icon */}
                                        <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        
                                        <input
                                            type="text"
                                            placeholder="Search for amazing products..."
                                            className="flex-1 py-3 bg-transparent text-gray-100 placeholder-gray-500 outline-none text-lg"
                                            onChange={async (e)=>{
                                                if(e.target.value==""){
                                                    setLoaded(false);
                                                    await axios
                                                    .get(import.meta.env.VITE_BACKEND_URL + "/products")
                                                    .then((response) => {
                                                        console.log(response.data);
                                                        setProducts(response.data);
                                                        setLoaded(true);
                                                    });
                                                    setLoaded(true);
                                                }else{
                                                    await axios.get(import.meta.env.VITE_BACKEND_URL + "/products/search/" + e.target.value).then(
                                                        (response)=>{
                                                            console.log(response.data);
                                                            setProducts(response.data);
                                                        }
                                                    )
                                                    setLoaded(true);
                                                }
                                            }}
                                        />
                                        
                                        {/* Optional: Clear button (appears when typing) */}
                                        {products.length > 0 && (
                                            <button 
                                                onClick={async () => {
                                                    setLoaded(false);
                                                    await axios.get(import.meta.env.VITE_BACKEND_URL + "/products")
                                                        .then((response) => {
                                                            setProducts(response.data);
                                                            setLoaded(true);
                                                        });
                                                }}
                                                className="ml-3 p-2 hover:bg-gray-700 rounded-full transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Results count */}
                            <div className="mt-3 text-sm text-gray-400 text-center">
                                {products.length} {products.length === 1 ? 'product' : 'products'} found
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="relative">
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                        </div>

                        {/* Products container */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                            {products.map((item, index) => (
                                <div 
                                    key={item.productID} 
                                    className="animate-fadeInUp"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <Productcard product={item} />
                                </div>
                            ))}
                        </div>

                        {/* Empty state */}
                        {products.length === 0 && (
                            <div className="text-center py-20">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 mb-6">
                                    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-300 mb-2">No products found</h3>
                                <p className="text-gray-500">Try adjusting your search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            }
            
            {/* Chat/Social Media Icons - Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
                {/* Social Icons (hidden by default, shown on hover) */}
                <div 
                    className={`flex flex-col space-y-2 transition-all duration-300 transform ${
                        showSocialIcons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
                    }`}
                >
                    {/* WhatsApp */}
                    <a 
                        href="https://wa.me/your-number" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-end space-x-2"
                    >
                        <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                            WhatsApp
                        </span>
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2ZM12.05 20.15C10.52 20.15 9.02 19.74 7.71 18.96L7.41 18.79L4.43 19.64L5.3 16.78L5.11 16.47C4.27 15.12 3.84 13.58 3.84 11.91C3.84 7.4 7.53 3.71 12.04 3.71C16.55 3.71 20.24 7.4 20.24 11.91C20.24 16.42 16.55 20.15 12.05 20.15ZM16.23 13.77C15.96 13.63 14.77 13.04 14.52 12.94C14.27 12.84 14.09 12.79 13.9 13.06C13.71 13.33 13.13 14.16 12.97 14.36C12.81 14.56 12.65 14.58 12.38 14.44C11.05 13.82 9.92 12.95 9.1 12.04C8.84 11.76 9.02 11.51 9.17 11.37C9.31 11.23 9.48 11.01 9.63 10.83C9.78 10.65 9.84 10.51 9.97 10.28C10.1 10.05 10.04 9.86 9.95 9.72C9.86 9.58 9.27 8.38 9.05 7.9C8.83 7.42 8.6 7.49 8.43 7.48C8.27 7.47 8.08 7.47 7.89 7.47C7.7 7.47 7.4 7.54 7.14 7.82C6.88 8.1 6.13 8.81 6.13 10.26C6.13 11.71 7.14 13.11 7.29 13.31C7.44 13.51 9.2 16.24 11.94 17.41C12.77 17.78 13.4 17.99 13.9 18.15C14.97 18.5 15.94 18.42 16.73 18.23C17.62 18.02 19.01 17.14 19.25 16.17C19.49 15.2 19.49 14.37 19.4 14.17C19.31 13.97 19.07 13.85 16.23 13.77Z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Facebook */}
                    <a 
                        href="https://facebook.com/your-page" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-end space-x-2"
                    >
                        <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                            Facebook
                        </span>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                            </svg>
                        </div>
                    </a>

                    {/* Instagram */}
                    <a 
                        href="https://instagram.com/your-profile" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-end space-x-2"
                    >
                        <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">
                            Instagram
                        </span>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                            </svg>
                        </div>
                    </a>
                </div>

                {/* Main Chat Button */}
                <button
                    onClick={() => setShowSocialIcons(!showSocialIcons)}
                    onMouseEnter={() => setShowSocialIcons(true)}
                    onMouseLeave={() => setShowSocialIcons(false)}
                    className="group relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                >
                    {/* Ripple effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
                    
                    {/* Chat icon */}
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>

                    {/* Tooltip */}
                    <span className="absolute right-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Contact Us
                    </span>
                </button>
            </div>

            {/* Price Display Enhancement Styles - Added to make prices more visible */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }
                
                .animate-slideDown {
                    animation: slideDown 0.5s ease-out;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                /* Global styles to ensure prices are visible in Productcard component */
                :global(.product-card .price) {
                    color: #fbbf24 !important;
                    font-weight: 700 !important;
                    font-size: 1.5rem !important;
                    text-shadow: 0 2px 4px rgba(0,0,0,0.3) !important;
                }

                :global(.product-card .original-price) {
                    color: #9ca3af !important;
                    text-decoration: line-through !important;
                }

                :global(.product-card .discount-badge) {
                    background: linear-gradient(135deg, #ef4444, #dc2626) !important;
                    color: white !important;
                    font-weight: 600 !important;
                    padding: 0.25rem 0.75rem !important;
                    border-radius: 9999px !important;
                    font-size: 0.875rem !important;
                }

                /* Enhanced product card styling */
                :global(.product-card) {
                    background: linear-gradient(145deg, #1f2937, #111827) !important;
                    border: 1px solid #374151 !important;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5) !important;
                }

                :global(.product-card:hover) {
                    border-color: #4f46e5 !important;
                    box-shadow: 0 20px 30px -10px rgba(79, 70, 229, 0.3) !important;
                }

                :global(.product-title) {
                    color: #f3f4f6 !important;
                    font-weight: 600 !important;
                }

                :global(.product-description) {
                    color: #9ca3af !important;
                }
            `}</style>
        </div>
    )
}