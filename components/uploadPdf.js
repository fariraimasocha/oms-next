"use client";

import { useState } from "react";
import { generateUploadButton } from "@uploadthing/react";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

export const Uploadbutton = generateUploadButton({
  url: "http://localhost:3000/api/uploadthing",
});

export default function UploadPdf() {
  const [fileUrl, setFileUrl] = useState(null);
  const [pdfContent, setPdfContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const question = "What is the content of the PDF?";

  const sendFileToBackend = async (url) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:3000/api/pdf-reader",
        {
          fileUrl: url,
          question: question,
        }
      );

      const content = response.data.response[0]?.text || "No content found";
      setPdfContent(content);
      toast.success("PDF analyzed successfully!");
    } catch (error) {
      console.error("Error sending file to backend:", error);
      toast.error("Failed to analyze PDF");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Uploadbutton
          endpoint="pdfUploader"
          url="http://localhost:3000/api/uploadthing"
          appearance={{
            button:
              "bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors duration-200",
            container: "w-full flex justify-center",
            allowedContent: "text-gray-600 text-sm mt-2",
          }}
          onClientUploadComplete={(res) => {
            setFileUrl(res[0]?.ufsUrl || null);
            toast.success("Upload Successful!");
            sendFileToBackend(res[0]?.ufsUrl || null);
          }}
          onUploadError={(error) => {
            toast.error(`ERROR! ${error.message}`);
          }}
        />

        {isLoading && (
          <div className="mt-4 flex items-center justify-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-gray-800" />
            <span className="text-gray-600">Analyzing PDF...</span>
          </div>
        )}
      </div>

      {pdfContent && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Document Analysis
          </h3>
          <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
            {pdfContent}
          </div>
        </div>
      )}
    </div>
  );
}
