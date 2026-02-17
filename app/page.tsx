"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const background =
    theme === "dark"
      ? "bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white"
      : "bg-gradient-to-br from-white via-purple-100 to-blue-200 text-black";

  return (
    <>
      <main
        className={`relative flex flex-col items-center min-h-screen overflow-hidden transition-all duration-700 ${background}`}
      >
        <ThemeToggle />

        <div className="relative max-w-4xl w-full px-6 py-16 text-center">

          {/* Floating Profile */}
          <motion.div
            className="mb-10 flex justify-center cursor-pointer"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="/profile.jpg"
                alt="GANASHREE"
                width={230}
                height={230}
                className="rounded-full border-4 border-purple-600 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-6xl font-extrabold tracking-widest mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            GANASHREE C.R
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl font-medium opacity-90 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            AI & Data Science Engineer | Full Stack Developer
          </motion.p>

          <motion.p
            className="mb-2 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            📍 Solur, Nelamangala – 562111
          </motion.p>

          <motion.p
            className="mb-10 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            📞 +91 9108990060
          </motion.p>

          {/* Premium Resume Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-block px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl overflow-hidden text-lg"
          >
            <span className="relative z-10">Download My Resume</span>
            <span className="absolute inset-0 bg-white opacity-10 blur-xl animate-pulse"></span>
          </motion.a>

          {/* Premium Social Icons */}
          <div className="flex gap-8 mt-14 justify-center">

            {/* GitHub */}
            <motion.a
              href="https://github.com/Ganaramachandraiah"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-gray-700 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-gray-600 group-hover:text-gray-900 dark:group-hover:text-white">
                <FaGithub className="text-xl transition-colors duration-300" />
              </div>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/gana-shree-c-r-314a32309"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-[#0A66C2] opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-[#0A66C2] group-hover:text-[#0A66C2]">
                <FaLinkedin className="text-xl transition-colors duration-300" />
              </div>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/gaan._.a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-pink-500 group-hover:text-pink-500">
                <FaInstagram className="text-xl transition-colors duration-300" />
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/qr/6VASWKQVZVRWG1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-[#25D366] group-hover:text-[#25D366]">
                <FaWhatsapp className="text-xl transition-colors duration-300" />
              </div>
            </motion.a>

            {/* Gmail */}
            <motion.a
              href="mailto:Ganashree334@gmail.com"
              whileHover={{ scale: 1.2, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <span className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-40 blur-xl transition duration-500"></span>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl transition-all duration-300 group-hover:border-red-500 group-hover:text-red-500">
                <FaEnvelope className="text-xl transition-colors duration-300" />
              </div>
            </motion.a>

          </div>

          {/* Navigation Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              { name: "🎓 Education", link: "/education" },
              { name: "🚀 Projects", link: "/projects" },
              { name: "📜 Certifications", link: "/certifications" },
              { name: "💼 Internships", link: "/internships" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
                }}
                className="p-8 rounded-2xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg transition-all duration-300 text-lg font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </main>

      {/* Image Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/profile.jpg"
                alt="GANASHREE Large"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
