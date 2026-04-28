"use client";
import { Theme } from "@/components/Theme";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Health tips", url: "/tips" },
    { label: "Upload Tip", url: "/upload" }, // Changed to lowercase for consistency
    { label: "Contact Us", url: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Logo Section */}
      <Link href={"/"} className="flex items-center gap-2 z-50">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
        <div className="leading-tight">
          <p className="font-bold text-slate-800">Medshare</p>
          <p className="text-xs font-semibold" style={{ color: Theme.primaryGreen }}>Africa</p>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex items-center gap-8 max-md:hidden">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors py-2 border-b-2 border-transparent hover:border-[#67C090]"
          >
            {item.label}
          </Link>
        ))}
        
        <Link 
          href={"/signin"} 
          className="flex items-center gap-2 px-5 py-2 rounded-full text-white transition-all hover:opacity-90"
          style={{ backgroundColor: Theme.primaryGreen }}
        >
          <LuUserRound className="text-xl" />
          <span className="font-semibold">Sign In</span>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setNavOpen(!navOpen)} 
        className="md:hidden z-50 text-3xl text-slate-800"
      >
        {navOpen ? <IoMdClose /> : <RiMenu3Fill />}
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-white transform ${navOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 z-40`}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            onClick={() => setNavOpen(false)}
            href={item.url}
            className="text-2xl font-semibold text-slate-800"
          >
            {item.label}
          </Link>
        ))}
        <Link 
          onClick={() => setNavOpen(false)}
          href={"/signin"} 
          className="flex items-center gap-3 px-8 py-3 rounded-full text-white text-xl"
          style={{ backgroundColor: Theme.primaryGreen }}
        >
          <LuUserRound />
          Sign In
        </Link>
      </div>
    </nav>
  );
}