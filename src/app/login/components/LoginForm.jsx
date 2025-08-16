"use client";
import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { signIn, signOut } from "next-auth/react"
//import { useRouter } from "next/router";

export default function LoginForm() {

    const handleSubmit = async(e) => {
        //const router = useRouter();
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
            await signIn("credentials", {email, password, callbackUrl: "/"});
            //console.log({email, password});
            //router.push("/");
        }
        catch(error){
            console.log(error);
            alert("Authentication Failed");
        }
    }
  return (
         <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="password"
                placeholder="Your password"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition"
            >
              Sign In
            </button>

          {/* Social Login */}
          <div className="mt-6 flex justify-center">
            <div style={{ display: "flex", gap: "40px", fontSize: "24px" }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-gray-300 p-3 rounded-full">
                <FaFacebook />
              </a>
              <a href="https://google.com" target="_blank" rel="noreferrer" className="bg-gray-300 p-3 rounded-full">
                <FaGoogle />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-gray-300 p-3 rounded-full">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-sm mt-6">
            Have an account?{" "}
            <a href="/register" className="text-orange-500 hover:underline">
              Sign In
            </a>
          </p>
    </form>
  );
}
