"use client";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { FaRegPaperPlane } from "react-icons/fa";
import * as Yup from "yup";

export default function UploadClient() {
  const iv = {
    tip: "",
    desc: "",
    cat: "",
  };

  const valSchema = Yup.object({
    tip: Yup.string().required("Health tip is required"),
    desc: Yup.string().required("Provide a valid description"),
    cat: Yup.string().required("Select a valid category"),
  });

  return (
    <main className="min-h-dvh">
      <Formik initialValues={iv} validationSchema={valSchema}>
        <Form>
          <div>
            <label>Health Tip</label>
            <Field name="tip" />
            <ErrorMessage
              component={"p"}
              className="text-red-500 text-sm"
              name="tip"
            />
          </div>
          <div>
            <label>Description</label>
            <Field name="desc" as="textarea" />
            <ErrorMessage name="desc" />
          </div>
          <div>
            <label>Category</label>
            <Field name="cat" as="select">
              <option value="cardio">Cardio</option>
              <option value="neuro">Neuro</option>
              <option value="dermal">Dermal</option>
              <option value="ent">ENT</option>
              <option value="Radio">Radiography</option>
              <option value="dentistry">Dentistry</option>
              <option value="haematology">Haematology</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="cat" />
          </div>
          <button>
            <span>
              Post <FaRegPaperPlane />
            </span>
          </button>
        </Form>
      </Formik>
    </main>
  );
}
