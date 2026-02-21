/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trusted By Section */}
        <section className="py-20 bg-dark border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              {["Ubisoft", "EA", "Epic Games", "Sony", "Nintendo"].map((brand) => (
                <span key={brand} className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase italic">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        <Portfolio />
        <Services />

        {/* Stats Section */}
        <section className="py-32 bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: "Projects Delivered", value: "250+" },
                { label: "AAA Titles", value: "45" },
                { label: "Awards Won", value: "12" },
                { label: "Studio Artists", value: "80+" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-6xl font-display font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-white/40">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
