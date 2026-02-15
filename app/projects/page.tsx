"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {
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
        🚀 Projects
      </h1>

      <div className="space-y-16 max-w-6xl mx-auto">

        {/* Neurological Disorder Detection */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Neurological Disorder Detection Using Gait Analysis
          </h2>

          <p className="mb-6 leading-relaxed">
            Developed an AI-based system to detect neurological disorders
            through gait pattern analysis. The project integrates traditional
            machine learning techniques with computer vision to assist
            paralysis patients in interacting with web applications.
          </p>

          <h3 className="font-semibold mb-3">Key Contributions:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Applied feature extraction and classification techniques</li>
            <li>Integrated OpenCV for facial detection</li>
            <li>Used Pandas and NumPy for data preprocessing</li>
            <li>Implemented ML models using Scikit-learn</li>
            <li>Enabled communication support via Twilio integration</li>
          </ul>

          <h3 className="font-semibold mb-3">Technologies Used:</h3>
          <p>
            Python, OpenCV, Scikit-learn, Pandas, NumPy, HTML, CSS, JavaScript
          </p>
        </motion.div>

        {/* Blood Bank Management System */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Blood Bank Management System
          </h2>

          <p className="mb-6 leading-relaxed">
            Designed and developed a full-stack web application to manage
            donor and recipient records, monitor blood availability, and
            streamline blood request workflows.
          </p>

          <h3 className="font-semibold mb-3">Key Features:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Donor registration and record management</li>
            <li>Blood inventory tracking</li>
            <li>Recipient request processing</li>
            <li>Secure database integration</li>
          </ul>

          <h3 className="font-semibold mb-3">Technologies Used:</h3>
          <p>
            HTML, CSS, JavaScript, Python, MySQL
          </p>
        </motion.div>

        {/* Portfolio Website */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Personal Portfolio Website
          </h2>

          <p className="mb-6 leading-relaxed">
            Developed a responsive and interactive personal portfolio
            website showcasing technical projects, skills, and achievements.
            Focused on UI/UX design and frontend performance optimization.
          </p>

          <h3 className="font-semibold mb-3">Skills Demonstrated:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Responsive web design</li>
            <li>DOM manipulation</li>
            <li>Clean UI structuring</li>
            <li>Frontend optimization techniques</li>
          </ul>

          <h3 className="font-semibold mb-3">Technologies Used:</h3>
          <p>
            HTML, CSS, JavaScript
          </p>
        </motion.div>

        {/* Tic Tac Toe */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Tic Tac Toe Game
          </h2>

          <p className="mb-6 leading-relaxed">
            Created an interactive two-player Tic Tac Toe game with
            dynamic win detection logic and real-time UI updates.
          </p>

          <h3 className="font-semibold mb-3">Skills Demonstrated:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Game logic implementation</li>
            <li>DOM manipulation</li>
            <li>Event handling</li>
            <li>State management in JavaScript</li>
          </ul>

          <h3 className="font-semibold mb-3">Technologies Used:</h3>
          <p>
            HTML, CSS, JavaScript
          </p>
        </motion.div>

      </div>
    </main>
  );
}
