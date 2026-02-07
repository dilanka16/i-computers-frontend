import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UserData(){
    const [user , setuser] = useState(null);
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(token != null){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/users/", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response)=>{
                setuser(response.data);
            }).catch(()=>{
                setuser(null);
            })
        }
    },[])

    return (
        <>
        {
            user?
            <div>
                {user.firstName}

            </div>:
            <div>
                <Link to="/login" className="mx-2">Login</Link>
                <Link to="/register" className="mx-2">Register</Link>
            </div>
        }
        </>
    )
}