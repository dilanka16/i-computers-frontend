import axios from "axios";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const products = []

export default function AdminProductsPage(){
    const [products , setProducts] = useState([])
    axios.get(import.meta.env.VITE_BACKEND_URL + "/products").then(
        (response) => {
            console.log(response.data);
            setProducts(response.data)
        }
    )
    return(
        <div className="w-full max-h-full flex justify-center p-10 relative">
            <table>
                <thead className="h-[100px]">
                     <tr>
                        <th>Images</th>
                        <th>Product ID</th>
                         <th>Name</th>
                          <th>Price</th>
                           <th>Labelled Price</th>
                            <th>Category</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Stock</th>
                            <th>Availability</th>
                        </tr>   
                </thead>
                <tbody>
                    {
                        products.map(
                            (item,index)=>{
                                return (
                                    <tr key={index}>
                        <td><img src={item.images[0]} className="w-[30px] h-[30px]" /></td>
                        <td>{item.productID}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.labelledPrice}</td>
                        <td>{item.category}</td>
                        <td>{item.brand}</td>
                        <td>{item.model}</td>
                        <td>{item.stock}</td>
                        <td>{item.isAvailable}</td>
                        
                    </tr>
                                )
                            }
                        )
                    }

                </tbody>
            </table>

            <Link to="/admin/add-product" className="fixed right-[20px] bottom-[20px] w-[50px] h-[50px] flex justify-center items-center text-6xl border-[2px] rounded-full hover:text-white hover:bg-accent text-accent border-accent"><BiPlus /></Link>
        </div>
    )
}