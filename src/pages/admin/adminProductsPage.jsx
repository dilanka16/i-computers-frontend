import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";
import ProductDeleteButton from "../../components/productDeleteButton";



export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [loaded , setLoaded] = useState(false);

  useEffect(() => {
    if(!loaded){
        axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      });
    }
    
  }, [loaded]);

  return (
    <div className="w-full h-full p-10 bg-primary flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          {loaded?<table className="w-full text-sm text-left text-secondary">
            <thead className="bg-secondary text-white sticky top-0 z-10">
              <tr className="h-[60px]">
                <th className="px-4">Image</th>
                <th className="px-4">Product ID</th>
                <th className="px-4">Name</th>
                <th className="px-4">Price</th>
                <th className="px-4">Labelled Price</th>
                <th className="px-4">Category</th>
                <th className="px-4">Brand</th>
                <th className="px-4">Model</th>
                <th className="px-4">Stock</th>
                <th className="px-4">Availability</th>
                <th className="px-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-primary transition duration-200"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={item.images[0]}
                        className="w-[40px] h-[40px] object-cover rounded-md border"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium">
                      {item.productID}
                    </td>
                    <td className="px-4 py-3">{item.name}</td>
                    <td className="px-4 py-3 font-semibold">
                      Rs.{item.price}
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      Rs.{item.labelledPrice}
                    </td>
                    <td className="px-4 py-3">{item.category}</td>
                    <td className="px-4 py-3">{item.brand}</td>
                    <td className="px-4 py-3">{item.model}</td>
                    <td className="px-4 py-3">{item.stock}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.isAvailable
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.isAvailable ? "Available" : "Unavailable"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-accent cursor-pointer hover:underline">
                     <ProductDeleteButton productID = {item.productID} reload={()=>{setLoaded(false)}} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>:<Loader />}
        </div>
      </div>

      <Link
        to="/admin/add-product"
        className="fixed right-6 bottom-6 w-[56px] h-[56px] flex justify-center items-center text-3xl rounded-full bg-accent text-white shadow-lg hover:scale-110 transition-all duration-300"
      >
        <BiPlus />
      </Link>
    </div>
  );
}
