import IMage from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Theme } from "./Theme";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<main
			style={{ backgroundColor: Theme.secondaryGreen }}
			className="flex items-cente justify-between px-10 py-3 max-lg:flex-col max-lg:gap-5 text-white">
			<Link href={"/"} className=" flex items-center gap-1 z-50">
				<Image
					src={"/logo.png"}
					alt="logo"
					width={500}
					height={500}
					className="w-10 h-10"
				/>
				<span className="">
					<p className="font-light">MedShare</p>
					<p className="text-xs">Africa</p>
				</span>
			</Link>
			);
			<div className="flex items-center gap-8 text-sm max-md:flex-col">
				<Link href={"/"}>Chat with us</Link>
				<Link href={"/"}>Privacy Policy</Link>
				<Link href={"/"}>Terms of service</Link>
				<Link href={"/"}>Contact Support</Link>
				{/* <link href={"#"}>Chat with us </link>
				<link href={"#"}>Privacy Policy </link>
				<link href={"#"}>Terms of service </link>
				<link href={"#"}>Contact Support </link> */}
			</div>
			;
			<div className="flex items-center gap-3 text-xl">
				<FaSquareInstagram />
				<FaFacebookSquare />
				<FaSquareTwitter />
				<FaLinkedin />
			</div>
		</main>
	);
}
