"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { LuUserRound } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  const { data: session } = useSession();
  const [navOpen, setNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navLinks = [
    { label: "Home", url: "/" },
    { label: "Health Tips", url: "/tips" },
    { label: "Upload Tip", url: "/upload" },
    { label: "Contact Us", url: "/contact" },
  ];

  // Helper component for the User Profile Menu to avoid repetition
  const UserMenu = () => (
    <>
      <button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="focus:outline-none"
      >
        <Avatar 
          alt={session?.user?.name || "User"} 
          src={session?.user?.image || ""} 
          className="cursor-pointer border-2 border-emerald-100 hover:border-emerald-500 transition-all"
        />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/account" className="w-full">My Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/upload" className="w-full">Upload Tip</Link>
        </MenuItem>
        <MenuItem onClick={() => { handleClose(); signOut(); }}>
          <div className="bg-red-500 w-full text-center text-white px-4 py-1 rounded-md text-sm font-medium">
            Logout
          </div>
        </MenuItem>
      </Menu>
    </>
  );

  return (
    <main className="flex items-center justify-between px-6 py-3 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 z-50">
        <Image
          src="/logo.png"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10"
        />
        <span>
          <p className="font-light leading-none">MedShare</p>
          <p className="text-xs font-bold text-emerald-600">Africa</p>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="flex items-center gap-8 max-md:hidden">
        {navLinks.map((item, i) => (
          <Link 
            key={i} 
            href={item.url}
            className="text-lg hover:text-emerald-600 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Desktop User Action */}
      <div className="max-md:hidden flex items-center">
        {session ? (
          <UserMenu />
        ) : (
          <Link href="/signin">
            <LuUserRound className="text-2xl hover:text-emerald-600 transition-colors" />
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        onClick={() => setNavOpen(!navOpen)} 
        className="md:hidden z-50 text-2xl text-slate-800"
      >
        {navOpen ? <IoMdClose /> : <RiMenu3Fill />}
      </button>

      {/* Mobile Navbar Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white h-screen w-full transition-transform duration-300 ${navOpen ? "translate-y-0" : "-translate-y-full"} flex flex-col items-center gap-10 pt-28 z-40`}>
        {navLinks.map((item, i) => (
          <Link 
            key={i} 
            href={item.url} 
            onClick={() => setNavOpen(false)}
            className="text-2xl font-medium"
          >
            {item.label}
          </Link>
        ))}
        
        <div className="mt-4">
          {session ? (
            <div className="flex flex-col items-center gap-4">
              <UserMenu />
              <p className="text-sm text-slate-500">{session.user.name}</p>
            </div>
          ) : (
            <Link 
              href="/signin" 
              onClick={() => setNavOpen(false)}
              className="flex items-center gap-2 text-xl bg-emerald-600 text-white px-6 py-2 rounded-full"
            >
              Sign In <LuUserRound />
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}