"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const session = useSession();
  const {data: cookie, status} = session;
  console.log(session);
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
      </>
    );
  };
  return (
    <div className="navbar bg-base-100 shadow-sm px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image src={"/assets/logo.svg"} width={87} height={87} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navMenu()}</ul>
      </div>
      <div className="navbar-end">
        <ul className="flex mr-4 gap-4 text-lg">
          {status == "authenticated" ? (<>
          <li onClick={() => signOut()} className="hover:bg-gray-200 px-3 py-1 rounded-md cursor-pointer">
            Logout
          </li>
          <li><Image  className="rounded-full border-3 border-orange-500" src={cookie?.user?.image || "/assets/avater.png"} width={40} height={40} alt="user-image"></Image></li>
          </>) : (<>
          <li className="hover:bg-gray-200 px-3 py-1 rounded-md">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="hover:bg-gray-200 px-3 py-1 rounded-md">
            <Link href={"/register"}>Register</Link>
          </li>
          </>)}
          
        </ul>
        <a className="btn btn-outline rounded text-[#FF3811]">Appointment</a>
      </div>
    </div>
  );
}
