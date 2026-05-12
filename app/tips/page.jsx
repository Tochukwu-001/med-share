"use client"
import React, { useState } from 'react';
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

const MedicalResources = () => {
  // Mock Array
  const initialTips = [
    {
      id: 1,
      title: "Maintaining Hydration in Tropical Climates",
      category: "Wellness",
      content: "Proper hydration is essential for regulating body temperature and ensuring organ function, especially in high-heat environments. Dehydration can lead to fatigue, dizziness, and more serious heat-related illnesses.",
      preventiveAdvice: "Drink at least 3 liters of water daily and avoid excessive caffeine which can act as a diuretic.",
      author: "Dr. Amara Okafor",
      authorImg: "https://i.pravatar.cc/150?u=amara",
      timestamp: "Oct 24, 2023",
      references: "WHO Water Intake Guidelines"
    },
    {
      id: 2,
      title: "Early Signs of Malaria Prevention",
      category: "Disease Control",
      content: "Malaria remains a significant health challenge. Recognizing early symptoms like intermittent fever, chills, and headaches can lead to faster treatment and better outcomes.",
      preventiveAdvice: "Always sleep under insecticide-treated nets and clear stagnant water around your living area.",
      author: "John Mensah",
      authorImg: "https://i.pravatar.cc/150?u=john",
      timestamp: "Oct 22, 2023",
      references: "CDC Malaria Prevention Protocol"
    },
    {
      id: 3,
      title: "Benefits of Local Seasonal Fruits",
      category: "Nutrition",
      content: "Consuming seasonal fruits like Mangoes and Pawpaws provides essential Vitamin C and antioxidants that boost the immune system and improve skin health.",
      preventiveAdvice: "Incorporate at least two servings of colorful fruits into your morning routine.",
      author: "Nutri-Watch Africa",
      authorImg: "https://i.pravatar.cc/150?u=nutri",
      timestamp: "Oct 20, 2023",
      references: ""
    }
  ];

  const [tips, setTips] = useState(initialTips);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this tip?")) {
      setTips(tips.filter(tip => tip.id !== id));
    }
  };

  return (
    <main className="min-h-dvh bg-slate-50 text-slate-900 pb-20">
      {/* Header Area */}
      <section className="bg-white border-b border-slate-200 py-16 px-6 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Health <span style={{ color: Theme.primaryGreen }}>Resources</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Browse verified medical tips and health advice submitted by our community.
          </p>
        </div>
      </section>

      {/* Grid Container */}
      <div className="max-w-6xl mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <article 
              key={tip.id} 
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="p-8 flex flex-col h-full relative">
                
                {/* Delete Button - Top Right */}
                <button 
                  onClick={() => handleDelete(tip.id)}
                  className="absolute top-6 right-6 p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  title="Delete Tip"
                >
                  <FiTrash2 size={20} />
                </button>

                {/* Category & Date */}
                <div className="flex items-center gap-3 mb-5">
                  <span 
                    className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: Theme.primaryGreen }}
                  >
                    {tip.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{tip.timestamp}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold mb-4 leading-tight">
                  {tip.title}
                </h2>

                {/* Content Snippet */}
                <div className="mb-6">
                  <p className="text-slate-600 line-clamp-2 leading-relaxed">
                    {tip.content}
                  </p>
                  <Link 
                    href={`/resources/${tip.id}`} 
                    className="text-sm font-bold mt-2 inline-block hover:opacity-70 transition-opacity"
                    style={{ color: Theme.primaryGreen }}
                  >
                    Read more →
                  </Link>
                </div>

                {/* Preventive Advice Box */}
                <div className="bg-slate-50 p-4 rounded-2xl mb-6 border-l-4" style={{ borderLeftColor: Theme.secondaryGreen }}>
                  <h4 className="text-[10px] font-black mb-1 uppercase text-slate-400 tracking-tighter">Quick Tip:</h4>
                  <p className="text-sm text-slate-700 leading-snug">{tip.preventiveAdvice}</p>
                </div>

                {/* Author Info */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={tip.authorImg} 
                      alt={tip.author} 
                      className="w-8 h-8 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                    <p className="text-xs font-bold text-slate-800">{tip.author}</p>
                  </div>
                  {tip.references && (
                     <span className="text-[10px] text-slate-400 italic">Ref: {tip.references.split(' ')[0]}...</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MedicalResources;