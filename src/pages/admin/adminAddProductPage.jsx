import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import toast from "react-hot-toast";
import axios from "axios";
import uploadFile from "../../utils/mediaUpload";

export default function AdminProductPage() {

    const [productID , setProductID] = useState("");
    const [name , setName] = useState("");
    const [altNames , setAltNames] = useState("");
    const [desciption , setDesciption] = useState("");
    const [price , setPrice] = useState(0);
    const [labelledPrice , setLabelledPrice] = useState(0);
    const [files , setFiles] = useState([]);
    const [category , setCategory] = useState("");
    const [brand , setBrand] = useState("");
    const [model , setModel] = useState("");
    const [stock , setStock] = useState(0);
    const [isAvailable , setIsAvailable] = useState(false);

    const navigate = useNavigate();

    async function addProduct(){
        const token = localStorage.getItem("token")
        if(token == null){
            toast.error("You must be logged in as admin to add products.");
            navigate("/login");
            return;
        }
        console.log(files);

const imagePromises = [];

for(let i=0; i<files.length; i++){
    const promise = uploadFile(files[i]);
    imagePromises.push(promise);
}
const images = await Promise.all(imagePromises).catch((err)=>{
    toast.error("Error uploading images. Please try again.");
    console.log("Error uploading images");
    console.log(err);
    return;
})





        if(productID=="" || name=="" || desciption=="" || price=="" || category==""){
            toast.error("Please fill in all required fields.");
            return;
        }
        try{
            const altNamesInArray = altNames.split(",")
           
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/",{
                productID : productID,
                name : name,
                altNames : altNamesInArray,
                desciption : desciption,
                price : price,
                labelledPrice : labelledPrice,
                images : images,
                category : category,
                brand : brand,
                model : model,
                stock : stock,
                isAvailable : isAvailable,
            },{
                headers : {
                    Authorization : "Bearer " +token
                }
            })
            toast.success("Product added succesfully!");
            navigate("/admin/products");

        }catch(err){
            toast.error("Error adding product.Please try again");
            console.log("Error adding product:");
            console.log(err);
        }

    }

    return(
        <div className="w-full min-h-screen flex justify-center items-start bg-gray-100 py-12 overflow-y-auto">
            <div className="w-[900px] bg-white rounded-3xl p-10 shadow-xl">
                
                <h1 className="text-3xl font-bold text-center text-accent mb-8 flex items-center gap-[5px]">
                    <AiOutlineProduct />Add New Product
                </h1>

                <div className="w-full grid grid-cols-2 gap-6">

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Product ID</label>
                        <input
                            type="text"
                            value={productID}
                            onChange={(e)=>{setProductID(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <p className="text-xs text-gray-500 text-right mt-1">
                            Provide a unique product ID
                        </p>
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block font-semibold mb-1">Alternative Names</label>
                        <input
                            type="text"
                            value={altNames}
                            onChange={(e)=>{setAltNames(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        <p className="text-xs text-gray-500 text-right mt-1">
                            Separate multiple names with commas
                        </p>
                    </div>

                    <div className="col-span-2">
                        <label className="block font-semibold mb-1">Description</label>
                        <textarea
                            value={desciption}
                            onChange={(e)=>{setDesciption(e.target.value)}}
                            className="w-full h-28 rounded-xl border border-accent px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Price</label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e)=>{setPrice(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Labelled Price</label>
                        <input
                            type="number"
                            value={labelledPrice}
                            onChange={(e)=>{setLabelledPrice(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-2">
                        <label className="block font-semibold mb-1">Images</label>
                        <input
                            type="file"
                            multiple={true}
                            onChange={(e)=>{setFiles(e.target.files);

                            }}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Category</label>
                        <select
                            value={category}
                            onChange={(e)=> setCategory(e.target.value)}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                            <option value="CPU">CPU</option>
                            <option value="Graphic Card">Graphic Card</option>
                            <option value="RAM">RAM</option>
                            <option value="Mother Board">Mother Board</option>
                            <option value="Power Supply">Power Supply</option>
                            <option value="Storage Devices">Storage Devices</option>
                            <option value="Cooling Solution">Cooling Solution</option>
                            <option value="Computer Case">Computer Case</option>
                            <option value="Mouse & Keyboard">Mouse & Keyboard</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Monitor">Monitor</option>
                            <option value="Computer">Computer</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cables">Cables</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Brand</label>
                        <input
                            type="text"
                            value={brand}
                            onChange={(e)=>{setBrand(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Model</label>
                        <input
                            type="text"
                            value={model}
                            onChange={(e)=>{setModel(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block font-semibold mb-1">Stock</label>
                        <input
                            type="number"
                            value={stock}
                            onChange={(e)=>{setStock(e.target.value)}}
                            className="w-full h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                    </div>

                    <div className="col-span-2 flex flex-col items-center">
                        <label className="block font-semibold mb-1">Available</label>
                        <select
                            value={isAvailable}
                            onChange={(e)=> setIsAvailable(e.target.value)}
                            className="w-1/2 h-10 rounded-xl border border-accent px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                            <option value="true">YES</option>
                            <option value="false">NO</option>
                        </select>
                    </div>

                    <div className="col-span-2 flex gap-4 mt-6">
                        <Link
                            to="/admin/products"
                            className="w-1/2 h-12 bg-red-500 hover:bg-red-700 transition text-black font-bold text-lg rounded-xl flex justify-center items-center"
                        >
                            Cancel
                        </Link>

                        <button onClick={addProduct}
                            className="w-1/2 h-12 bg-accent hover:bg-white hover:text-accent border-2 border-accent transition text-white font-bold text-lg rounded-xl"
                        >
                            Add Product
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
