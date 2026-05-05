"use client";
import React, { useState } from "react";
import { Theme } from "@/components/Theme";
import Link from "next/link";
import {
  HiOutlineTag,
  HiOutlineClock,
  HiOutlineChevronRight,
  HiOutlineShieldCheck,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";

const TipsPage = () => {
  // Using state to allow for the delete functionality
  const [medicalTips, setMedicalTips] = useState([
    {
      id: 1,
      title: "Managing Hypertension Through Diet",
      category: "Cardiology",
      content:
        "Maintaining a balanced diet rich in potassium, magnesium, and fiber can significantly help manage high blood pressure. Reducing sodium intake is the primary step in dietary management.",
      preventiveAdvice:
        "Limit processed foods and aim for at least 30 minutes of aerobic activity.",
      author: "Dr. Sarah Mensah",
      timestamp: "Oct 24, 2025",
    },
    {
      id: 2,
      title: "Hydration in Tropical Climates",
      category: "General Wellness",
      content:
        "In high-temperature regions, the body loses fluids rapidly. Dehydration can lead to fatigue, kidney issues, and heatstroke if not monitored.",
      preventiveAdvice:
        "Drink 3 liters of water daily and wear breathable cotton clothing.",
      author: "Nurse John Okafor",
      timestamp: "Oct 22, 2025",
    },
    {
      id: 3,
      title: "Post-Natal Care Essentials",
      category: "Maternity",
      content:
        "The first six weeks after childbirth are critical for recovery. Proper rest, nutrition, and monitoring for infection or postpartum depression is vital.",
      preventiveAdvice:
        "Schedule a follow-up appointment within 3 weeks of delivery.",
      author: "Dr. Amara Cole",
      timestamp: "Oct 20, 2025",
    },
    {
      id: 4,
      title: "Malaria Prevention Strategies",
      category: "Infectious Disease",
      content:
        "Malaria remains a significant challenge. Use of insecticide-treated nets and indoor residual spraying are proven methods to reduce transmission rates.",
      preventiveAdvice:
        "Ensure all standing water around the home is drained weekly.",
      author: "Dr. Kofi Appiah",
      timestamp: "Oct 18, 2025",
    },
  ]);

  const handleDelete = (id) => {
    setMedicalTips(medicalTips.filter((tip) => tip.id !== id));
  };

  return (
    <main className="min-h-dvh bg-white">
      {/* --- HERO HEADER --- */}
      <section className="bg-[url('/bg1.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="bg-black/85 py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
              Medical{" "}
              <span style={{ color: Theme.primaryGreen }}>Database</span>
            </h1>
            <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
              Access verified medical insights and preventive guidelines shared
              by regional experts.
            </p>
          </div>
        </div>
      </section>

      {/* --- GRID CONTENT --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {medicalTips.map((tip) => (
            <article
              key={tip.id}
              className="flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
            >
              {/* Category & Delete Bar */}
              <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
                <span
                  className="px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                  style={{
                    backgroundColor: `${Theme.primaryGreen}15`,
                    color: Theme.primaryGreen,
                  }}
                >
                  <HiOutlineTag />
                  {tip.category}
                </span>
                <button
                  onClick={() => handleDelete(tip.id)}
                  className="text-slate-300 hover:text-red-500 transition-colors p-1"
                  title="Delete Resource"
                >
                  <HiOutlineTrash size={18} />
                </button>
              </div>

              {/* Main Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors">
                  {tip.title}
                </h2>

                <p className="text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed">
                  {tip.content}
                </p>

                {/* Condensed Preventive Box */}
                <div
                  className="p-4 rounded-xl mb-6 border border-emerald-100"
                  style={{ backgroundColor: `${Theme.secondaryGreen}05` }}
                >
                  <div
                    className="flex items-center gap-2 mb-1"
                    style={{ color: Theme.secondaryGreen }}
                  >
                    <HiOutlineShieldCheck size={16} />
                    <span className="font-black uppercase text-[10px] tracking-widest">
                      Prevention
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 italic leading-snug">
                    {tip.preventiveAdvice}
                  </p>
                </div>

                {/* Meta Footer */}
                <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                      <HiOutlineUser size={16} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-slate-900 leading-none">
                        {tip.author}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                        <HiOutlineClock size={10} /> {tip.timestamp}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/resources/${tip.id}`}
                    style={{ color: Theme.primaryGreen }}
                    className="text-xs font-black uppercase tracking-tighter flex items-center gap-1 group/link"
                  >
                    Read More
                    <HiOutlineChevronRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TipsPage;
