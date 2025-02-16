"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import img from "@/public/goole.png";
export default function SignupModal() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className=" fixed inset-0 bg-black/50 flex items-center justify-center pt-10">
      <div className="mt-10 mb-10 relative w-4/5 max-w-md bg-white rounded-xl p-6 md:p-8">
        {/* Close button */}
        <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X className="h-6 w-6" />
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-serif text-center mb-8">
          Login to Lego-AI
        </h1>

        <div className="space-y-6">
          {/* Google Sign up button */}
          <button className="flex items-center justify-center w-full rounded-full border border-gray-300 px-6 mx-2 py-2.5 hover:border-gray-400 transition-colors">
            <Image
              className="mx-2"
              src={img}
              alt="Google Logo"
              width={20}
              height={20}
            />
            Sign up with Google
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-500">or</span>
            </div>
          </div>

          {/* Sign up form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:border-gray-400 focus:ring-0 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  className="w-full px-4 py-2.5 rounded-full border border-gray-300 focus:border-gray-400 focus:ring-0 transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                >
                  {isPasswordVisible ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white rounded-full px-4 py-2.5 hover:bg-gray-800 transition-colors"
            >
              Create account
            </button>
          </form>
        </div>

        {/* Sign in link */}
        <div className="mt-8 text-center">
          <span className="text-gray-600">Don&apos;t have an account? </span>
          <a href="/signin" className="text-green-600 hover:text-green-700">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
