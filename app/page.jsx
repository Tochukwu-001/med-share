import { Theme } from "@/components/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION (Original) --- */}
      <section className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="min-h-dvh bg-black/70">
          <div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 md:pt-20 max-md:pt-10 max-md:p-3">
            <h1 className="text-5xl font-black max-md:text-center max-md:text-3xl">
              Welcome to <span style={{ color: Theme.primaryGreen }} className="italic">Med-Share Africa</span>
            </h1>
            <p className="text-2xl font-light text-center max-md:text-base">
              Med Share helps you share and access reliable medical information, connecting individuals and professionals to improve everyday health. It creates a space where knowledge flows freely, empowering users to make informed health decisions. With a focus on accessibility and trust, Med Share supports a healthier, more connected community
            </p>
            <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
              <Link href={"/"} style={{ backgroundColor: Theme.secondaryGreen }} className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center">Share Info</Link>
              <Link style={{ backgroundColor: Theme.secondaryGreen }} className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center" href={"/"}>Explore Resources</Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How We Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Verified Insights", desc: "Access information vetted by healthcare professionals." },
              { title: "Community Forum", desc: "Connect with others to share health experiences safely." },
              { title: "Accessible Tools", desc: "Designed for low-bandwidth environments." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold mb-3" style={{ color: Theme.primaryGreen }}>{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS SECTION --- */}
      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Voices from our Community</h2>
          <blockquote className="text-2xl italic text-slate-700 mb-6">
            "Med-Share Africa has made it so much easier for me to find reliable health advice in my local community. It is a true lifeline."
          </blockquote>
          <p className="font-bold">— Sarah O., Community Health Worker</p>
        </div>
      </section>

      {/* --- NEWSLETTER/CTA SECTION --- */}
      <section className="py-20 bg-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-slate-600 mb-8">Join our newsletter to receive the latest medical tips and community news directly in your inbox.</p>
          <div className="flex gap-2 max-md:flex-col">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow p-4 rounded-full border border-slate-300 focus:outline-none focus:ring-2" 
              style={{ '--tw-ring-color': Theme.primaryGreen }}
            />
            <button 
              className="px-8 py-4 rounded-full text-white font-bold" 
              style={{ backgroundColor: Theme.primaryGreen }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}