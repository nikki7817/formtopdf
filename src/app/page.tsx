"use client";

import { useRouter } from "next/navigation";
import { useFormStore } from "./store/useFormStore";
import ClientPDFDownload from "@/components/ClientPDFDownload";
import PDFDocument from "@/components/PDFDocument";
import { useState } from "react";
import Image from "next/image";

export default function FormPage() {
  const router = useRouter();
  const { name, email, phone, position, description, setField } = useFormStore();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Validation
  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name) errs.name = "Name is required";
    if (!email) errs.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) errs.email = "Invalid email";
    if (!phone) errs.phone = "Phone is required";
    else if (phone.length < 10) errs.phone = "Phone must be at least 10 digits";
    return errs;
  };

  const handleViewPDF = () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    router.push("/preview");
  };

  // Helper to check if form is valid (for download button)
  const isFormValid = () => {
    return !Object.keys(validate()).length;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-8">Add Your Details</h1>

        {/* Input Fields */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm font-semibold">Name</label>
            <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm mt-1">
              <Image
                src="/icons/user.svg"
                alt="User"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setField("name", e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-semibold">Email</label>
            <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm mt-1">
               <Image
                src="/icons/mail.svg"
                alt="Mail"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
              <input
                type="email"
                placeholder="e.g. Johndoe@gmail.com"
                value={email}
                onChange={(e) => setField("email", e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm mt-1">
               <Image
                src="/icons/phone-call.svg"
                alt="Phone"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
              <input
                type="text"
                placeholder="e.g. (220) 222 -20002"
                value={phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          {/* Position */}
          <div>
            <label className="text-sm font-semibold">Position</label>
            <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm mt-1">
               <Image
                src="/icons/position.svg"
                alt="Position"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
              <input
                type="text"
                placeholder="e.g. Junior Front end Developer"
                value={position}
                onChange={(e) => setField("position", e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold">Description</label>
            <div className="flex items-center border rounded-xl px-3 py-2 shadow-sm mt-1">
               <Image
                src="/icons/Description.svg"
                alt="Description"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
              <textarea
                placeholder="e.g. Work experiences"
                value={description}
                onChange={(e) => setField("description", e.target.value)}
                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          {/* View PDF Button */}
          <button
            onClick={handleViewPDF}
            className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-green-700 to-green-600 text-white py-2 rounded-lg font-semibold hover:opacity-90"
          >
             <Image
                src="/icons/view.svg"
                alt="View"
                width={20}
                height={20}
                className="text-gray-400 mr-2"
              />
            View PDF
          </button>

          {/* Download PDF Button using React-PDF */}
{isFormValid() ? (
  <ClientPDFDownload
    document={<PDFDocument />}
    fileName="form-details.pdf"
    className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-green-700 to-green-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 text-center"
  >
    {({ loading }: { loading: boolean }) =>
      loading ? (
        "Preparing..."
      ) : (
        <>
          <Image
            src="/icons/download.svg"
            alt="Download"
            width={20}
            height={20}
            className="mr-2"
          />
          Download PDF
        </>
      )
    }
  </ClientPDFDownload>
) : (
  <button
    disabled
    className="flex-1 flex justify-center items-center gap-2 bg-gray-400 text-white py-2 rounded-lg font-semibold cursor-not-allowed"
  >
    <Image
      src="/icons/download.svg"
      alt="Download"
      width={20}
      height={20}
      className="mr-2"
    />
    Download PDF
  </button>
)}

        </div>
      </div>
    </div>
  );
}
