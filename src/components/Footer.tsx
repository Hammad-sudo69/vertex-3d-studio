import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter leading-[0.9] mb-12">
              READY TO <br /> <span className="text-accent">EVOLVE?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">hello@vertexstudio.com</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">+81 3-1234-5678</span>
              </div>
              <div className="flex items-center gap-4 text-white/60 hover:text-white transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">Shibuya, Tokyo, Japan</span>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-3xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Project Type</label>
                <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors appearance-none">
                  <option className="bg-dark">Game Art</option>
                  <option className="bg-dark">Environment Design</option>
                  <option className="bg-dark">Cinematics</option>
                  <option className="bg-dark">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
              </div>
              <button className="w-full py-5 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-4 hover:bg-white hover:text-dark transition-all duration-500 group">
                Send Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center font-display font-bold">V</div>
            <span className="font-display font-bold text-xl tracking-tighter">VERTEX</span>
          </div>
          
          <div className="flex gap-8 text-sm text-white/40">
            {["Instagram", "Twitter", "LinkedIn", "ArtStation"].map((social) => (
              <a key={social} href="#" className="hover:text-white transition-colors">{social}</a>
            ))}
          </div>

          <div className="text-sm text-white/20">
            © 2026 Vertex 3D Studio. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
