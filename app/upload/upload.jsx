"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FaRegPaperPlane, FaLeaf } from 'react-icons/fa';
import { collection, addDoc } from "firebase/firestore"; 
import * as Yup from 'yup';
import { db } from '@/config/firebase';

export default function UploadClient({ session }) { // Added curly braces for destructuring session

    const iv = {
        tip: "",
        description: "",
        category: ""
    }

    const valSchema = Yup.object().shape({
        tip: Yup.string().required("Health tip is required"),
        description: Yup.string().required("Description is required"),
        category: Yup.string().required("Category is required")
    })

    const inputClasses = "w-full px-4 py-3 mt-1 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#67C090] focus:border-[#67C090] outline-none transition-all duration-200 bg-white text-gray-700 placeholder:text-gray-400";
    const labelClasses = "block text-sm font-bold text-[#468432] mb-1 ml-1";

    return (
        <main className="min-h-screen bg-[#f8faf9] py-10 px-4">
            <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl shadow-green-900/5 overflow-hidden border border-gray-100">
                
                <div className="bg-gradient-to-r from-[#67C090] to-[#468432] p-8 text-white">
                    <div className="flex items-center gap-3 mb-2">
                        <FaLeaf className="text-white/90" size={24} />
                        <h1 className="text-2xl font-extrabold tracking-tight">Create Health Tip</h1>
                    </div>
                    <p className="text-green-50/80 text-sm">Fill in the details below to share your medical expertise.</p>
                </div>

                <Formik
                    initialValues={iv}
                    validationSchema={valSchema}
                    onSubmit= async {(values, { setSubmitting, resetForm }) => {
                        try {
                            const dbobject = {
                                ...values,
                            author: session?.user?.name,
                            authorImg: session?.user?.image,
                            refi: session?.user?.id,
                            timestamp: new Date().toLocaleDateString() // Fixed spelling
                        }
                        console.log(dbobject);

                        const docRef= await addDoc(collection(db, "health-Tips"), dbobject);
                    }
                        catch (error) {
                            console.error("Error creating health tip:", error);
                        }
                        console.log(dbobject);
                        setSubmitting(false);
                    }}
                >
                    {/* 1. Open the function here */}
                    {({ isSubmitting }) => (
                        <Form className="p-8 space-y-5">
                            <div>
                                <label className={labelClasses}>Health Tip Title</label>
                                <Field 
                                    name="tip" 
                                    placeholder="Enter a catchy health headline..."
                                    className={inputClasses} 
                                />
                                <ErrorMessage component="p" className="text-red-500 text-xs mt-1 font-medium italic" name="tip" />
                            </div>

                            <div>
                                <label className={labelClasses}>Specialty Category</label>
                                <div className="relative">
                                    <Field as="select" name="category" className={`${inputClasses} appearance-none cursor-pointer`}>
                                        <option value="" disabled hidden>Select a specialty...</option>
                                        <option value="cardio">Cardiology</option>
                                        <option value="neuro">Neurology</option>
                                        <option value="ent">ENT (Ear, Nose, Throat)</option>
                                        <option value="dermal">Dermatology</option>
                                        <option value="radiography">Radiography</option>
                                        <option value="dentistry">Dentistry</option>
                                        <option value="nutrition">Nutrition & Dietetics</option>
                                        <option value="heamatology">Hematology</option>
                                    </Field>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#468432]">
                                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                                    </div>
                                </div>
                                <ErrorMessage component="p" className="text-red-500 text-xs mt-1 font-medium italic" name="category" />
                            </div>

                            <div>
                                <label className={labelClasses}>Content / Description</label>
                                <Field 
                                    as="textarea" 
                                    name="description" 
                                    rows="4"
                                    placeholder="Explain the health tip in detail..."
                                    className={`${inputClasses} resize-none`} 
                                />
                                <ErrorMessage component="p" className="text-red-500 text-xs mt-1 font-medium italic" name="description" />
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{ backgroundColor: '#67C090' }}
                                    className="w-full hover:bg-[#468432] text-white font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-green-200 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Publishing...
                                        </span>
                                    ) : (
                                        <>
                                            <span className="uppercase tracking-wider text-sm">Post Health Tip</span>
                                            <FaRegPaperPlane />
                                        </>
                                    )}
                                </button>
                            </div>
                        </Form>
                    )} 
                    {/* 2. Close the function here */}
                </Formik> 
                {/* 3. Close Formik here */}
            </div>
        </main>
    )
}