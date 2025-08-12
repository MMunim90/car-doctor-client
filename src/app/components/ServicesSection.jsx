import React from "react";
// import services from "@/../public/services.json";
import dbConnect from "@/lib/dbConnect";

export default async function ServicesSection() {
  const serviceCollection = await dbConnect("services");
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
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
        );
      })}
    </div>
  );
}
