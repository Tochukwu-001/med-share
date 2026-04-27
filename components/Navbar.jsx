"use client"
import Image from "next/image"
import Link from "next/link"
import { LuUserRound } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";


export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)

    const navLinks = [
        { label: "Home", url: "/" },
        { label: "Health Tips", url: "/tips" },
        { label: "Upload Tip", url: "/upload" },
        { label: "Contact US", url: "/contact" },
    ];
    return (
        <main className="flex items-center justify-between md:px-6 md:py-3 bg-white shadow-md sticky top-0">
            <Link href={"/"} className="flex items-center gap-1 z-50">
                <Image
                    src={"/logo.png"}
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-10 h-10"
                />
                <span>
                    <p className="font-light">MedShare</p>
                    <p className="test-xs">Africa</p>
                </span>
            </Link>

            {/* Desktop Navbar */}
            <div className="flex items-center gap-8 max-md:hidden">

                {
                    navLinks.map((item, i) => (
                        <Link key={i} className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-6 border-white hover:border-[#468432] transition-all duration-200" href={"item.url"}>{item.label}</Link>
                    ))
                }

            </div>
            {/* Mobile Navbar */}
            <div className={`md:hidden bg-white h-dvh w-full absolute top-0 left-0 ${navOpen ? "flex" : "hidden"} flex-col items-center justify-center gap-10 pt-20`}>

                {
                    navLinks.map((item, i) => (
                        <Link key={i} className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-6 border-white hover:border-[#468432] transition-all duration-200" href={"item.url"}>{item.label}</Link>
                    ))
                }

                <Link href={"/signin"} className="flex items-center gap-2 text-lg">
                    Sign in
                    <LuUserRound className="text-xl" />
                </Link>

            </div>


            <button onClick={() => setNavOpen(!navOpen)} className="md:hidden z-50">
                {navOpen ?
                    <IoMdClose /> : <IoMenu />
                }


            </button>



            <Link className="max-md:hidden" href={"/signin"}> <LuUserRound className="text-2xl" />
            </Link>


        </main>
    );
}
