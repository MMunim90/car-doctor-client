"use client";
import MyBookingsTable from "@/components/tables/MyBookingsTable";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function MyBookingsPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyBookings = async() => {
            const res = await fetch("http://localhost:3000/api/service");
            const d = await res.json();
            setData(d);
        };
        fetchMyBookings();
    }, [])

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
                <h1 className="text-white text-4xl font-bold">Cart Details</h1>
                <div className="breadcrumbs text-sm text-white">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>My Bookings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </section>

      {/* table */}
      <div>
        <MyBookingsTable data={data}></MyBookingsTable>
      </div>
    </div>
  );
}
