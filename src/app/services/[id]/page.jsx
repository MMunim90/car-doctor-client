import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function serviceDetailPage({ params }) {
  const p = await params;
  const res = await fetch(`https://car-doctor-gray.vercel.app/api/service/${p.id}`);
  const data = await res.json();
  return (
    <div className="w-11/12 mx-auto space-y-4">
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={2000}
            height={300}
            alt="banner"
            className="mx-auto"
          ></Image>

          <div className="transparent-layer overlay-bg absolute w-full h-full rounded top-0">
            <div className="w-full h-full flex items-center ml-24">
              <div>
                <h1 className="text-white text-4xl font-bold">
                  Service Details
                </h1>
                <div className="breadcrumbs text-sm text-white">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Service Details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </section>

      <div className="flex gap-4">
        <section className="w-9/12">
          <Image
            src={data.img}
            width={1400}
            height={280}
            alt={data.title}
          ></Image>
          <h1 className="font-bold text-4xl mt-6">{data.title}</h1>
          <p>{data.description}</p>
        </section>
        <section className="w-3/12">
          <Link href={`/checkout/${data._id}`}>
            <button className="w-full bg-amber-600 text-white py-3 text-xl font-bold cursor-pointer">
              Checkout
            </button>
          </Link>
          <p className="text-center mt-4 text-2xl font-bold">
            Price: ${data.price}
          </p>
        </section>
      </div>
    </div>
  );
}
