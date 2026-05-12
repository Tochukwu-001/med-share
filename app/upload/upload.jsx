"use client";
import React, { useState } from 'react';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { FaRegPaperPlane } from "react-icons/fa";
import { Theme } from "@/components/Theme";
import * as Yup from 'yup';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/config/firebase';
import { FiLoader } from "react-icons/fi";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaThumbsUp } from "react-icons/fa";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function UploadClient({session}) {
  const [processing, setProcessing] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
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
            onSubmit={ async (values, {resetForm}) => {
              try {
                setProcessing(true)
              const dbobject = {
              ...values,
              author: session?.user?.name,
              authorImg: session?.user?.image,
              refId: session?.user?.id,
              timestamp: new Date().toLocaleDateString()
              }

              const docRef = await addDoc(collection(db, "health-tips"), dbobject)
              resetForm()
              handleOpen()
              // console.log(dbobject);
            } catch (error) {
              console.error("An error occurred", error)
              alert("Something went wrong")
            } finally{
              setProcessing(false)
            }
            }}
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
                disabled={processing}
                  type="submit"
                  style={{ backgroundColor: Theme.secondaryGreen }}
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-full text-white font-black uppercase tracking-widest text-sm transition-all hover:shadow-lg hover:-translate-y-1 active:scale-95"
                >
                  {
                    processing ? <FiLoader className='text-2xl animate-spin' /> :
                     <span className='flex items-center gap-2'>
                  Post Tip
                  <FaRegPaperPlane className="text-lg" />
                  </span>
                  }
                 
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {/* confirmation modal */}
      <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='flex items-center justify-center'>
            <FaThumbsUp className='text-6xl text-green-600' />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='text-center'>
           Health tip was sucessfully submitted
          </Typography>
        </Box>
      </Modal>
    </div>
    </main>
  );
}