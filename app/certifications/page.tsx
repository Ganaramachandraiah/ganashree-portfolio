"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Certifications() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main
      className={`min-h-screen p-10 transition-colors duration-500 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-12">
        📜 Certifications
      </h1>

      <div className="space-y-16 max-w-5xl mx-auto">

        {/* Python for Data Science */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Python for Data Science
          </h2>

          <p className="font-medium mb-1">
            Infosys Springboard – Dec 2024
          </p>

          <p className="mb-6 leading-relaxed">
            This certification strengthened my foundation in Python programming
            for data analysis, statistical computation, and data manipulation.
            It focused on applying Python to real-world datasets using structured
            coding practices and analytical thinking.
          </p>

          <h3 className="font-semibold mb-3">Key Skills Acquired:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Data handling and preprocessing</li>
            <li>Working with libraries like NumPy and Pandas</li>
            <li>Data visualization fundamentals</li>
            <li>Structured problem-solving using Python</li>
          </ul>
        </motion.div>

        {/* Deepfake Technology */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Deepfake Technology – Cyber Security Implications & Defenses
          </h2>

          <p className="mb-6 leading-relaxed">
            This certification provided insights into deepfake generation
            techniques, their ethical implications, and cybersecurity risks.
            It emphasized defensive mechanisms and AI-based detection methods.
          </p>

          <h3 className="font-semibold mb-3">Key Learning Outcomes:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Understanding deep learning-based media manipulation</li>
            <li>Cybersecurity threats related to AI misuse</li>
            <li>Detection and mitigation strategies</li>
            <li>Ethical AI considerations</li>
          </ul>
        </motion.div>

        {/* Full Stack Web Development */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Full Stack Web Development
          </h2>

          <p className="font-medium mb-1">
            Completed – Feb 2025
          </p>

          <p className="mb-6 leading-relaxed">
            This certification enhanced my ability to design and develop
            complete web applications, integrating frontend and backend
            technologies while focusing on performance and usability.
          </p>

          <h3 className="font-semibold mb-3">Technical Areas Covered:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Frontend development using HTML, CSS, JavaScript</li>
            <li>Backend fundamentals and database integration</li>
            <li>Responsive design and UI structuring</li>
            <li>Client-server communication</li>
          </ul>
        </motion.div>

      </div>
    </main>
  );
}
