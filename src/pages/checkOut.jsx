import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsChevronUp } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [cart, setCart] = useState(location.state);
   
    if (location.state == null) {
        navigate("/products");
    }

    function getCartTotal() {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }

    async function submitorder() {

            const token = localStorage.getItem("token");
            if(token == null){
                toast.error("You must be logged in to place an order");
                navigate("/login");
                return;
            }
            const orderItems = []
            cart.forEach((item)=>{
                orderItems.push({
                    productID : item.productID,
                    quantity : item.quantity
                })
            })

            axios.post(import.meta.env.VITE_BACKEND_URL + "/orders",{
                name: name,
                address: address,
                phone: phone,
                items : orderItems
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        ).then((response)=>{
            toast.success("Order placed successfully");
            navigate("/orders");

        }).catch((error)=>{
            toast.error("Error placing order");
        })
    }

    return (
        <div className="w-full min-h-screen flex flex-col items-center gap-6 px-4 py-10 bg-secondary/5">
            {cart.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="w-full max-w-5xl bg-white rounded-2xl shadow-lg hover:shadow-xl transition flex overflow-hidden"
                    >
                        <img
                            src={item.image}
                            className="w-[150px] h-[150px] object-cover"
                        />

                        <div className="flex flex-col justify-center px-6 flex-1">
                            <h1 className="text-lg font-semibold relative hover:[&_.tooltip]:opacity-100">
                                <span className="tooltip absolute -bottom-10 left-0 bg-accent text-white text-xs px-3 py-1 rounded-lg opacity-0 transition whitespace-nowrap z-10">
                                    {item.name}
                                </span>
                                {item.name.length > 20
                                    ? item.name.substring(0, 20) + "..."
                                    : item.name}
                            </h1>

                            {item.labelledPrice > item.price && (
                                <h2 className="text-sm text-secondary/60 line-through">
                                    Rs. {item.labelledPrice.toFixed(2)}
                                </h2>
                            )}

                            <h2 className="text-lg font-bold text-accent">
                                Rs. {item.price.toFixed(2)}
                            </h2>

                            <h3 className="text-xs text-secondary/50 mt-1">
                                {item.productID}
                            </h3>
                        </div>

                        <div className="flex items-center gap-6 pr-6">
                            <div className="flex flex-col items-center gap-1">
                                <BsChevronUp
                                    onClick={() => {
                                        const copiedCart = [...cart];
                                        copiedCart[index].quantity += 1;
                                        setCart(copiedCart);
                                    }}
                                    className="text-xl cursor-pointer hover:text-accent transition"
                                />
                                <span className="text-lg font-semibold">
                                    {item.quantity}
                                </span>
                                <BsChevronUp
                                    onClick={() => {
                                        const copiedCart = [...cart];
                                        copiedCart[index].quantity = 1;
                                        if (copiedCart[index].quantity < 1) {
                                            copiedCart.splice(index, 1);
                                        }
                                        setCart(copiedCart);
                                    }}
                                    className="rotate-180 text-xl cursor-pointer hover:text-accent transition"
                                />
                            </div>

                            <span className="text-right text-lg font-semibold min-w-[120px]">
                                Rs. {(item.price * item.quantity).toFixed(2)}
                            </span>
                        </div>
                    </div>
                );
            })}

            {/* Customer Details */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-secondary">
                        Name
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-secondary">
                        Phone
                    </label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition"
                    />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                    <label className="text-sm font-medium text-secondary">
                        Address
                    </label>
                    <textarea
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition w-full resize-none"
                        rows={3}
                    />
                </div>
            </div>

            {/* Order Summary */}
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
                <button onClick={submitorder} className="px-8 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-accent/90 active:scale-95 transition">
                    Order Now
                </button>

                <span className="text-2xl font-bold text-right">
                    Rs. {getCartTotal().toFixed(2)}
                </span>
            </div>
        </div>
    );
}
