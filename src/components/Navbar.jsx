import React, { useState } from "react";
import { navigation } from "./constants";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.25, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn", when: "afterChildren" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -5, transition: { duration: 0.2, ease: "easeIn" } },
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-200 shadow-lg">
      <div className="flex h-20 items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <div className="flex items-center w-[40%] min-w-fit">
          <img
            src="src/assets/logo.png"
            alt="logo"
            className="pt-1.5 w-12 sm:w-14 md:w-16 lg:w-[70px]"
          />
          <h1 className="font-bold ml-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            GateFlow
          </h1>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex w-[60%] justify-end">
          {navigation.map((item) => (
            <a
              href={item.url}
              key={item.id}
              className="uppercase mx-3 px-3 py-6 font-semibold text-[1rem] transition-colors duration-300 hover:text-gray-700"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Hamburger (Mobile) */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Dropdown with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-gray-200 border-t border-gray-300 origin-top"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            {navigation.map((item) => (
              <motion.a
                href={item.url}
                key={item.id}
                className="block px-6 py-4 text-lg font-semibold uppercase hover:bg-gray-300"
                variants={linkVariants}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
