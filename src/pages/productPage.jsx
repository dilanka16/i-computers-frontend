import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../components/loader";

export default function ProductPage(){

    const [products , setProducts] = useState([]);
    const [loaded , setLoaded] = useState(false);
    
    useEffect(()=>{
        if(!loaded){
             axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      });
        }

    },[])
    return(
        <div className="w-full h-[calc(100vh-100px)]">
            {
                !loaded?(<Loader/>):
                <div className="w-full flex justify-center p-4">
                    {
                        products.map(
                            (item)=>{
                                return(
                                    <div>
                                        <h1>{item.name}</h1>
                                        <img src={item.images[0]} className="w-32 h-32 object-contain" />
                                        <p>{item.description}</p>
                                    </div>
                                )

                            }
                        )
                    }
                    </div>

            }

        </div>
    )
}