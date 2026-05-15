import { auth, signIn } from "@/auth";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { LuMail, LuLock } from "react-icons/lu";

const SignInPage = async () => {
  const session = await auth();

  // If user is already logged in, send them to the tips page
  if (session) {
    redirect("/tips");
  }

  return (
    <main className="min-h-dvh bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-5xl flex rounded-3xl shadow-xl overflow-hidden min-h-[600px]">
        
        {/* Left Side: Brand/Visual (Hidden on Mobile) */}
        <div 
          className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between text-white"
          style={{ backgroundColor: Theme.secondaryGreen }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
            <p className="text-lg opacity-90 font-light">
              Access your personalized health dashboard and continue sharing knowledge with the Med-Share community.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="italic font-light">
              "Knowledge is the best medicine. Join us in bridging the gap in health literacy across Africa."
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            <h1 className="text-3xl font-black text-slate-800 mb-2">Sign In</h1>
            <p className="text-slate-500">Enter your details to access your account</p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <LuMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': Theme.primaryGreen }}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link href="#" className="text-xs font-bold" style={{ color: Theme.primaryGreen }}>
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <LuLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 transition-all"
                  style={{ '--tw-ring-color': Theme.primaryGreen }}
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all active:scale-[0.98]"
              style={{ backgroundColor: Theme.primaryGreen }}
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 text-center">
            <hr className="border-slate-200" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-slate-400">
              OR
            </span>
          </div>

          {/* Google Sign In using Server Action */}
          <form
            action={async () => {
              "use server"
              await signIn("google")
            }}
          >
            <button 
              type="submit"
              className="w-full py-3 border-2 border-slate-100 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-700 hover:bg-slate-50 transition-colors active:scale-[0.98]"
            >
              <FcGoogle className="text-2xl" />
              Continue with Google
            </button>
          </form>

          <p className="mt-8 text-center text-slate-600">
            Don't have an account?{' '}
            <Link href="/signup" className="font-bold underline" style={{ color: Theme.secondaryGreen }}>
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;