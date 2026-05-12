import React from 'react';
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { auth, signIn } from '@/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
    const session = await auth()
    //redirect
    if (session) {redirect("/tips")}
    
    return (
        <main className="min-h-dvh flex flex-col md:flex-row bg-white">
            {/* Left Side: Visual/Brand Section (Hidden on mobile or top on mobile) */}
            <section className="hidden md:flex md:w-1/2 bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat relative">
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center px-12 text-white">
                    <h2 className="text-4xl font-black mb-4">
                        Welcome Back to <span style={{ color: Theme.primaryGreen }} className="italic">Med-Share</span>
                    </h2>
                    <p className="text-xl font-light leading-relaxed">
                        Access your personalized health dashboard and stay connected with the community.
                    </p>
                </div>
            </section>

            {/* Right Side: Sign In Form */}
            <section className="flex-1 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-black text-slate-900">Sign In</h1>
                        <p className="text-slate-500 mt-2">Enter your details to access your account</p>
                    </div>

                    {/* Google Sign In Button */}
                    
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google")
                        }}
                    >
                        <button type="submit" className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-700 font-medium">
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>
                       
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-slate-400 uppercase">Or continue with email</span>
                        </div>
                    </div>

                    {/* Manual Sign In Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="name@example.com"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                                style={{ focusRingColor: Theme.primaryGreen }}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="block text-sm font-bold text-slate-700">Password</label>
                                <Link href="/" className="text-sm font-semibold" style={{ color: Theme.primaryGreen }}>Forgot password?</Link>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                                style={{ focusRingColor: Theme.primaryGreen }}
                            />
                        </div>

                        <button
                            type="submit"
                            style={{ backgroundColor: Theme.secondaryGreen }}
                            className="w-full py-3 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 transition-opacity"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-slate-600">
                        Don't have an account? {' '}
                        <Link href="/" className="font-bold underline" style={{ color: Theme.primaryGreen }}>Create one for free</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}

export default SignInPage;