import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg1.jpg')] bg-center bg-no-repeat bg-cover">
     <section className="min-h-dvh bg-black/70">
<div className="text-white lg:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 lg:pt-20 pt-5">
  <h1 className="text-5xl font-black">Welcome to <span style={{color:Theme.primaryGreen}} className="italic">Med-Share Africa</span></h1>
  <p className="text-2xl font-light text-center">
  Med Share helps you share and access reliable medical information, connecting individuals and professionals to
  improve everyday health. It creates a space where knowledge flows freely, empowering users to make informed health decisions.
  With a focus on accessibility and trust, Med Share supports a healthier, more connected community.
     </p>

     <div className="flex items-center gap-5">
      <Link href={"/"} style={{backgroundColor: Theme.secondaryGreen}} className="text-xl px-10 py-3 rounded-full">Share Info</Link>
      <Link href={"/"} style={{backgroundColor: Theme.secondaryGreen}} className="text-xl px-10 py-3 rounded-full">Explore Resources</Link>
     </div>

</div>
     </section>
    </main>
  );
}
