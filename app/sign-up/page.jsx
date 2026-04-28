import React from "react";
import { Theme } from "@/components/Theme";
import Link from "next/link";

const page = () => {
	return (
		<main className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
			<section className="min-h-dvh bg-white/90 flex items-center justify-center p-4">
				<div className="w-full max-w-md flex flex-col gap-8">
					{/* Header Section */}
					<div className="text-center flex flex-col gap-3">
						<h1 className="text-4xl font-bold text-slate-900">
							Sign in to{" "}
							<span className="italic" style={{ color: Theme.primaryGreen }}>
								Med-Share
							</span>
						</h1>
						<p className="text-slate-600 font-light text-lg">
							Empowering your health journey.
						</p>
					</div>

					{/* Form Section */}
					<div className="flex flex-col gap-4">
						<input
							type="email"
							placeholder="Email Address"
							className="w-full px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-slate-800"
						/>
						<input
							type="password"
							placeholder="Password"
							className="w-full px-6 py-4 rounded-full border border-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-slate-800"
						/>

						<button
							style={{ backgroundColor: Theme.secondaryGreen }}
							className="text-white text-xl font-semibold px-10 py-3 rounded-full hover:opacity-90 transition-opacity mt-2">
							Sign In
						</button>
					</div>

					{/* Divider */}
					<div className="flex items-center gap-4 py-2">
						<div className="h-[1px] bg-slate-300 flex-1"></div>
						<span className="text-slate-400 text-sm">OR</span>
						<div className="h-[1px] bg-slate-300 flex-1"></div>
					</div>

					{/* Google Social Option */}
					<button className="flex items-center justify-center gap-3 border border-slate-300 px-10 py-3 rounded-full text-slate-700 text-lg hover:bg-slate-50 transition-colors">
						<svg className="w-6 h-6" viewBox="0 0 48 48">
							<path
								fill="#FFC107"
								d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
							<path
								fill="#FF3D00"
								d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
							<path
								fill="#4CAF50"
								d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
							<path
								fill="#1976D2"
								d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
						</svg>
						Sign in with Google
					</button>

					{/* Footer Link */}
					<div className="text-center mt-4">
						<p className="text-slate-500">
							New here?{" "}
							<Link
								href="/"
								className="font-bold hover:underline"
								style={{ color: Theme.primaryGreen }}>
								Create an account
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default page;
