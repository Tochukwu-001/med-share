"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"; // Combined here
import { FaInstagram } from "react-icons/fa6";
import { BsTwitterx } from "react-icons/bs";
import { Theme } from "./Theme";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com", label: "Facebook" },
    { icon: <BsTwitterx />, url: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, url: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, url: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Branding */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <span className="font-bold text-xl tracking-tight">
              MedShare <span style={{ color: Theme.primaryGreen }}>Africa</span>
            </span>
          </Link>
          <p className="text-slate-600 text-sm leading-relaxed">
            Empowering African communities with reliable health information and verified medical insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-slate-800">Quick Links</h4>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li><Link href="/tips" className="hover:text-emerald-600 transition-colors">Health Tips</Link></li>
            <li><Link href="/about" className="hover:text-emerald-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-bold mb-6 text-slate-800">Resources</h4>
          <ul className="space-y-4 text-slate-600 text-sm">
            <li><Link href="/community" className="hover:text-emerald-600 transition-colors">Community Forum</Link></li>
            <li><Link href="/directory" className="hover:text-emerald-600 transition-colors">Medical Directory</Link></li>
            <li><Link href="/faq" className="hover:text-emerald-600 transition-colors">Help & FAQ</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="font-bold mb-6 text-slate-800">Follow Us</h4>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-slate-400 hover:text-emerald-600 transition-all transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        <p>© {currentYear} Med-Share Africa. All rights reserved.</p>
      </div>
    </footer>
  );
}