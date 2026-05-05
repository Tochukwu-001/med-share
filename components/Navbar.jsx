"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LuUserRound } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Navbar() {
  const { data: session } = useSession();

  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Health Tips", url: "/tips" },
    { label: "Upload Tip", url: "/upload" },
    { label: "Contact Us", url: "/contact" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      handleClose(); // close menu first
      await signOut({ callbackUrl: "/signin" });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <main className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
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
          <p className="text-xs">Africa</p>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="flex items-center gap-8 max-md:hidden">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-2 border-transparent hover:border-[#468432] transition-all duration-200"
            href={item.url}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white h-dvh w-full absolute top-0 left-0 ${
          navOpen ? "flex" : "hidden"
        } flex-col items-center gap-10 pt-20`}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            href={item.url}
            onClick={() => setNavOpen(false)}
            className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-2 border-transparent hover:border-[#468432] transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={"/signin"}
          onClick={() => setNavOpen(false)}
          className="flex items-center gap-2 text-lg"
        >
          Sign in <LuUserRound className="text-2xl" />
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setNavOpen(!navOpen)}
        className="md:hidden z-50 text-2xl"
      >
        {navOpen ? <IoMdClose /> : <RiMenu3Fill />}
      </button>

      {/* Auth Section */}
      {session ? (
        <div>
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <img
              src={session?.user?.image || "/default-avatar.png"}
              alt={session?.user?.name?.slice(0, 2) || "user"}
              className="w-10 h-10 rounded-full object-cover"
            />
          </button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={"/account"}>My Profile</Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link href={"/upload"}>Upload Tip</Link>
            </MenuItem>

            <MenuItem>
              <button
                onClick={handleLogout}
                className="bg-red-500 w-full text-red-100 py-1 rounded-md"
              >
                Logout
              </button>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Link className="max-md:hidden" href={"/signin"}>
          <LuUserRound className="text-2xl" />
        </Link>
      )}
    </main>
  );
}
