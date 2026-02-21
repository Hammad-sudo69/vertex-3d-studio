import { motion } from "motion/react";

const services = [
  {
    id: "01",
    title: "Game Asset Creation",
    description: "High-poly to low-poly modeling, PBR texturing, and optimization for modern game engines like Unreal Engine 5 and Unity."
  },
  {
    id: "02",
    title: "Environment Design",
    description: "Building immersive, atmospheric worlds with meticulous attention to lighting, composition, and storytelling."
  },
  {
    id: "03",
    title: "Character Sculpting",
    description: "Bringing digital beings to life with realistic anatomy, expressive features, and production-ready topology."
  },
  {
    id: "04",
    title: "VFX & Animation",
    description: "Dynamic particle systems, fluid simulations, and high-end rigging for cinematic and gameplay sequences."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-dark overflow-hidden">
      {/* Marquee Section */}
      <div className="border-y border-white/5 py-12 mb-32">
        <div className="marquee-track whitespace-nowrap flex gap-12">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter text-white/10 uppercase">
                Excellence in 3D
              </span>
              <div className="w-4 h-4 rounded-full bg-accent" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-4">Our Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.9] mb-12">
              BEYOND THE <br /> POLYGON
            </h3>
            <p className="text-xl text-white/50 leading-relaxed max-w-md">
              We don't just build models; we craft experiences. Our technical mastery combined with artistic vision ensures your project stands out in a crowded market.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group border-b border-white/10 pb-12 last:border-0"
              >
                <div className="flex gap-8">
                  <span className="text-accent font-display font-bold text-xl">{service.id}</span>
                  <div>
                    <h4 className="text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-white/40 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
