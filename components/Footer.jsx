import Link from "next/link";
import Image from "next/image"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Themes } from "./Themes";

export default function(){
    return(
        <main style= {{backgroundColor: Themes.secondaryGreen}}className="flex items-center justify-between px-10 py-3 max-lg:flex-col max-lg:gap-5 text-white">

            <Link href={"/"} className="flex items-center gap-1">
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
            <div className="flex items-center gap-8 text-sm max-md:flex-col">
                <Link href={"#"}>Chat with us</Link>
                <Link href={"#"}>privacy Policy</Link>
                <Link href={"#"}>Terms of Service</Link>
                <Link href={"#"}>Contact Support</Link>
            </div>

            <div className="flex items-center gap-2">
               <FaLinkedin/>
               <FaInstagram/>
               <FaXTwitter/>
               <FaFacebook/>

            </div>
        </main>
    )
}