"use client"
import React from 'react';
import { Theme } from "@/components/Theme";
import Link from "next/link";
// Ensure you have installed react-icons: npm install react-icons
import { HiOutlineTrash, HiOutlineExternalLink } from "react-icons/hi";

const MedicalTipsGrid = () => {
  // Mock Array of Medical Tips
  const [medicalTips, setMedicalTips] = React.useState([
    {
      id: 1,
      title: "Maintaining Heart Health in Urban Environments",
      category: "Cardiology",
      content: "Regular cardiovascular exercise is essential, even in busy cities. Aim for at least 30 minutes of brisk walking daily.",
      preventiveAdvice: "Reduce sodium intake and use stairs instead of elevators.",
      references: "WHO, African Heart Foundation",
      author: "Dr. Amara O.",
      authorImg: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "2026-04-28"
    },
    {
      id: 2,
      title: "Hydration and Kidney Function",
      category: "General Health",
      content: "Water acts as a natural filter for your kidneys. In tropical climates, the standard 8-glass rule may not be enough.",
      preventiveAdvice: "Carry a reusable water bottle and monitor urine color.",
      references: "National Kidney Foundation",
      author: "Samuel K.",
      authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "2026-04-25"
    },
    {
      id: 3,
      title: "Benefits of Local Leafy Greens",
      category: "Nutrition",
      content: "Local vegetables like Ugu and Shoko are packed with iron and essential vitamins that boost the immune system.",
      preventiveAdvice: "Incorporate steamed greens into at least three meals per week.",
      references: "Nutrition Society of Nigeria",
      author: "Grace E.",
      authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
      timestamp: "2026-04-20"
    }
  ]);

  const handleDelete = (id) => {
    // Basic filter logic for the mock state
    const filteredTips = medicalTips.filter(tip => tip.id !== id);
    setMedicalTips(filteredTips);
  };

  return (
    <main className="min-h-dvh bg-slate-50 py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">
              Health <span style={{ color: Theme.primaryGreen }}>Resources</span>
            </h1>
            <p className="text-slate-500 text-lg">Browse and manage community health insights.</p>
          </div>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalTips.map((tip) => (
            <article 
              key={tip.id} 
              className="flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all hover:shadow-xl group"
            >
              {/* Top Meta Bar */}
              <div className="px-6 pt-6 flex justify-between items-center">
                <span 
                  className="px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter text-white"
                  style={{ backgroundColor: Theme.secondaryGreen }}
                >
                  {tip.category}
                </span>
                <button 
                  onClick={() => handleDelete(tip.id)}
                  className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  title="Delete Tip"
                >
                  <HiOutlineTrash size={20} />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                  {tip.title}
                </h2>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {tip.content}
                </p>

                {/* Preventive Box */}
                <div className="mt-auto bg-slate-50 rounded-xl p-4 border-l-4 mb-6" style={{ borderColor: Theme.primaryGreen }}>
                  <p className="text-slate-700 text-xs font-semibold">
                    <span className="font-black uppercase text-[9px] block mb-1" style={{ color: Theme.primaryGreen }}>Quick Tip</span>
                    {tip.preventiveAdvice}
                  </p>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 border border-slate-200">
                        <img src={tip.authorImg} alt={tip.author} className="object-cover w-full h-full" />
                    </div>
                    <span className="text-xs font-bold text-slate-700">{tip.author}</span>
                  </div>
                  
                  <Link 
                    href={`/tips/${tip.id}`} 
                    className="flex items-center gap-1.5 text-xs font-black uppercase tracking-tight transition-all hover:translate-x-1"
                    style={{ color: Theme.primaryGreen }}
                  >
                    Read More <HiOutlineExternalLink size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {medicalTips.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No medical tips found. Check back later!</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default MedicalTipsGrid;