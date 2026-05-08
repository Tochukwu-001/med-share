import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Theme } from "@/components/Theme";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";


const page = async () => {
  const session = await auth()
  // console.log(session);

  // redirect
  if (session) {
    redirect("/tips")
  }
  
  return (
    <main className="min-h-dvh flex items-center justify-center bg-[#f7f9f8] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
        Welcome to <span style={{color:Theme.primaryGreen}} className="text-3xl font-bold">to Med-Share </span>
          </h1>
          <p className="text-md text-gray-700 mt-1">
            Access reliable health information anytime
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{ focusRingColor: Theme.primaryGreen }}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link href="#" className="text-sm text-gray-700 hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            style={{ backgroundColor: Theme.primaryGreen }}
            className="w-full text-white py-2 rounded-lg hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-3 text-sm text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google Sign In */}
       

         <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
         <button type="submit" className="w-full flex items-center justify-center gap-3 border py-2 rounded-lg hover:bg-gray-50 transition">
          <FcGoogle size={20} />
          <span className="text-sm font-medium text-gray-700">
            Continue with Google
          </span>
        </button>
    </form>

        {/* Footer */}
        <p className="text-md text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            style={{ color: Theme.primaryGreen }}
            className="font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default page;