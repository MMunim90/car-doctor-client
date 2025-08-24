"use client";
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteBookingButton({id}) {
    const router = useRouter()
    const handleDelete = async(id) => {
        const res = await fetch(`https://car-doctor-gray.vercel.app/api/service/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log(data);
        router.refresh();
    }
  return (
    <div>
      <button
        onClick={() => handleDelete(id)}
        className="p-2 rounded-full bg-gray-700 hover:bg-red-500 transition text-white"
      >
        <X size={18} />
      </button>
    </div>
  );
}
