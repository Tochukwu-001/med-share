import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import { BsTwitterx } from "react-icons/bs"
import { Theme } from "./Theme"
export default function Footer () {
    return (
        <main style={{backgroundColor: Theme.secondaryGreen}} className="flex items-center
        justify-between px-10 py-3 max-lg:flex-col max-lg:gap-5 text-white">
            <Link href={"/"} className="flex items-center gap-1">
           <Image
              src={"/logo.png"}
              alt="logo"
              width={500}
              height={500}
              className="w-8 h-8"
           />
           <span className="">
            <p className="font-light">Medshare</p>
            <p className="text-xs">Africa</p>
            </span>
            </Link>

            <div className="flex items-center gap-8 text-sm">
                <Link href={"#"}>Chat With Us</Link>
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}> Terms of services</Link>
                <Link href={"#"}> Contact support</Link>
            </div>
            <FaFacebook />
            <FaInstagram />
            <BsTwitterx />
            <div>

            </div>
        </main>
    )
}