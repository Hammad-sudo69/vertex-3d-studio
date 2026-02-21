import { motion } from "motion/react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/vertex-hero/1920/1080?blur=2"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-dark/60 to-dark" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-widest uppercase mb-6">
              Next-Gen 3D Visualization
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display font-extrabold leading-[0.9] tracking-tighter mb-8">
              CRAFTING <br />
              <span className="text-accent">DIGITAL</span> REALMS
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <p className="text-lg md:text-xl text-white/60 max-w-md leading-relaxed">
              We are a premier 3D studio specializing in high-fidelity assets for AAA games, cinematic experiences, and architectural marvels.
            </p>
            
            <div className="flex items-center gap-4">
              <button className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group hover:bg-white hover:border-white transition-all duration-500">
                <Play className="w-6 h-6 fill-white group-hover:fill-dark group-hover:text-dark transition-colors" />
              </button>
              <span className="text-sm font-bold tracking-widest uppercase">Watch Showreel</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-12 left-6 right-6 flex justify-between items-end"
      >
        <div className="flex gap-12">
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Based In</div>
            <div className="text-sm font-medium">Tokyo & London</div>
          </div>
          <div>
            <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Specialization</div>
            <div className="text-sm font-medium">Game Art & VFX</div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-px h-24 bg-gradient-to-t from-accent to-transparent mx-auto mb-4" />
          <div className="text-[10px] uppercase tracking-[0.3em] vertical-rl rotate-180">Scroll to Explore</div>
        </div>
      </motion.div>
    </section>
  );
}
