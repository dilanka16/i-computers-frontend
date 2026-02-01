import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ProductDeleteButton(props) {
    const productID = props.productID;
    const reload = props.reload;
    const [isMessageOpen , setIsMessageOpen] = useState(false)
    const [isDeleting , setIsDeleting] = useState(false);

    
    async function handleDelete(){
        setIsDeleting(true);
        // toast.success("Product Deleted Successfully "+productID);

        const token = localStorage.getItem("token")
                            axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + productID, {
                                headers: {
                                    Authorization: `Bearer ${token}`
                                }
                            }).then(
                                ()=>{
                                    toast.success("Product deleted successfully");
                                    setIsDeleting(false);
                                    setIsMessageOpen(false);
                                    reload();
                                }
                            ).catch(()=>{
                                toast.error("Failed to delete product");
                                setIsDeleting(false);
                            })
    }
    return (
        <>
        <button onClick={()=>{setIsMessageOpen(true)}} className="w-[100px] bg-red-500 flex justify-center items-center text-white p-2 rounded-lg cursor-pointer hover:bg-red-700">
            Delete
        </button>
        {isMessageOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white text-xl font-semibold">
    <div className="w-[600px] h-[300px] bg-primary rounded-2xl relative flex flex-col items-center justify-center">
        <button disabled={isDeleting} onClick={()=>{setIsMessageOpen(false)}} className="w-[40px] h-[40px] bg-red-600 rounded-full text-white text-xl font-bold cursor-pointer hover:bg-red-800 absolute right-[-32px] top-[-32px]">X</button>
        <h1 className="text-2xl mb-6 text-black text-center">Are you sure you want to delete product {productID}?</h1>
        <div className="w-full flex justify-center gap-10">
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Delete</button>
            <button onClick={()=>{setIsMessageOpen(false)}} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">Cancel</button>
        </div>
    </div>
    
  </div>
)}

        </>
        
    )
}

//  <button onClick={
//                         ()=>{
//                             const token = localStorage.getItem("token")
//                             axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID, {
//                                 headers: {
//                                     Authorization: `Bearer ${token}`
//                                 }
//                             }).then(
//                                 ()=>{
//                                     toast.success("Product deleted successfully");
//                                     setLoaded(false);
//                                 }
//                             )
//                         }
//                       } className="w-[100px] bg-red-500 flex justify-center items-center text-white p-2 rounded-lg cursor-pointer hover:bg-red-700">Delete</button>