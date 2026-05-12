"use client";
import Image from "next/image";
import Link from "next/link";
import { LuUserRound } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  const { data: session } = useSession();
  const [navOpen, setNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  
  const open = Boolean(anchorEl);

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Health Tips", url: "/tips" },
    { label: "Upload Tip", url: "/upload" },
    { label: "Contact Us", url: "/contact" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // This function triggers the reactive logout
  const handleLogout = async () => {
    handleClose();
    await signOut({ callbackUrl: "/" }); 
  };

  return (
    <main className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0">
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

      {/* Desktop and Tab Navbar */}
      <div className="flex items-center gap-8 max-md:hidden">
        {navLinks.map((item, i) => (
          <Link
            key={i}
            className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-6 border-white hover:border-[#468432] transition-all duration-200"
            href={item.url}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div
        className={`md:hidden bg-white h-dvh w-full absolute top-0 left-0 ${navOpen ? "flex" : "hidden"}
         flex-col items-center gap-10 pt-20`}
      >
        {navLinks.map((item, i) => (
          <Link
            key={i}
            onClick={() => setNavOpen(false)}
            className="text-lg hover:bg-[#67C090] py-1 px-2 border-b-6 border-white hover:border-[#468432] transition-all duration-200"
            href={item.url}
          >
            {item.label}
          </Link>
        ))}

        {!session && (
          <Link href={"/signin"} className="flex items-center gap-2 text-lg">
            Sign in <LuUserRound className="text-2xl" />
          </Link>
        )}
      </div>

      <button
        onClick={() => setNavOpen(!navOpen)}
        className="md:hidden z-50 text-2xl"
      >
        {navOpen ? <IoMdClose /> : <RiMenu3Fill />}
      </button>

      {session ? (
        <div>
          <button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}

          >
            <Avatar alt={session?.user?.name} src={session?.user?.image} />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href={"/account"}>My profile</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href={"/tips"}>Upload Tip</Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <button className="bg-red-500 w-full text-white m-0 py-1 px-4 rounded-md">
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