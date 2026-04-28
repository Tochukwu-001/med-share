import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="min-h-dvh bg-slate-50 flex items-center justify-center p-5">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-black text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500">
              Access your <span style={{color: Theme.primaryGreen}} className="font-bold">Med-Share</span> account
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 transition-all"
                style={{ focusRingColor: Theme.primaryGreen }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full px-5 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 transition-all"
              />
            </div>

            <button 
              type="submit"
              style={{ backgroundColor: Theme.secondaryGreen }}
              className="text-white font-bold py-4 rounded-xl shadow-lg hover:brightness-105 transition-all mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute w-full border-t border-slate-100"></div>
            <span className="relative bg-white px-4 text-sm text-slate-400">or continue with</span>
          </div>

          {/* Social Auth */}
          <button className="w-full flex items-center justify-center gap-3 border border-slate-200 py-3 rounded-xl hover:bg-slate-50 transition-all font-medium text-slate-700">
            <Image 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/smartlock/google.svg" 
              alt="Google" 
              width={20} 
              height={20} 
            />
            Sign in with Google
          </button>

          {/* Footer Link */}
          <p className="text-center mt-8 text-slate-500 text-sm">
            Don't have an account?{" "}
            <Link href="/signup" style={{ color: Theme.primaryGreen }} className="font-bold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}