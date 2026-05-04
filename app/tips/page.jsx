"use client";
import React from 'react';
import Image from 'next/image';
import { Theme } from "@/components/Theme";
import { LuCalendar, LuTag, LuUser, LuShieldCheck } from "react-icons/lu";

const HealthTipsPage = () => {
  // Mock Data Array
  const medicalTips = [
    {
      id: 1,
      title: "Maintaining Hydration",
      category: "Wellness",
      content: "Staying hydrated is crucial for body temperature and organ function, especially in high-temperature regions.",
      preventiveAdvice: "Drink 3 liters of water daily. Avoid caffeine.",
      author: "Dr. Amara Okoro",
      authorImg: "https://images.unsplash.com/photo-1559839734-2b71f153678e?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "Oct 24, 2026"
    },
    {
      id: 2,
      title: "Malaria Response",
      category: "Infectious",
      content: "Recognizing early symptoms like fever and chills can be life-saving. Early diagnosis via RDT is essential.",
      preventiveAdvice: "Sleep under insecticide-treated nets.",
      author: "Prof. Kwame Mensah",
      authorImg: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "Oct 22, 2026"
    },
    {
      id: 3,
      title: "Nutrition & Energy",
      category: "Dietary",
      content: "Balanced meals with local grains provide sustained energy and support long-term immune system health.",
      preventiveAdvice: "Incorporate more leafy greens and whole grains.",
      author: "Nurse Sarah J.",
      authorImg: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "Oct 20, 2026"
    },
    {
      id: 4,
      title: "Post-Natal Care",
      category: "Maternal",
      content: "The first six weeks post-delivery are vital for both mother and child recovery and nutritional bonding.",
      preventiveAdvice: "Schedule weekly check-ups for the first month.",
      author: "Dr. Elena Vance",
      authorImg: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "Oct 18, 2026"
    }
  ];

  return (
    <main className="min-h-dvh bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Health <span style={{ color: Theme.primaryGreen }}>Resources</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
            Expert medical tips for the community
          </p>
        </header>

        {/* 3-Column Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalTips.map((tip) => (
            <article 
              key={tip.id} 
              className="bg-white rounded-[2rem] shadow-sm border border-slate-100 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header: Category & Date */}
              <div className="px-8 pt-8 flex justify-between items-center">
                <span 
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-slate-100"
                  style={{ color: Theme.secondaryGreen }}
                >
                  {tip.category}
                </span>
                <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold">
                  <LuCalendar size={12} />
                  <span>{tip.timestamp}</span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight leading-tight">
                  {tip.title}
                </h2>
                <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                  {tip.content}
                </p>

                {/* Preventive Advice Box */}
                <div className="mt-auto bg-slate-50 p-5 rounded-2xl border-l-4" style={{ borderLeftColor: Theme.primaryGreen }}>
                  <div className="flex items-center gap-2 mb-2 text-slate-800">
                    <LuShieldCheck size={16} />
                    <span className="text-[10px] font-black uppercase tracking-wider">Prevention</span>
                  </div>
                  <p className="text-xs text-slate-500 italic leading-snug">
                    "{tip.preventiveAdvice}"
                  </p>
                </div>
              </div>

              {/* Footer: Author Info */}
              <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-50 flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white shadow-sm">
                  <img 
                    src={tip.authorImg} 
                    alt={tip.author} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-800 uppercase tracking-tighter">{tip.author}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Medical Contributor</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HealthTipsPage;