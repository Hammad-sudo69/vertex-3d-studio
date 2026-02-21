import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Neon Protocol",
    category: "Game Environment",
    image: "https://picsum.photos/seed/p1/800/1000",
    color: "bg-blue-500"
  },
  {
    title: "Aetheria",
    category: "Character Design",
    image: "https://picsum.photos/seed/p2/800/1000",
    color: "bg-purple-500"
  },
  {
    title: "The Last Frontier",
    category: "Vehicle Art",
    image: "https://picsum.photos/seed/p3/800/1000",
    color: "bg-orange-500"
  },
  {
    title: "Cyber City",
    category: "Level Design",
    image: "https://picsum.photos/seed/p4/800/1000",
    color: "bg-emerald-500"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Selected Works</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">
              PUSHING THE <br /> BOUNDARIES OF 3D
            </h3>
          </div>
          <p className="text-white/50 max-w-sm text-lg">
            We collaborate with the world's leading game developers to create immersive worlds and unforgettable characters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-accent mb-1">{project.category}</div>
                      <div className="text-3xl font-display font-bold">{project.title}</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button className="px-12 py-5 border border-white/10 rounded-full font-bold hover:bg-white hover:text-dark transition-all duration-500 flex items-center gap-4 group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
