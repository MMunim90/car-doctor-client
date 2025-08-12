import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import React from "react";

export default async function serviceDetailPage({ params }) {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return (
    <div className="w-11/12 mx-auto space-y-4">
      <section className="flex justify-center">
        <figure className="relative">
            <Image src={"/assets/images/checkout/checkout.png"} width={1200} height={300} alt="banner" className="mx-auto"></Image>

            <div className="transparent-layer overlay-bg absolute w-full h-full rounded top-0">
                <div className="w-full h-full flex items-center ml-24">
                    <div>
                        <h1 className="text-white text-4xl font-bold">Service Details</h1>
                    </div>
                </div>
            </div>
        </figure>
      </section>

      <section className="w-8/12">
        <Image src={data.img} width={800} height={280} alt={data.title}></Image>
        <h1 className="font-bold text-4xl mt-6">{data.title}</h1>
        <p>{data.description}</p>
      </section>
      <section className="w-4/12">
        
      </section>
    </div>
  );
}
