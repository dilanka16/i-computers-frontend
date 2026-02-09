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
      toast.error("First name is required");
      return;
    }
    if (lastName.trim() == "") {
      toast.error("Last name is required");
      return;
    }
    if (email.trim() == "") {
      toast.error("Email is required");
      return;
    }
    if (password.trim() == "") {
      toast.error("password is required");
      return;
    }
    if (confirmPassword.trim() == "") {
      toast.error("confirm password is required");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password do not match");
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
      toast.success("Registation Succesful! Welcome.");
      setisLoading(false);
      navigate("/login");
    } catch (err) {
      toast.error(
        "Registation failed! Please check your data and try again"
      );
      console.log(err);
      setisLoading(false);
    }
  }

  return (
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex">
      <div className="w-[50%] h-full flex justify-center items-center flex-col">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[200px] h-[200px] mb-20px object-cover"
        />
        <h1 className="text-[50px] text-blue-500 text-shadow-2xs text-center font-bold">
          Plug In. Power Up. Play Hard.
        </h1>
        <p className="text-[30px] text-white italic">
          Your Ultimate Destination for Gaming Gear
        </p>
      </div>

      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">
          <h1 className="text-[20px] font-semibold mb-[20px] text-white text-shadow-white">
            Register
          </h1>

          <input
            onChange={(e) => setFirtName(e.target.value)}
            type="text"
            placeholder="your first name"
            className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="your last name"
            className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="your email"
            className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="your password"
            className="w-full mb-[20px] h-[50px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="confirm your password"
            className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={register}
            className="w-full h-[50px] bg-accent text-white font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent"
          >
            Register Now
          </button>

          <p className="text-white not-italic">
            Already Have an Account?
            <Link to="/login" className="text-blue-500 italic ml-1">
              Login here
            </Link>
          </p>
        </div>
      </div>

      {isLoading && <Loader />}
    </div>
  );
}
