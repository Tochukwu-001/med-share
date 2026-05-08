"use client";
import React from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
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

  const inputStyles = "block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm transition-all outline-none";
  const labelStyles = "block text-sm font-bold text-slate-700 mb-2 uppercase tracking-tight";

  return (
    <main className="min-h-dvh bg-slate-50 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900">
            Share a <span style={{ color: Theme.primaryGreen }}>Health Tip</span>
          </h1>
          <p className="text-slate-500 mt-2">Share your medical knowledge with the Med-Share community.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12">
          <Formik
            initialValues={iv}
            validationSchema={valSchema}
            onSubmit={(values) => console.log(values)}
          >
            <Form className="space-y-6">
              {/* Health Tip Field */}
              <div>
                <label htmlFor="tip" className={labelStyles}>Health Tip</label>
                <Field 
                  name="tip" 
                  placeholder="Enter the title of your tip" 
                  className={inputStyles} 
                />
                <ErrorMessage name="tip" component="p" className="text-red-500 text-xs mt-2 font-medium" />
              </div>

              {/* Category Field */}
              <div>
                <label htmlFor="cat" className={labelStyles}>Category</label>
                <Field name="cat" as="select" className={inputStyles}>
                  <option value="">Select a Category</option>
                  <option value="cardio">Cardio</option>
                  <option value="neuro">Neuro</option>
                  <option value="dermal">Dermal</option>
                  <option value="ent">Ent</option>
                  <option value="radiography">Radiography</option>
                  <option value="dentistry">Dentistry</option>
                  <option value="haematology">Haematology</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="cat" component="p" className="text-red-500 text-xs mt-2 font-medium" />
              </div>

              {/* Description Field */}
              <div>
                <label htmlFor="desc" className={labelStyles}>Description</label>
                <Field 
                  name="desc" 
                  as="textarea" 
                  rows="5" 
                  placeholder="Provide a detailed medical description..." 
                  className={inputStyles} 
                />
                <ErrorMessage name="desc" component="p" className="text-red-500 text-xs mt-2 font-medium" />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  style={{ backgroundColor: Theme.secondaryGreen }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-white font-black uppercase tracking-widest text-sm transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95"
                >
                  Post <FaRegPaperPlane className="text-lg" />
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}