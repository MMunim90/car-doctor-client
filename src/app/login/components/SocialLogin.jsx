"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";


export default function SocialLogin() {
    const router = useRouter();
    const session = useSession();

    const handleSocialLogin = (providerName) => {
        signIn(providerName)
    }

    useEffect(() => {
        if(session?.status === "authenticated"){
            router.push("/");
            toast.success("Successfully Logged In")
        }
    }, [session?.status])
  return (
    <div className="mt-6 flex justify-center">
      <div style={{ display: "flex", gap: "40px", fontSize: "24px" }}>
        <a
          onClick={() => handleSocialLogin("google")}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-300 p-3 rounded-full"
        >
          <FaGoogle type="button"/>
        </a>
        <a
          onClick={() => handleSocialLogin("github")}
          target="_blank"
          rel="noreferrer"
          className="bg-gray-300 p-3 rounded-full"
        >
          <FaGithub type="button"/>
        </a>
      </div>
    </div>
  );
}
