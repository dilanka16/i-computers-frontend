import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../components/loader";
import Productcard from "../components/productCard";

export default function ProductPage(){

    const [products , setProducts] = useState([]);
    const [loaded , setLoaded] = useState(false);
    
    
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {
                !loaded?(<Loader/>):
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Sticky Search Header */}
                    <div className="sticky top-4 z-20 mb-8 animate-slideDown">
                        <div className="max-w-3xl mx-auto">
                            <div className="relative group">
                                {/* Decorative gradient background */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                                
                                {/* Search input container */}
                                <div className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50">
                                    <div className="flex items-center px-6 py-3">
                                        {/* Search icon */}
                                        <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                        
                                        <input
                                            type="text"
                                            placeholder="Search for amazing products..."
                                            className="flex-1 py-3 bg-transparent text-gray-700 placeholder-gray-400 outline-none text-lg"
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
                                                className="ml-3 p-2 hover:bg-gray-100 rounded-full transition-colors"
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
                            <div className="mt-3 text-sm text-gray-500 text-center">
                                {products.length} {products.length === 1 ? 'product' : 'products'} found
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="relative">
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
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
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
                                <p className="text-gray-500">Try adjusting your search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            }
            
            {/* Add custom keyframes for animations */}
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
            `}</style>
        </div>
    )
}