import Image from "next/image";
import { Trash2, ArrowLeft, Pencil } from "lucide-react";
import DeleteBookingButton from "@/app/my-bookings/components/DeleteBookingButton";
import Link from "next/link";

export default function MyBookingsTable({ data }) {
  return (
    <div className="w-11/12 mx-auto space-y-6">
      {data.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border-b pb-4"
        >
          {/* Remove button */}
          <DeleteBookingButton id={item._id} />

          {/* Product info */}
          <div className="flex items-center gap-4 w-1/3">
            <Image
              src={item.service_img}
              alt={item.service_name}
              width={120}
              height={120}
              className="rounded object-cover"
            />
            <div>
              <h2 className="font-medium">{item.service_name}</h2>
            </div>
          </div>

          {/* Price */}
          <p className="font-medium w-24 text-center">${item.dueAmount}</p>

          {/* Date */}
          <p className="text-sm w-32 text-center">{item.date}</p>

          {/* Edit button */}
          <Link href={`/my-bookings/${item._id}`}>
            <button
              // onClick={() => alert(`Edit booking: ${item._id}`)}
              className="text-blue-600 hover:text-blue-800 cursor-pointer bg-gray-200 p-2 rounded-full"
            >
              <Pencil size={18} />
            </button>
          </Link>

          {/* Status */}
          <span className="bg-red-500 text-white px-4 py-1 rounded-lg text-sm font-medium">
            <p>pending</p>
          </span>
        </div>
      ))}

      {/* Footer actions */}
      <div className="flex justify-between items-center pt-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-black">
          <ArrowLeft size={16} />
          <a href="/">Continue Shopping</a>
        </button>

        <button
          // onClick={clearCart}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600"
        >
          <Trash2 size={16} />
          Clear Shopping Cart
        </button>
      </div>
    </div>
  );
}
