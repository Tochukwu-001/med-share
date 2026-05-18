"use client";
import React, { useState } from 'react';
import { FiLogOut, FiUser, FiCheck } from "react-icons/fi";
import { Theme } from "@/components/Theme";

export default function ProfilePage() {
    // Mock user state
    const [user, setUser] = useState({
        name: "Dr. Amara Okafor",
        email: "amara.okafor@medshare.org",
        image: "https://i.pravatar.cc/150?u=amara",
        role: "Medical Contributor"
    });

    const [nameInput, setNameInput] = useState(user.name);
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        const val = e.target.value;
        setNameInput(val);
        
        // Simple manual validation matching your layout rules
        if (val.trim().length < 3) {
            setError("Name must be at least 3 characters");
        } else {
            setError("");
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (!error && nameInput.trim().length >= 3) {
            setUser(prev => ({ ...prev, name: nameInput.trim() }));
            alert("Profile updated successfully!");
        }
    };

    const handleLogout = () => {
        if (confirm("Are you sure you want to log out?")) {
            console.log("Logging out...");
            // Add your logout routing/logic here
        }
    };

    const isDirty = nameInput.trim() !== user.name;
    const isInvalid = !!error || nameInput.trim().length < 3;

    return (
        <main className="min-h-dvh bg-slate-50 py-12 px-6">
            <div className="max-w-xl mx-auto">
                
                {/* Profile Card Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    
                    {/* Top Decorative Banner */}
                    <div className="h-32 w-full" style={{ backgroundColor: Theme.primaryGreen }} />

                    {/* Avatar & Identity Section */}
                    <div className="px-8 pb-6 text-center relative -mt-16">
                        <div className="inline-block relative mb-4">
                            <img 
                                src={user.image} 
                                alt={user.name} 
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md bg-white"
                            />
                        </div>
                        <h1 className="text-3xl font-black text-slate-900">{user.name}</h1>
                        <p className="text-sm font-bold uppercase tracking-wider mt-1" style={{ color: Theme.secondaryGreen }}>
                            {user.role}
                        </p>
                        <p className="text-slate-400 text-sm font-light mt-1">{user.email}</p>
                    </div>

                    <hr className="border-slate-100 mx-8" />

                    {/* Form & Actions Section */}
                    <div className="p-8">
                        <form onSubmit={handleSave} className="flex flex-col gap-6">
                            {/* Edit Name Field */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Update Name</label>
                                <div className="relative flex items-center">
                                    <FiUser className="absolute left-4 text-slate-400" size={18} />
                                    <input 
                                        type="text"
                                        value={nameInput}
                                        onChange={handleNameChange}
                                        placeholder="Your full name"
                                        className={`w-full pl-12 pr-5 py-4 rounded-2xl border transition-all focus:outline-none focus:ring-2 bg-slate-50 font-medium ${
                                            error ? 'border-red-400' : 'border-slate-200'
                                        }`}
                                        style={{ '--tw-ring-color': Theme.primaryGreen }}
                                    />
                                </div>
                                {error && <p className="text-red-500 text-xs font-bold ml-1">{error}</p>}
                            </div>

                            {/* Action Buttons Row */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                                {/* Save Changes Button */}
                                <button 
                                    type="submit"
                                    disabled={!isDirty || isInvalid}
                                    className="w-full sm:flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-full text-white font-bold text-base transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                                    style={{ backgroundColor: Theme.primaryGreen }}
                                >
                                    <FiCheck /> Save Changes
                                </button>

                                {/* Log Out Button */}
                                <button 
                                    type="button"
                                    onClick={handleLogout}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 py-4 px-8 rounded-full border border-slate-200 text-slate-600 font-bold text-base hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-colors active:scale-95"
                                >
                                    <FiLogOut /> Log Out
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </main>
    );
}