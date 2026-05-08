import { Theme } from "@/components/Theme";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 4184e35e9cfdbd4fe05ba9d70fb4062d21b87038
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-white text-slate-800">
      {/* Hero Section - Maintained as requested */}
      <section className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-no-repeat bg-cover">
        <section className="min-h-dvh bg-black/70">
          <div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 md:pt-20 max-md:pt-10 max-md:p-3">
            <h1 className="text-5xl font-black max-md:text-center max-md:text-3xl">
              Welcome to{" "}
              <span style={{ color: Theme.primaryGreen }} className="italic">
                Med-Share Africa
              </span>
            </h1>
            <p className="text-2xl font-light text-center max-md:text-base">
              Med Share helps you share and access reliable medical information,
              connecting individuals and professionals to improve everyday
              health. It creates a space where knowledge flows freely,
              empowering users to make informed health decisions. With a focus
              on accessibility and trust, Med Share supports a healthier, more
              connected community.
            </p>

            <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
              <Link
                href={"/"}
                style={{ backgroundColor: Theme.secondaryGreen }}
                className="text-xl px-10 py-3 rounded-full transition-transform duration-300 hover:-translate-y-2 max-md:w-full max-md:text-center"
              >
                Share Info
              </Link>
              <Link
                href={"/"}
                style={{ backgroundColor: Theme.secondaryGreen }}
                className="text-xl px-10 py-3 rounded-full transition-transform duration-300 hover:-translate-y-2 max-md:w-full max-md:text-center"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* How it Works Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            How it Works
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A seamless platform designed to bridge the gap between medical
            expertise and everyday health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Reliable Insights",
              desc: "Access information vetted by community experts and healthcare professionals.",
            },
            {
              title: "Community Driven",
              desc: "Join a network of individuals sharing real-world health experiences.",
            },
            {
              title: "Localized Content",
              desc: "Find medical information specifically relevant to the African healthcare landscape.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:shadow-xl hover:shadow-green-900/5"
            >
              <div
                className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: Theme.primaryGreen }}
              >
                0{idx + 1}
              </div>
              <h4 className="text-2xl font-bold mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Resources (Blog Grid) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-2">
                Latest Resources
              </h2>
              <p className="text-slate-500">
                Stay updated with the most recent health guides and news.
              </p>
            </div>
            <Link
              href="/"
              className="hidden md:block font-bold underline"
              style={{ color: Theme.primaryGreen }}
            >
              View all articles
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200"
              >
                <div className="h-48 bg-slate-200 relative">
                  {/* Placeholder for Resource Image */}
                  <div className="bg-[url('/bg1.jpg')] bg-center bg-no-repeat bg-cover absolute inset-0 flex items-center justify-center text-slate-400"></div>
                </div>
                <div className="p-6">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: Theme.secondaryGreen }}
                  >
                    Wellness
                  </span>
                  <h4 className="text-xl font-bold mt-2 mb-3">
                    Understanding Preventive Care in Local Communities
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    Learn how small daily habits can significantly impact
                    long-term health outcomes within African urban centers.
                  </p>
                  <Link
                    href="/"
                    className="font-semibold text-sm hover:opacity-70 transition"
                  >
                    Read More →
                  </Link>
                </div>
=======
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
>>>>>>> 4184e35e9cfdbd4fe05ba9d70fb4062d21b87038
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Testimonials */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            What Our Community Says
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div
            className="italic text-lg p-8 border-l-4"
            style={{
              borderColor: Theme.primaryGreen,
              backgroundColor: "#f8fafc",
            }}
          >
            "Med-Share Africa has become my first point of call whenever I need
            to understand health symptoms before visiting a clinic. The
            community support is unmatched."
            <p className="mt-4 not-italic font-bold text-slate-900">
              — Dr. Amara O., Healthcare Consultant
            </p>
          </div>
          <div
            className="italic text-lg p-8 border-l-4"
            style={{
              borderColor: Theme.primaryGreen,
              backgroundColor: "#f8fafc",
            }}
          >
            "Sharing my experience with chronic health management here has
            helped me find others who truly understand the local challenges we
            face."
            <p className="mt-4 not-italic font-bold text-slate-900">
              — Samuel K., Community Member
            </p>
=======
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
>>>>>>> 4184e35e9cfdbd4fe05ba9d70fb4062d21b87038
          </div>
        </div>
      </section>
    </main>
  );
}