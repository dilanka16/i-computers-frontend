import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GrGoogle } from "react-icons/gr";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage(){

    const [ email , setEmail ] = useState("");
    const [ password , setPassword ] = useState("");
    const navigate = useNavigate()
    const googleLogin = useGoogleLogin({
        onSuccess: (response)=>{
            axios.post(import.meta.env.VITE_BACKEND_URL + "/users/google-login",{
                token: response.access_token,
            }).then((res)=>{
                localStorage.setItem("token", res.data.token);
                if(res.data.role == "admin") {
                    navigate("/admin");
                    toast.success("Admin login successful!", {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                            border: '1px solid #374151'
                        },
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        }
                    });
                }else{
                    navigate("/")
                    toast.success("Login successful! Welcome back.", {
                        style: {
                            background: '#1f2937',
                            color: '#fff',
                            border: '1px solid #374151'
                        },
                        iconTheme: {
                            primary: '#10b981',
                            secondary: '#fff',
                        }
                    });
                }
            }).catch((err)=>{
                console.log(err);
                toast.error("Google login failed. Please try again.", {
                    style: {
                        background: '#1f2937',
                        color: '#fff',
                        border: '1px solid #374151'
                    }
                });
            })
        },
        onError: ()=> { 
            toast.error("Google Login Failed", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #374151'
                }
            });
        },
        onNonOAuthError: ()=> {
            toast.error("Google Login Failed", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #374151'
                }
            });
        },
    })

    async function login(){
        console.log("Email:", email);
        console.log("Password:", password);

        try{
             const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
            email : email,
            password : password
        })
        console.log(res);

        localStorage.setItem("token", res.data.token);

        if(res.data.role == "admin"){
            navigate("/admin");
            toast.success("Admin login successful!", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #374151'
                },
                iconTheme: {
                    primary: '#10b981',
                    secondary: '#fff',
                }
            });
        }else{
            navigate("/");
            toast.success("Login successful! Welcome back.", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #374151'
                },
                iconTheme: {
                    primary: '#10b981',
                    secondary: '#fff',
                }
            });
        }

        }catch(err){
           toast.error("Login failed! Please check your credentials and try again", {
                style: {
                    background: '#1f2937',
                    color: '#fff',
                    border: '1px solid #374151'
                }
            });
            console.log("Error during login:");
            console.log(err);
        }
    }

    return(
        <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>

            {/* Left Section - Branding */}
            <div className="hidden lg:flex w-1/2 h-screen flex-col justify-center items-center relative z-10">
                <div className="relative group">
                    {/* Logo with glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-300"></div>
                    <img 
                        src="/logo.png" 
                        alt="logo" 
                        className="relative w-[250px] h-[250px] object-cover mb-8 animate-float" 
                    />
                </div>
                
                <h1 className="text-4xl lg:text-5xl text-center font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Plug In. Power Up.
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Play Hard.
                    </span>
                </h1>
                
                <p className="text-xl text-gray-300 italic text-center max-w-lg">
                    Your Ultimate Destination for Gaming Gear
                </p>

                {/* Feature list */}
                <div className="mt-12 space-y-4">
                    {[
                        "🎮 Premium Gaming Equipment",
                        "⚡ Fast Delivery",
                        "🛡️ 1 Year Warranty",
                        "💎 Best Price Guarantee"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 text-gray-300">
                            <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></span>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="w-full lg:w-1/2 min-h-screen flex justify-center items-center p-4 relative z-10">
                <div className="w-full max-w-[450px]">
                    {/* Form Container with Glass Effect */}
                    <div className="relative group">
                        {/* Decorative gradient background */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                        
                        {/* Form */}
                        <div className="relative bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/50 border border-gray-700 p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    Welcome Back
                                </h1>
                                <p className="text-gray-400">Please login to your account</p>
                            </div>

                            {/* Email Input */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="your@email.com"
                                    value={email}
                                    className="w-full h-[50px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="mb-2">
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    className="w-full h-[50px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                                />
                            </div>

                            {/* Forgot Password Link */}
                            <div className="text-right mb-6">
                                <Link 
                                    to="/forgot-password" 
                                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                >
                                    Forgot your password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <button
                                onClick={login}
                                className="w-full h-[50px] mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30"
                            >
                                Login
                            </button>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
                                </div>
                            </div>

                            {/* Google Login Button */}
                            <button
                                onClick={googleLogin}
                                className="w-full h-[50px] bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                <GrGoogle className="text-xl group-hover:rotate-12 transition-transform" />
                                Login with Google
                            </button>

                            {/* Register Link */}
                            <p className="text-center mt-6 text-gray-400">
                                Don't have an account?{" "}
                                <Link 
                                    to="/register" 
                                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                                >
                                    Register here
                                </Link>
                            </p>

                            {/* Demo Credentials (Optional) */}
                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <p className="text-xs text-gray-500 text-center">
                                    Demo: user@example.com / password123
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Branding (visible only on mobile) */}
            <div className="lg:hidden absolute top-8 left-0 right-0 text-center z-10">
                <img 
                    src="/logo.png" 
                    alt="logo" 
                    className="w-[100px] h-[100px] mx-auto mb-2" 
                />
                <h2 className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Gaming Gear Hub
                </h2>
            </div>

            {/* Animation Keyframes */}
            <style jsx>{`
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
                
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }
                
                .animate-blob {
                    animation: blob 7s infinite;
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    )
}