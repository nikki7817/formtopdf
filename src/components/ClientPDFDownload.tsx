"use client";

import dynamic from "next/dynamic";
import { ReactNode, ComponentType } from "react";

// Define the props interface
interface ClientPDFDownloadProps {
  document: ReactNode;
  fileName: string;
  className?: string;
  children: (props: { loading: boolean }) => ReactNode;
}

// Create a wrapper component to handle the dynamic import
const DynamicPDFDownloadLink = dynamic(
  async () => {
    const { PDFDownloadLink } = await import("@react-pdf/renderer");
    return { default: PDFDownloadLink as ComponentType<any> };
  },
  {
    ssr: false,
    loading: () => (
      <button
        disabled
        className="flex-1 flex justify-center items-center gap-2 bg-gray-400 text-white py-2 rounded-lg font-semibold cursor-not-allowed"
      >
        <img
          src="/icons/download.svg"
          alt="Download"
          className="w-5 h-5 mr-2"
        />
        Loading...
      </button>
    ),
  }
);

export default function ClientPDFDownload(props: ClientPDFDownloadProps) {
  return <DynamicPDFDownloadLink {...props} />;
}
