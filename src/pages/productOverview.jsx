import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";

export default function ProductOverview() {
    const params = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (status == "loading") {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productID)
                .then((response) => {
                    setProduct(response.data);
                    setStatus("success");
                })
                .catch((error) => {
                    toast.error("Product Not Found");
                    setStatus("error");
                });
        }
    }, []);

    return (
        <>
            {status == "loading" && <Loader />}

            {status == "error" && (
                <h1 className="text-center mt-10 text-2xl">
                    Error Loading Product.
                </h1>
            )}

            {status == "success" && (
                <div className="w-full h-[calc(100vh-100px)] flex">
                    <div className="w-1/2 h-full  flex justify-center items-center">
                    <img src={product.images[0]} className="max-w-[80%] object-contain"/>
                    </div>
                    <div>
                        <h1 className="text-4xl font-semibold">{product.name}</h1>
                    </div>
                </div>
            )}
        </>
    );
}
