import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ViewOrderInfoCustomer(props) {
  const order = props.order;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [saving, setSaving] = useState(false);

  async function saveChanges() {
    try {
      setSaving(true);
      const token = localStorage.getItem("token");

      await axios.put(
        import.meta.env.VITE_BACKEND_URL + `/orders/${order.orderID}`,
        {
          status: status,
          notes: notes,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Order updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update order");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-primary max-w-3xl mx-auto mt-20 p-6 rounded-2xl shadow-xl outline-none max-h-[80vh] overflow-y-auto"
        overlayClassName="fixed inset-0 bg-black/50 flex items-start justify-center z-50"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          

          <button
            className="text-sm px-3 py-1 rounded-lg bg-secondary text-primary hover:opacity-80"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>

        {/* Order Meta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm">
          <p>
            <strong>Order ID:</strong> {order.orderID}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.date).toLocaleString()}
          </p>

          <div>
            <strong>Status:</strong>
            <div className="flex items-center mt-1">
              <span className="px-2 py-1 rounded-full bg-accent text-primary text-xs">
                {status}
              </span>

              <select
                value={status}
                disabled
                className="ml-4 px-2 py-1 border border-secondary/20 rounded-lg text-sm text-secondary outline-none"
              >
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>

          <p>
            <strong>Total:</strong> Rs. {order.total.toFixed(2)}
          </p>
        </div>

        {/* Customer Info */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">
            Customer Information
          </h3>

          <div className="bg-white rounded-xl p-4 space-y-2 text-sm">
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Email:</strong> {order.email}</p>
            <p><strong>Phone:</strong> {order.phone || "N/A"}</p>
            <p><strong>Address:</strong> {order.address}</p>

            <p className="text-xs font-semibold tracking-wide text-secondary/60 uppercase mt-3">
              Additional Notes
            </p>

            <textarea
              className="w-full border rounded-lg p-2 outline-none"
              value={order.notes}
              disabled
            />
          </div>
        </div>

        {/* Items */}
        <div>
          <h3 className="font-semibold text-lg mb-3">
            Ordered Items
          </h3>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 bg-white p-4 rounded-xl items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg border"
                />

                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Product ID: {item.productID}
                  </p>
                  <p className="text-sm">
                    Price: Rs. {item.price.toFixed(2)}
                  </p>
                </div>

                <div className="text-right text-sm">
                  <p>Qty: {item.quantity}</p>
                  <p className="font-semibold">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <button
        className="bg-accent/70 hover:bg-accent p-2 rounded-lg text-white cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        View Info
      </button>
    </>
  );
}
