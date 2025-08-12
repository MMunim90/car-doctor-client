import React from "react";
// import services from "@/../public/services.json";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default async function ServicesSection() {
  const serviceCollection = await dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
      {data.map((service) => {
        return (
            <div key={service._id} className="card bg-base-100 shadow-sm border-3 border-gray-300">
              <figure>
                <img
                  src={service.img}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.title}</h2>
                <h2 className="card-title">
                  Price: {service.price}
                </h2>
                <div className="card-actions justify-end">
                  <Link href={`/services/${service._id}`}>
                    <FaArrowRight size={35}/>
                  </Link>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
}
