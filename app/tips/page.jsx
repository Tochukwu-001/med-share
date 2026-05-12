"use client"

import React from 'react';
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { HiOutlineExternalLink, HiOutlineTrash } from "react-icons/hi";

const HealthTipsPage = () => {
  // Mock array with 6 cards
  const healthTips = [
    {
      id: 1,
      title: "Maintaining Heart Health in Your 30s",
      category: "Cardiovascular",
      content: "Regular cardiovascular exercise for at least 30 minutes a day can significantly reduce the risk of heart disease.",
      preventiveAdvice: "Reduce sodium intake and monitor your blood pressure every 6 months.",
      references: "WHO Heart Health Guidelines",
      author: "Dr. Sarah Mensah",
      authorImg: "https://i.pravatar.cc/150?u=1",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      title: "The Importance of Hydration",
      category: "General Wellness",
      content: "In high-temperature regions, the body loses fluids faster than usual. Staying hydrated is crucial for cognitive function.",
      preventiveAdvice: "Carry a reusable 1.5L bottle and aim to finish at least two of them daily.",
      references: "Africa Health Journal",
      author: "Nneka Okafor",
      authorImg: "https://i.pravatar.cc/150?u=2",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      title: "Managing Desktop Eye Strain",
      category: "Occupational Health",
      content: "Long hours in front of screens can lead to digital eye strain, headaches, and blurred vision.",
      preventiveAdvice: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.",
      references: "Vision Council Africa",
      author: "Kofi Arhin",
      authorImg: "https://i.pravatar.cc/150?u=3",
      timestamp: "1 day ago"
    },
    {
      id: 4,
      title: "Benefits of Local Superfoods",
      category: "Nutrition",
      content: "Integrating local grains like Fonio and Baobab fruit into your diet provides essential antioxidants and fiber.",
      preventiveAdvice: "Swap processed cereals for whole-grain local alternatives once a day.",
      references: "Nutrition Studies Institute",
      author: "Amara Eze",
      authorImg: "https://i.pravatar.cc/150?u=4",
      timestamp: "2 days ago"
    },
    {
      id: 5,
      title: "Post-Pregnancy Wellness Tips",
      category: "Maternal Health",
      content: "Recovery after childbirth requires both physical rest and mental health support. Nutrition plays a key role.",
      preventiveAdvice: "Prioritize iron-rich foods and ensure you have a support system for mental rest.",
      references: "Maternal Health Network",
      author: "Dr. Elena Vance",
      authorImg: "https://i.pravatar.cc/150?u=5",
      timestamp: "3 days ago"
    },
    {
      id: 6,
      title: "Effective Stress Management",
      category: "Mental Health",
      content: "Chronic stress impacts the immune system. Finding small daily rituals for relaxation is a necessity, not a luxury.",
      preventiveAdvice: "Practice deep breathing exercises for 5 minutes before bed each night.",
      references: "Psychology Today Africa",
      author: "Samuel Tunde",
      authorImg: "https://i.pravatar.cc/150?u=6",
      timestamp: "1 week ago"
    }
  ];

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the tip: "${title}"?`)) {
      console.log(`Deleting ID: ${id}`);
      // Logic to update state or call API goes here
    }
  };

  return (
    <main className="min-h-dvh bg-slate-50">
      {/* Header Section following your UI structure */}
      <section className="bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="bg-black/70 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white italic tracking-tight">
               Health <span style={{ color: Theme.primaryGreen }}>Tips & Library</span>
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto font-light">
              Explore 6 featured insights from our medical community.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {healthTips.map((tip) => (
            <article 
              key={tip.id} 
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Category Header */}
              <div className="px-8 pt-8 pb-4">
                <span 
                  style={{ backgroundColor: `${Theme.primaryGreen}15`, color: Theme.primaryGreen }} 
                  className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
                >
                  {tip.category}
                </span>
              </div>

              {/* Main Content */}
              <div className="px-8 pb-6 flex-grow space-y-4">
                <h2 className="text-2xl font-black text-slate-900 leading-tight group-hover:text-slate-700 transition-colors">
                  {tip.title}
                </h2>
                <p className="text-slate-500 font-light text-sm line-clamp-3 italic">
                  "{tip.content}"
                </p>
                
                {/* Advice Box */}
                <div className="bg-slate-50 p-5 rounded-3xl border-l-4 border-slate-200 group-hover:border-green-400 transition-colors">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">Preventive Advice</h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">{tip.preventiveAdvice}</p>
                </div>
              </div>

              {/* Footer Section */}
              <div className="px-8 py-6 bg-slate-50/40 border-t border-slate-50 mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src={tip.authorImg} alt={tip.author} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                    <div>
                      <p className="text-sm font-bold text-slate-800">{tip.author}</p>
                      <p className="text-[11px] text-slate-400 font-medium">{tip.timestamp}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleDelete(tip.id, tip.title)}
                    className="p-2.5 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                  >
                    <HiOutlineTrash size={22} />
                  </button>
                </div>

                <Link 
                  href={`/tips/${tip.id}`}
                  style={{ backgroundColor: Theme.secondaryGreen }}
                  className="w-full flex items-center justify-center gap-2 text-white text-sm font-bold py-4 rounded-2xl shadow-md hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <HiOutlineExternalLink size={20} />
                  Read Full Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HealthTipsPage;