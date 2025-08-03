"use client";

import dynamic from "next/dynamic";
import { ComponentProps } from "react";

// Dynamically import PDFDownloadLink to prevent SSR issues
const PDFDownloadLink = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFDownloadLink),
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

// Type for PDFDownloadLink props
type PDFDownloadLinkProps = ComponentProps<typeof PDFDownloadLink>;

interface ClientPDFDownloadProps extends Omit<PDFDownloadLinkProps, 'children'> {
  children: (props: { loading: boolean }) => React.ReactNode;
}

export default function ClientPDFDownload({ children, ...props }: ClientPDFDownloadProps) {
  return (
    <PDFDownloadLink {...props}>
      {children}
    </PDFDownloadLink>
  );
}
