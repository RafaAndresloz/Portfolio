import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const companies = [
  { name: "OVELIX GROUP C.A", logo: "OV" },
  { name: "SAGA C.A", logo: "SG" },
  { name: "PLAFAM", logo: "PF" },
  { name: "Cargonam", logo: "CG" },
];

export function Companies() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % companies.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + companies.length) % companies.length);

  const visible = [
    companies[index],
    companies[(index + 1) % companies.length],
    companies[(index + 2) % companies.length],
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Building2 className="w-8 h-8 text-violet-400" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Empresas Colaboradoras
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg">
            Organizaciones con las que he trabajado en los últimos años
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            <AnimatePresence mode="popLayout">
              {visible.map((company, i) => (
                <motion.div
                  key={company.name + i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="
                    w-full aspect-square rounded-2xl
                    bg-gradient-to-br from-slate-900/60 to-slate-800/60
                    backdrop-blur-sm border border-violet-500/20
                    hover:border-violet-500/50 transition-all duration-300
                    flex items-center justify-center relative overflow-hidden
                  "
                  style={{
                    boxShadow: "0 0 20px rgba(124,58,237,0.25)",
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(124,58,237,0.25), transparent)",
                    }}
                  />

                  {/* Logo */}
                  <div className="relative z-10 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-br from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      {company.logo}
                    </div>
                    <div className="text-xs text-slate-400 px-2">
                      {company.name}
                    </div>
                  </div>

                  {/* Shine */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(124,58,237,0.2), transparent)",
                    }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="
                p-3 rounded-full bg-slate-900/60 border border-violet-500/30
                hover:bg-slate-900/80 hover:border-violet-400
                transition-all duration-300 text-violet-300
                shadow-lg hover:shadow-violet-500/20
              "
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={next}
              className="
                p-3 rounded-full bg-slate-900/60 border border-violet-500/30
                hover:bg-slate-900/80 hover:border-violet-400
                transition-all duration-300 text-violet-300
                shadow-lg hover:shadow-violet-500/20
              "
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: "3+", label: "Años de experiencia" },
            { value: "6+", label: "Proyectos completados" },
            { value: companies.length, label: "Empresas colaboradoras" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.8 + index * 0.1,
                  duration: 0.5,
                  type: "spring",
                }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
