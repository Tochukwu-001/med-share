import { Theme } from "@/components/Theme";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-dvh">
      {/* Hero Section */}
      <section className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="min-h-dvh bg-black/70">
          <div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 lg:pt-20 pt-5 max-md:p-3 min-h-dvh">
            <h1 className="text-5xl font-black max-md:text-center max-md:text-3xl">
              Welcome to <span style={{ color: Theme.primaryGreen }} className="italic">Med-Share Africa</span>
            </h1>
            <p className="text-2xl font-light text-center max-md:text-base leading-relaxed">
              Med Share helps you share and access reliable medical information, connecting individuals and 
              professionals to improve everyday health. It creates a space where knowledge flows freely,
              empowering users to make informed health decisions. With a focus on accessibility and trust, 
              Med Share supports a healthier, more connected community.
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
        </div>
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
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
                Empowering Health across Africa
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
                  <span className="text-xl font-bold" style={{ color: Theme.primaryGreen }}>✓</span>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Voices from our Community</h2>
          <blockquote className="text-2xl italic text-slate-700 mb-6">
            "Med-Share Africa has made it so much easier for me to find reliable health advice in my local community. It is a true lifeline."
          </blockquote>
          <p className="font-bold">— Sarah O., Community Health Worker</p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl" style={{ backgroundColor: Theme.primaryGreen }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to make an impact?</h2>
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
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white text-center">
        <p className="text-slate-400">© {new Date().getFullYear()} Med-Share Africa. Empowering Health Together.</p>
      </footer>
    </main>
  );
}