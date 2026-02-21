import { motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 bg-dark/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center font-display font-bold text-xl">V</div>
          <span className="font-display font-bold text-2xl tracking-tighter">VERTEX</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Portfolio", "Services", "Careers", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 bg-white text-dark rounded-full text-sm font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-2 group"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {["Portfolio", "Services", "Careers", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-display font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full py-4 bg-accent text-white rounded-xl font-bold">
            Start a Project
          </button>
        </motion.div>
      )}
    </nav>
  );
}
