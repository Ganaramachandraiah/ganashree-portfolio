"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Internships() {
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
        💼 Internships
      </h1>

      <div className="space-y-16 max-w-6xl mx-auto">

        {/* Learners Byte Internship */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">

            <Image
              src="/learnersbyte.png"
              alt="Learners Byte"
              width={200}
              height={100}
              className="object-contain"
            />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Bharat Unnati AI Fellowship
              </h2>

              <p className="font-medium mb-1">
                Learners Byte Global InfoVision
              </p>

              <p className="italic mb-6">
                Ongoing – 8th Semester Internship
              </p>

              <p className="mb-6 leading-relaxed">
                Currently enrolled in the Bharat Unnati AI Fellowship,
                focusing on practical implementation of Artificial Intelligence,
                Generative AI systems, and emerging Agentic AI workflows.
                This internship emphasizes real-time application development,
                structured problem solving, and AI-driven automation.
              </p>

              <h3 className="font-semibold mb-3">Key Technical Areas:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Programming fundamentals and structured coding practices</li>
                <li>Generative AI applications and prompt engineering</li>
                <li>Agentic AI workflows and automation concepts</li>
                <li>AI-powered learning platforms</li>
                <li>Model usage, optimization, and experimentation</li>
                <li>Applied problem solving using real-time assignments</li>
              </ul>

              <h3 className="font-semibold mb-3">Tools & Technologies:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Python for AI development</li>
                <li>Prompt Engineering techniques</li>
                <li>Automation frameworks</li>
                <li>AI-based productivity tools</li>
              </ul>

              <p className="leading-relaxed">
                This internship is significantly strengthening my analytical thinking,
                coding discipline, AI system understanding, and preparing me
                for industry-level AI engineering and software development roles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Spiders Internship */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-xl border shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">

            <Image
              src="/spiders.png"
              alt="Spiders"
              width={150}
              height={100}
              className="object-contain"
            />

            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Programming & Software Development Internship
              </h2>

              <p className="font-medium mb-1">
                Spiders
              </p>

              <p className="italic mb-6">
                Ongoing
              </p>

              <p className="mb-6 leading-relaxed">
                Engaged in intensive programming and technical training focused
                on strengthening core development skills, algorithmic thinking,
                and structured software design principles.
              </p>

              <h3 className="font-semibold mb-3">Core Learning Areas:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Data structures and algorithmic problem solving</li>
                <li>Core Java and object-oriented programming concepts</li>
                <li>Database management and SQL queries</li>
                <li>Debugging, optimization, and code efficiency</li>
                <li>Industry-standard coding practices</li>
              </ul>

              <h3 className="font-semibold mb-3">Skills Developed:</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Logical reasoning and analytical thinking</li>
                <li>Time-bound problem solving</li>
                <li>Structured software development approach</li>
                <li>Confidence in technical interviews and coding assessments</li>
              </ul>

              <p className="leading-relaxed">
                This internship complements my AI specialization by building a
                strong programming foundation and improving my readiness for
                full-stack and AI-driven software engineering roles.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
