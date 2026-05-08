"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
import { Theme } from "@/components/Theme";
import * as Yup from 'yup';

export default function UploadClient() {
    const iv = {
        tip: "",
        desc: "",
        cat: ""
    };

    const valSchema = Yup.object({
        tip: Yup.string().required("Health tip is required"),
        desc: Yup.string().required("Provide a valid description"),
        cat: Yup.string().required("Select a valid category")
    });

    return (
        <main className="min-h-dvh bg-slate-50 py-12 px-6">
            <div className="max-w-2xl mx-auto">
                {/* Header Text */}
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-black mb-3">
                        Share a <span style={{ color: Theme.primaryGreen }}>Health Tip</span>
                    </h1>
                    <p className="text-slate-500 font-light">
                        Contribute to the community by sharing reliable medical knowledge.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <Formik
                        initialValues={iv}
                        validationSchema={valSchema}
                        onSubmit={(values) => {
                            console.log("Form Data:", values);
                            alert("Tip submitted successfully!");
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col gap-8">
                                {/* Tip Title */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Health Tip Title</label>
                                    <Field 
                                        name="tip" 
                                        placeholder="e.g. Importance of Vitamin D"
                                        className={`w-full px-5 py-4 rounded-2xl border transition-all focus:outline-none focus:ring-2 bg-slate-50 ${
                                            errors.tip && touched.tip ? 'border-red-400' : 'border-slate-200'
                                        }`}
                                        style={{ '--tw-ring-color': Theme.primaryGreen }}
                                    />
                                    <ErrorMessage component="p" className="text-red-500 text-xs font-bold ml-1" name="tip"/>
                                </div>

                                {/* Category Select */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Category</label>
                                    <div className="relative">
                                        <Field 
                                            name="cat" 
                                            as="select"
                                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 bg-slate-50 appearance-none cursor-pointer"
                                            style={{ '--tw-ring-color': Theme.primaryGreen }}
                                        >
                                            <option value="" disabled>Select a category</option>
                                            <option value="cardio">Cardio</option>
                                            <option value="neuro">Neuro</option>
                                            <option value="dermal">Dermal</option>
                                            <option value="ent">ENT</option>
                                            <option value="radiography">Radiography</option>
                                            <option value="dentistry">Dentistry</option>
                                            <option value="haematology">Haematology</option>
                                            <option value="other">Other</option>
                                        </Field>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-400">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    <ErrorMessage component="p" className="text-red-500 text-xs font-bold ml-1" name="cat"/>
                                </div>

                                {/* Description Textarea */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Content / Description</label>
                                    <Field 
                                        name="desc" 
                                        as="textarea" 
                                        rows="5"
                                        placeholder="Provide detailed health information here..."
                                        className={`w-full px-5 py-4 rounded-2xl border transition-all focus:outline-none focus:ring-2 bg-slate-50 resize-none ${
                                            errors.desc && touched.desc ? 'border-red-400' : 'border-slate-200'
                                        }`}
                                        style={{ '--tw-ring-color': Theme.primaryGreen }}
                                    />
                                    <ErrorMessage component="p" className="text-red-500 text-xs font-bold ml-1" name="desc"/>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full md:w-max md:self-end flex items-center justify-center gap-3 py-4 px-10 rounded-full text-white font-black text-lg transition-transform active:scale-95 shadow-lg"
                                    style={{ backgroundColor: Theme.primaryGreen }}
                                >
                                    Post Tip <FaRegPaperPlane className="text-sm" />
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                
                {/* Back Link */}
                <p className="text-center mt-10 text-slate-400 text-sm italic">
                    All submissions are reviewed for community safety. 
                    <button className="ml-2 font-bold underline" style={{ color: Theme.secondaryGreen }}>Learn more</button>
                </p>
            </div>
        </main>
    );
}