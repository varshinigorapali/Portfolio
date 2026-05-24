import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ResumeViewProps {
  onClose: () => void;
}

function ResumeContent() {
  return (
    <div className="p-8 bg-white text-gray-900 space-y-6">
      <div className="text-center border-b-2 border-gray-300 pb-6">
        <h1 className="text-4xl font-bold">Varshini Gorapalli</h1>
        <p className="text-xl text-gray-600 mt-2">AI/ML Student</p>
        <p className="text-gray-600">Avanthi Institute of Engineering and Technology</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
          <span>Email: varshinigorapalli3@gmail.com</span>
          <span>•</span>
          <span>Location: India</span>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Passionate AI/ML student with strong programming foundation and keen interest in
          developing intelligent systems. Experienced in building innovative solutions and
          exploring cutting-edge technologies in artificial intelligence and machine learning.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">
          Education
        </h2>
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-gray-900">
              Bachelor of Technology (BTech) in Computer Science
            </h3>
            <p className="text-gray-600">
              Avanthi Institute of Engineering and Technology
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">
          Technical Skills
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Programming Languages</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• C</li>
              <li>• Python</li>
              <li>• Java</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">ML/AI</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• Machine Learning</li>
              <li>• Deep Learning</li>
              <li>• Data Science</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Tools & Frameworks</h3>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>• TensorFlow</li>
              <li>• PyTorch</li>
              <li>• Scikit-learn</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">
          Projects
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">QuickKart - 3D Product Viewer</h3>
            <p className="text-gray-600 text-sm">
              An innovative 3D product visualization platform that allows users to interact
              with products in three dimensions. Built with React, Three.js, and WebGL.
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <strong>Tech Stack:</strong> React, Three.js, WebGL, JavaScript
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-gray-300 pb-2">
          Areas of Interest
        </h2>
        <p className="text-gray-700">
          Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, AI
          Applications, Data Science, and Innovative Technology Solutions
        </p>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-300 pt-4 mt-6">
        <p>This resume was generated from my digital portfolio</p>
      </div>
    </div>
  );
}

export default function ResumeView({ onClose }: ResumeViewProps) {
  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const printStyle = document.createElement("style");
    printStyle.media = "print";
    printStyle.textContent = `
      @page {
        size: A4;
        margin: 0.5in;
      }
      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
        color-adjust: exact !important;
      }
      body {
        margin: 0 !important;
        padding: 0 !important;
        background: white !important;
      }
      body > :not(#resume-printable-content) {
        display: none !important;
      }
      #resume-printable-content {
        display: block !important;
      }
    `;
    document.head.appendChild(printStyle);
    return () => {
      document.head.removeChild(printStyle);
    };
  }, []);

  return createPortal(
    <>
      <div id="resume-printable-content" className="hidden print:block">
        <ResumeContent />
      </div>
      <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 print:hidden">
        <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Resume</h2>
            <div className="flex gap-2">
              <Button
                onClick={handlePrint}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Print
              </Button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          <ResumeContent />
        </div>
      </div>
    </>,
    document.body
  );
}
