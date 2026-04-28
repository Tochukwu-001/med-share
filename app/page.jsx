import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION (LIGHT VERSION) --- */}
      {/* Use a soft white-to-transparent gradient over the image for readability */}
      <section className="relative min-h-[85dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image src="/bg1.jpg" alt="Background" fill className="object-cover opacity-50" priority />
        </div>
        
        <div className="relative z-10 text-slate-900 lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-8 px-5 py-20">
          <h1 className="text-5xl font-black max-md:text-center max-md:text-3xl leading-tight">
            Welcome to <span style={{color:Theme.secondaryGreen}} className="italic outline-white">Med-Share Africa</span>
          </h1>
          <p className="text-xl font-medium text-center text-slate-900 max-md:text-base max-w-3xl leading-relaxed">
            Connecting individuals and professionals to share reliable medical information.
            Empowering you to make informed health decisions through a trusted, connected community.
          </p>

          <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
            <Link href={"/share"} 
              style={{ backgroundColor: Theme.primaryGreen }} 
              className="text-white text-lg font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all max-md:w-full max-md:text-center"
            >
              Share Info
            </Link>
            <Link href={"/resources"} 
              style={{ border: `2px solid ${Theme.secondaryGreen}`, color: Theme.secondaryGreen }} 
              className="text-lg font-bold px-10 py-4 rounded-full hover:bg-slate-50 transition-all max-md:w-full max-md:text-center"
            >
              Explore Resources
            </Link>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How We Improve Health</h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{backgroundColor: Theme.primaryGreen}}></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Verified Insights", desc: "Access data shared by licensed healthcare practitioners.", icon: "🩺" },
              { title: "Free Access", desc: "Medical knowledge should be a right, not a privilege.", icon: "🌍" },
              { title: "Trusted Community", desc: "Collaborate in a space built on mutual trust and accuracy.", icon: "🤝" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-200 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-20 px-5 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-20 text-white shadow-2xl" style={{backgroundColor: Theme.primaryGreen}}>
          <h2 className="text-4xl font-black mb-6">Ready to make a difference?</h2>
          <p className="text-xl mb-10 opacity-90">Join thousands of others in building a healthier Africa.</p>
          <button className="bg-white text-slate-900 font-bold px-12 py-4 rounded-full text-lg hover:bg-slate-100 transition-all">
            Join the Movement
          </button>
        </div>
      </section>

      {/* --- FOOTER --- 
      <footer className="py-10 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Med-Share Africa. All rights reserved.</p>
      </footer>*/}
    </main>
  );
}