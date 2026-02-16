import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/loader";

export default function RegisterPage() {
  const [firstName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const navigate = useNavigate();

  async function register() {
    if (firstName.trim() == "") {
      toast.error("First name is required", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }
    if (lastName.trim() == "") {
      toast.error("Last name is required", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }
    if (email.trim() == "") {
      toast.error("Email is required", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }
    if (password.trim() == "") {
      toast.error("password is required", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }
    if (confirmPassword.trim() == "") {
      toast.error("confirm password is required", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password do not match", {
        style: {
          background: '#1f2937',
          color: '#fff',
          border: '1px solid #374151'
        }
      });
      return;
    }

    setisLoading(true);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/users/",
        {
          email: email.trim(),
          password: password.trim(),
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }
      );

      console.log(res);
      toast.success("Registration Successful! Welcome.", {
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
      setisLoading(false);
      navigate("/login");
    } catch (err) {
      toast.error(
        "Registration failed! Please check your data and try again", {
          style: {
            background: '#1f2937',
            color: '#fff',
            border: '1px solid #374151'
          }
        }
      );
      console.log(err);
      setisLoading(false);
    }
  }

  return (
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

      {/* Right Section - Registration Form */}
      <div className="w-full lg:w-1/2 min-h-screen flex justify-center items-center p-4 relative z-10">
        <div className="w-full max-w-[450px]">
          {/* Form Container with Glass Effect */}
          <div className="relative group">
            {/* Decorative gradient background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
            
            {/* Form */}
            <div className="relative bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/50 border border-gray-700 p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Create Account
                </h1>
                <p className="text-gray-400">Join our gaming community</p>
              </div>

              {/* First Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  onChange={(e) => setFirtName(e.target.value)}
                  type="text"
                  placeholder="John"
                  value={firstName}
                  className="w-full h-[45px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                />
              </div>

              {/* Last Name Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Doe"
                  value={lastName}
                  className="w-full h-[45px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="john.doe@example.com"
                  value={email}
                  className="w-full h-[45px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  className="w-full h-[45px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                />
                <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
              </div>

              {/* Confirm Password Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  className="w-full h-[45px] px-4 rounded-lg bg-gray-700/50 border border-gray-600 text-gray-200 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition"
                />
              </div>

              {/* Password Strength Indicator (Optional) */}
              {password && (
                <div className="mb-4">
                  <div className="flex gap-1 h-1">
                    <div className={`flex-1 rounded-full transition-colors ${
                      password.length >= 8 ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                    <div className={`flex-1 rounded-full transition-colors ${
                      /[A-Z]/.test(password) ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                    <div className={`flex-1 rounded-full transition-colors ${
                      /[0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                    <div className={`flex-1 rounded-full transition-colors ${
                      /[^A-Za-z0-9]/.test(password) ? 'bg-green-500' : 'bg-gray-600'
                    }`}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Password strength: {
                      [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^A-Za-z0-9]/.test(password)]
                        .filter(Boolean).length <= 1 ? 'Weak' :
                      [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password), /[^A-Za-z0-9]/.test(password)]
                        .filter(Boolean).length <= 3 ? 'Medium' : 'Strong'
                    }
                  </p>
                </div>
              )}

              {/* Register Button */}
              <button
                onClick={register}
                className="w-full h-[50px] mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-purple-500/30"
              >
                Create Account
              </button>

              {/* Terms and Conditions */}
              <p className="text-xs text-gray-500 text-center mb-4">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>
              </p>

              {/* Login Link */}
              <p className="text-center text-gray-400">
                Already have an account?{" "}
                <Link 
                  to="/login" 
                  className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Branding (visible only on mobile) */}
      <div className="lg:hidden absolute top-8 left-0 right-0 text-center z-10">
        <img 
          src="/logo.png" 
          alt="logo" 
          className="w-[80px] h-[80px] mx-auto mb-2" 
        />
        <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
          Join Gaming Gear Hub
        </h2>
      </div>

      {/* Loader */}
      {isLoading && <Loader />}

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
  );
}