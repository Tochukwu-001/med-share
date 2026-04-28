// import { Theme } from "@/components/Theme";
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
// 	return (
// 		<main className="min-h-dvh bg-[url('/bg1.jpg) bg-center bg-cover bg-no-repeat">
// 			<section className="min-h-dvh bg-black/70">
// 				<div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-cente gap-10 lg:pt-20 pt-5 max-md:p-3">
// 					<h1 className="text-5xl font-bold max-md:text-3xl ">
// 						Welcome to{" "}
// 						<span className="italic" style={{ color: Theme.primaryGreen }}>
// 							Med-Share-Africa
// 						</span>
// 					</h1>
// 					<p className="text-2xl font-light text-center max-md:text-base ">
// 						Med share helps you share and access reliable medical information,
// 						connecting individuals and professionals to improve everyday health.
// 						It creates a spcae where knowledge flows freely, empowering users to
// 						make informed health decisions, with a focus on accessibility and
// 						trust. Med share supports a healthier , more connected community.
// 					</p>

// 					<div className="flex items-center gap-5 max-md:flex-col max-md:w-full ">
// 						<Link
// 							href={"/"}
// 							style={{ backgroundColor: Theme.secondaryGreen }}
// 							className="text-xl px-10 py-3 rounded-full max-md:w-full ">
// 							Share Info
// 						</Link>
// 						<Link
// 							href={"/"}
// 							style={{ backgroundColor: Theme.secondaryGreen }}
// 							className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center">
// 							Explore Resourses{" "}
// 						</Link>
// 					</div>
// 				</div>
// 			</section>
// 		</main>
// 	);
// }

import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-dvh bg-white">
			{/* --- EXISTING HERO UI (UNALTERED) --- */}
			<section className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
				<div className="min-h-dvh bg-white/80">
					{" "}
					{/* Light theme overlay */}
					<div className="text-slate-900 lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 lg:pt-20 pt-5 max-md:p-3">
						<h1 className="text-5xl font-bold max-md:text-3xl ">
							Welcome to{" "}
							<span className="italic" style={{ color: Theme.primaryGreen }}>
								Med-Share-Africa
							</span>
						</h1>
						<p className="text-2xl font-light text-center max-md:text-base ">
							Med share helps you share and access reliable medical information,
							connecting individuals and professionals to improve everyday
							health. It creates a spcae where knowledge flows freely,
							empowering users to make informed health decisions, with a focus
							on accessibility and trust. Med share supports a healthier , more
							connected community.
						</p>

						<div className="flex items-center gap-5 max-md:flex-col max-md:w-full ">
							<Link
								href={"/"}
								style={{ backgroundColor: Theme.secondaryGreen }}
								className="text-xl px-10 py-3 rounded-full max-md:w-full text-white text-center">
								Share Info
							</Link>
							<Link
								href={"/"}
								style={{ backgroundColor: Theme.secondaryGreen }}
								className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center text-white">
								Explore Resourses{" "}
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* --- NEW LANDING PAGE SECTIONS --- */}

			{/* Stats Section */}
			<section className="py-20 bg-slate-50 border-y border-slate-100">
				<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
					<div>
						<h3
							className="text-4xl font-bold mb-2"
							style={{ color: Theme.primaryGreen }}>
							10k+
						</h3>
						<p className="text-slate-600 font-medium">Verified Resources</p>
					</div>
					<div>
						<h3
							className="text-4xl font-bold mb-2"
							style={{ color: Theme.primaryGreen }}>
							500+
						</h3>
						<p className="text-slate-600 font-medium">Medical Professionals</p>
					</div>
					<div>
						<h3
							className="text-4xl font-bold mb-2"
							style={{ color: Theme.primaryGreen }}>
							24/7
						</h3>
						<p className="text-slate-600 font-medium">Community Support</p>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 max-w-6xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-16">How it Works</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Search Knowledge",
							desc: "Find localized medical data curated for African communities.",
						},
						{
							title: "Connect",
							desc: "Speak with verified health professionals and experienced peers.",
						},
						{
							title: "Contribute",
							desc: "Share your own insights to help others in the community.",
						},
					].map((item, idx) => (
						<div
							key={idx}
							className="p-8 border border-slate-200 rounded-2xl hover:border-emerald-200 transition-colors">
							<div
								className="w-10 h-10 rounded-full mb-4 flex items-center justify-center text-white font-bold"
								style={{ backgroundColor: Theme.primaryGreen }}>
								{idx + 1}
							</div>
							<h4 className="text-xl font-semibold mb-3">{item.title}</h4>
							<p className="text-slate-500 leading-relaxed">{item.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* Simple Footer */}
			<footer className="py-12 bg-slate-900 text-white">
				<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
					<div
						className="text-xl font-bold italic"
						style={{ color: Theme.primaryGreen }}>
						Med-Share-Africa
					</div>
					<div className="flex gap-8 text-sm text-slate-400">
						<Link href="/" className="hover:text-white">
							Privacy Policy
						</Link>
						<Link href="/" className="hover:text-white">
							Terms of Service
						</Link>
						<Link href="/" className="hover:text-white">
							Contact Us
						</Link>
					</div>
					<div className="text-slate-500 text-sm">© 2026 Med-Share-Africa</div>
				</div>
			</footer>
		</main>
	);
}
