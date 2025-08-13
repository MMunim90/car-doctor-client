// app/login/page.jsx  (Next.js 13+ App Router)
// or pages/login.jsx (Next.js Pages Router)

import Image from "next/image";
import loginIllustration from "../../../public/assets/images/login/login.svg"; 
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex max-w-5xl w-full">
        {/* Left Side Illustration */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <Image
            src={loginIllustration}
            alt="Login Illustration"
            className="max-w-full h-auto"
            priority
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
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
          </form>

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
        </div>
      </div>
    </div>
  );
}
