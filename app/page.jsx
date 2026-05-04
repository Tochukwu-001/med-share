import { Theme } from "@/components/Theme";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
import Link from "next/link";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="min-h-dvh">
      {/* Hero Section - Kept exactly as provided */}
      <section className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <section className="min-h-dvh bg-black/70">
          <div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 lg:pt-20 pt-5 max-md:p-3">
            <h1 className="text-5xl font-black max-md:text-center max-md:text-3xl ">
              Welcome to <span style={{ color: Theme.primaryGreen }} className="italic">Med-Share Africa</span>
            </h1>
            <p className="text-2xl font-light text-center max-md:text-base">
              Med Share helps you share and access reliable medical information, connecting individuals and 
              professionals to improve everyday health. It creates a space where knowledge flows freely,
              empowering users to make informed health decisions. With a focus on accessibility and trust, 
              Med Share supports a healthier, more connected community
            </p>

            <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
              <Link href={"/"} style={{ backgroundColor: Theme.secondaryGreen }} className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center">
                Share Info
              </Link>
              <Link href={"/"} style={{ backgroundColor: Theme.secondaryGreen }} className="text-xl px-10 py-3 rounded-full max-md:w-full max-md:text-center">
                Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Core Features</h2>
            <div className="h-1.5 w-24 mx-auto rounded-full" style={{ backgroundColor: Theme.primaryGreen }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: Theme.primaryGreen }}>Verified Insights</h3>
              <p className="text-slate-600 leading-relaxed">
                Access a library of health information reviewed by certified medical professionals specifically for the African context.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: Theme.primaryGreen }}>Community Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect with others through shared experiences, fostering a supportive environment for better health management.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: Theme.primaryGreen }}>Easy Access</h3>
              <p className="text-slate-600 leading-relaxed">
                Resources optimized for mobile devices, ensuring you have health information whenever and wherever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              {/* Placeholder for About Image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium">
                [Impact Image Placeholder]
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">Bridging the Gap in Health Literacy</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At Med-Share Africa, we believe that everyone deserves access to high-quality, understandable medical knowledge. Our platform is designed to eliminate barriers and combat misinformation.
            </p>
            <ul className="space-y-4">
              {["Expert-led health discussions", "Localized medical directories", "Privacy-focused information sharing"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-xl" style={{ color: Theme.primaryGreen }}>✓</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Latest News / Blog Preview Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Latest Health Updates</h2>
              <p className="text-slate-500">Stay informed with our recent articles</p>
            </div>
            <Link href="/" className="font-semibold underline" style={{ color: Theme.primaryGreen }}>View all</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="group cursor-pointer">
                <div className="h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                   <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500 bg-slate-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors">Understanding Wellness in {2025 + post}</h3>
                <p className="text-slate-600 line-clamp-2 text-sm">Discover the latest trends in preventive healthcare and how they apply to urban living across Africa...</p>
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
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl" style={{ backgroundColor: Theme.primaryGreen }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join our mailing list to receive the latest health resources and community updates directly in your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-4 rounded-full text-slate-900 w-full md:w-80 outline-none"
            />
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-full font-bold transition-colors">
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
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
              Subscribe
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-400">© {new Date().getFullYear()} Med-Share Africa. Empowering Health Together.</p>
      </footer>
=======
>>>>>>> a3b43a4f55cdb78bd1d9ebf2eec467f8a2f1c80b
    </main>
  );
}