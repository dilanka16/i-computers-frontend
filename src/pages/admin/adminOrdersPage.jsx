import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import ViewOrderInfo from "../../components/viewOrderinfo";

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!loaded) {
      axios
        .get(
          import.meta.env.VITE_BACKEND_URL + "/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setOrders(response.data);
          setLoaded(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loaded]);

  return (
    <div className="w-full h-full p-10 bg-primary flex justify-center">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          {loaded ? (
            <table className="w-full text-sm text-left text-secondary">
              <thead className="bg-secondary text-white sticky top-0">
                <tr className="h-[60px]">
                  <th className="px-4">Order ID</th>
                  <th className="px-4">Customer email</th>
                  <th className="px-4">Customer name</th>
                  <th className="px-4">Date</th>
                  <th className="px-4">Status</th>
                  <th className="px-4">Total Amount</th>
                  <th className="px-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-primary transition duration-200"
                  >
                    <td className="px-4 py-3">{order.orderID}</td>
                    <td className="px-4 py-3">{order.email}</td>
                    <td className="px-4 py-3">{order.name}</td>
                    <td className="px-4 py-3">
                      {new Date(order.date).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3">{order.status}</td>
                    <td className="px-4 py-3">
                      Rs.{Number(order.total).toFixed(2)}
                    </td>
                    <td className="px-4 py-3"><ViewOrderInfo order={order} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}
