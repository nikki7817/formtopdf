"use client";

import { useRouter } from "next/navigation";
import ClientPDFDownload from "@/components/ClientPDFDownload";
import PDFDocument from "@/components/PDFDocument";
import { useFormStore } from "../store/useFormStore";
import Image from "next/image";

export default function PreviewPage() {
  const router = useRouter();
  const { name, email, phone, position, description } = useFormStore();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-center mb-8">Preview PDF</h1>

        {/* Preview Card with Zustand data */}
        <div className="bg-white border shadow-sm rounded-lg p-6 space-y-3">
          <div className="flex">
            <span className="font-semibold w-32">Name:</span>
            <span className="text-gray-700">{name}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Email:</span>
            <span className="text-gray-700">{email}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Phone Number:</span>
            <span className="text-gray-700">{phone}</span>
          </div>
          <div className="flex">
            <span className="font-semibold w-32">Position:</span>
            <span className="text-gray-700">{position}</span>
          </div>
          <div className="flex items-start">
            <span className="font-semibold w-32">Description:</span>
            <span className="text-gray-700">{description}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
          
            onClick={() => router.push("/")}
            className="flex-1 flex justify-center items-center gap-2 bg-gray-400 text-white py-2 rounded-lg font-semibold hover:opacity-90"
          >

                       <Image
                        src="/icons/chevron-left.svg"
                        alt="Back"
                        width={20}
                        height={20}
                        className="text-gray-400 mr-2"
                      />
            Back
  
          </button>
       <ClientPDFDownload
  document={<PDFDocument />}
  fileName="form-details.pdf"
  className="flex-1 flex justify-center items-center gap-2 bg-gradient-to-r from-green-700 to-green-600 text-white py-2 rounded-lg font-semibold hover:opacity-90"
>
  {/* Child content inside link */}
  {({ loading }: { loading: boolean }) =>
    loading ? (
      "Preparing..."
    ) : (
      <>
        <Image
          src="/icons/Download.svg"
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

        </div>
      </div>
    </div>
  );
}
