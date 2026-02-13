import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Loader from "../../components/loader";
import { MdOutlineVerified } from "react-icons/md";




export default function AdminUsersPage() {
    
  const [users, setUsers] = useState([]);
  const [loaded , setLoaded] = useState(false);

  useEffect(() => {
    if(!loaded){
        axios
      .get(import.meta.env.VITE_BACKEND_URL + "/users/all" , {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
        }
      })
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
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
                <th className="px-4">Email</th>
                <th className="px-4">First Name</th>
                <th className="px-4">Last Name</th>
                <th className="px-4">Role</th>
                <th className="px-4">Satatus</th>
                <th className="px-4">Action</th>
                
              </tr>
            </thead>

            <tbody>
              {users.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-primary transition duration-200"
                  >
                    <td className="px-4 py-3">
                      <img
                        src={item.image}
                        className="w-[40px] h-[40px] object-cover rounded-md border"
                      />
                    </td>
                    <td className="px-4 py-3 font-medium flex flex-row items-center gap-2">
                      {item.email} {item.isEmailVerified ? <MdOutlineVerified className="text-blue-400" /> : ""}
                    </td>
                    <td className="px-4 py-3">{item.firstName}</td>
                    <td className="px-4 py-3 font-semibold">
                      {item.lastName}
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {item.role}
                    </td>
                    <td className="px-4 py-3">
                        {item.isBlocked? "Blocked" : "Active"}
                    </td>
                    <td className="px-4 py-3">
                        <button
                        className="px-3 py-1 bg-accent text-primary rounded-lg hover:scale-105 hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.2)] active:scale-95 transition-all text-sm font-medium"
                        onClick={
                           async ()=>{
                                
                                await axios.put(import.meta.env.VITE_BACKEND_URL + `/users/toggle-block/${item.email}`,{
                                    isBlocked : !item.isBlocked
                                },
                                {
                                    headers: {
                                        Authorization: `Bearer ${localStorage.getItem("token")}`
                                    }
                                }
                            )
                            setLoaded(false);
                            }
                        }
                        >
                            {
                                item.isBlocked?"Unblock user":"Block user"
                            }
                        </button>
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
