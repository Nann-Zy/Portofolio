import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-screen z-50"
    >
      {/* Sidebar */}
      <div
        className={`flex flex-col items-start px-4 py-6 h-full w-48 transition-all duration-300 ${
          menuOpen ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        {/* Tombol Hamburger */}
        <button
          className="text-gray-700 mb-6"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Dropdown Menu dengan animasi keluar */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start space-y-6 mt-2 font-semibold text-gray-800 text-2xl"
            >
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#projects" className="hover:text-blue-600">Project</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
