"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function BookingUpdateForm({ data }) {
  const { data: cookie } = useSession();
  const router = useRouter()
  console.log(data)

  const [formData, setFormData] = useState({
    name: "",
    phone: data.phone,
    email: "",
    date: data.date,
    dueAmount: "",
    address: data.address,
    message: data.message,
    service_id: data._id,
    service_name: data.title,
    service_img: data.img,
  });

  // Prefill values when session or data is available
  useEffect(() => {
    if (cookie?.user && data) {
      setFormData((prev) => ({
        ...prev,
        name: cookie.user.name || "",
        email: cookie.user.email || "",
        dueAmount: data.dueAmount || "",
      }));
    }
  }, [cookie, data]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleCheckoutService = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast("Updating....");
    try {
      const res = await fetch(`https://car-doctor-gray.vercel.app/api/my-bookings/${data._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Booking Updated Successfully!");
        setFormData({
          name: cookie?.user?.name || "",
          phone: data?.phone || "",
          email: cookie?.user?.email || "",
          date: data?.date || "",
          dueAmount: data?.dueAmount || "",
          address: data?.address,
          message: data?.message,
          service_id: data._id,
          service_name: data.title,
          service_img: data.img,
        });
        router.push("/my-bookings")
      } else {
        toast.error("Failed to Update Booking.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-11/12 mx-auto space-y-4 my-10">
      {/* Banner */}
      <section className="flex justify-center mb-12">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={2000}
            height={300}
            alt="banner"
            className="mx-auto"
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full rounded top-0">
            <div className="w-full h-full flex items-center ml-24">
              <div>
                <h1 className="text-white text-4xl font-bold">Check Out</h1>
                <div className="breadcrumbs text-sm text-white">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`/services/${data?._id}`}>Service Details</a>
                    </li>
                    <li>Check Out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </section>

      {/* Form */}
      <form
        onSubmit={handleCheckoutService}
        className="space-y-4 bg-gray-100 p-12 rounded-lg"
      >
        <p className="text-center text-3xl font-bold mb-10">
          Book Service: {data?.service_name}
        </p>

        {/* First row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData?.name}
            readOnly
            className="w-full p-3 rounded border border-gray-200 bg-white"
            required
          />
          <input
            type="email"
            name="email"
            value={formData?.email}
            readOnly
            className="w-full p-3 rounded border border-gray-200 bg-white"
            required
          />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="dueAmount"
            value={data?.dueAmount}
            readOnly
            className="w-full p-3 rounded border border-gray-200 bg-white"
            required
          />
          <input
            type="date"
            name="date"
            defaultValue={data?.date}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            required
          />
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="phone"
            defaultValue={data?.phone}
            onChange={handleChange}
            placeholder="Your Phone"
            className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            required
          />
          <input
            type="text"
            name="address"
            defaultValue={data?.address}
            onChange={handleChange}
            placeholder="Present Address"
            className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          defaultValue={data?.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="6"
          className="w-full p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-semibold py-3 rounded hover:bg-red-600 transition"
        >
          Update Bookings
        </button>
      </form>
    </div>
  );
}
