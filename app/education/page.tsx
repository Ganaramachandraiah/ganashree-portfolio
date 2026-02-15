"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Education() {
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
        🎓 Education
      </h1>

      <div className="space-y-16 max-w-5xl mx-auto">

        {/* BE Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            B.E – Artificial Intelligence & Data Science
          </h2>

          <p className="font-medium mb-1">
            Coorg Institute of Technology
          </p>

          <p className="mb-1">
            2022 – Present
          </p>

          <p className="mb-6">
            CGPA: 8.14
          </p>

          <p className="mb-6 leading-relaxed">
            Currently pursuing a Bachelor of Engineering in Artificial Intelligence
            and Data Science with a strong focus on machine learning, data analytics,
            software development, and intelligent system design.
          </p>

          <h3 className="font-semibold mb-3">Core Subjects:</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Machine Learning & Artificial Intelligence</li>
            <li>Data Structures & Algorithms</li>
            <li>Database Management Systems</li>
            <li>Computer Vision & Pattern Recognition</li>
            <li>Python Programming & Object-Oriented Programming</li>
            <li>Statistics & Probability for Data Science</li>
          </ul>

          <h3 className="font-semibold mb-3">Academic Highlights:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Hands-on ML project development</li>
            <li>Real-time AI-based application implementation</li>
            <li>Strong analytical and structured problem-solving approach</li>
            <li>Active participation in technical learning initiatives</li>
          </ul>
        </motion.div>

        {/* PUC Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            PUC – PCMB (Physics, Chemistry, Mathematics, Biology)
          </h2>

          <p className="font-medium mb-1">
            RP PU Residential College
          </p>

          <p className="mb-6">
            2020 – 2022
          </p>

          <p className="leading-relaxed">
            Developed strong foundational knowledge in mathematics,
            logical reasoning, and scientific analysis. Mathematics and
            problem-solving skills during this phase laid the groundwork
            for pursuing Artificial Intelligence and Data Science at the
            undergraduate level.
          </p>
        </motion.div>

        {/* SSLC Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-2">
            SSLC
          </h2>

          <p className="font-medium mb-1">
            Kunigal Valley International School
          </p>

          <p className="mb-6">
            2019 – 2020
          </p>

          <p className="leading-relaxed">
            Completed secondary education with a strong academic foundation,
            building discipline, time management, and analytical capabilities
            that have supported continued academic excellence in higher studies.
          </p>
        </motion.div>

      </div>
    </main>
  );
}
