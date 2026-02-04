import { useState } from "react"
import { addtoCart, getCart, getCartTotal } from "../utils/cart";
import { BsChevronUp } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CartPage(){
    const [cart , setCart] = useState(getCart());
    return(
        <div className="w-full flex flex-col items-center p-[20px]">
            {
                cart.map(
                    (item)=>{
                        return(
                            <div className="w-[50%] h-[150px] my-1 shadow-2xl rounded-xl overflow-hidden flex justify-between">
                                <img src={item.image} className="h-full aspect-square object-cover" />
                                <div className="flex flex-col justify-center pl-4 w-[300px]">
                                    <h1 className="text-2xl font-semibold relative hover:[&_.tooltip]:opacity-100">
                                        <span className="text-italic text-sm absolute bottom-[-50px] bg-accent text-white p-2 rounded-full opacity-0 tooltip rounded-lg">{item.name}</span>
                                        {
                                            item.name.length > 20 ?
                                            item.name.substring(0,20)+"...":
                                            item.name
                                        }</h1>
                                    {
                                        item.labelledPrice > item.price &&
                                        <h2 className="text-secondary/80 line-through decoration-gold/70 decoration-2 mr-2 text-lg">
                                            Rs. {item.labelledPrice.toFixed(2)}
                                        </h2>
                                    }
                                    <h2 className="text-xl text-accent font-semibold">Rs.{item.price.toFixed(2)}</h2>
                                    <h3 className="text-lg mt-2">{item.productID}</h3>
                                </div>
                                <div className="h-full flex flex-row items-center gap-4">
                                    <div className="h-full flex flex-col justify-center items-center">
                                        <BsChevronUp onClick={
                                            ()=>{
                                                addtoCart(item , 1);
                                                const newCart = getCart();
                                                setCart(newCart);
                                            }
                                        } className="text-2xl cursor-pointer hover:text-accent transition" />
                                        <span className="text-lg">{item.quantity}</span>
                                        <BsChevronUp onClick={
                                            ()=>{
                                                addtoCart(item , -1);
                                                const newCart = getCart();
                                                setCart(newCart);
                                            }
                                        } className="rotate-180 text-2xl cursor-pointer hover:text-accent transition" />

                                    </div>
                                    <span className="pr-4 text-lg font-semibold w-[150px] text-right">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                                   
                                </div>

                            </div>
                        )
                    }
                )
            }
            <div className="w-[50%] h-[150px] rounded-xl overflow-hidden shadow-2xl my-1 flex justify-between items-center">
                <Link to="/checkout" className="self-center ml-4 px-6 py-3 rounded bg-accent text-white hover:bg-accent/90 transition"
                state={
                    cart
                }
                >CheckOut</Link>
                <span className="pr-4 text-xl font-bold w-[150px] text-right">Rs. {getCartTotal().toFixed(2)}</span>
                
            </div>

        </div>
    )
}