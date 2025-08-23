import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNameObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  // validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOk = session?.user?.email == currentBooking.email;

  if (isOwnerOk) {
    const deleteResponse = await bookingCollection.deleteOne(query);

    revalidatePath("/my-bookings");
    return NextResponse.json(deleteResponse);
  }
  else{
    return NextResponse.json({success:false, message: "Forbidden Action"}, {status: 401})
  }
};

export const GET = async (req, { params }) => {
  const p = await params;
  const servicesCollection = dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

  return NextResponse.json(data);
};
