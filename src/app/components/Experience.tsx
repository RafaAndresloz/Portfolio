import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
const experiences = [
  {
    date: "May 2025 - Actualidad",
    role: "Full-Stack Developer",
    company: "OVELIX GROUP C.A",
    description:
      "Responsable del mantenimiento evolutivo del sistema de facturación de PLAFAM y del desarrollo de soluciones empresariales propietarias para diversos clientes. Trabajo orientado a estabilidad, escalabilidad y arquitectura modular.",
    achievements: [
      "Mantenimiento evolutivo del sistema de facturación de PLAFAM",
      "Desarrollo de módulos internos con Next.js, Node.js y TypeScript",
      "Integración de APIs y bases de datos relacionales",
      "Colaboración directa con clientes para definir requerimientos técnicos"
    ],
    color: "#7c3aed",
  },

  {
    date: "Dic 2023 - May 2025",
    role: "Full-Stack Developer Jr.",
    company: "SAGA C.A (Soluciones Avanzadas de Gerencia Administrativa)",
    description:
      "Participé en el desarrollo y evolución de una plataforma administrativa propietaria. Contribuí a su arquitectura base, módulos funcionales y estabilidad previa al lanzamiento. El sistema continuó su ciclo de release tras mi salida, utilizando la base técnica que ayudé a construir.",
    achievements: [
      "Desarrollo de interfaces modernas con Next.js y Tailwind CSS",
      "Mantenimiento y evolución de una plataforma heredada en PHP y CodeIgniter",
      "Diseño de arquitectura base para un sistema administrativo complejo",
      "Trabajo directo con equipos internos para asegurar continuidad técnica"
    ],
    color: "#3b82f6",
  },

  {
    date: "Sep 2023 - Dic 2023",
    role: "Becario de Desarrollo Web",
    company: "SAGA C.A",
    description:
      "Prácticas universitarias enfocadas en desarrollo Front-End, creando interfaces responsivas e interactivas para sistemas internos.",
    achievements: [
      "Desarrollo de componentes y vistas en Next.js",
      "Implementación de interfaces responsivas con Tailwind CSS",
      "Colaboración en proyectos internos de la empresa"
    ],
    color: "#06b6d4",
  },
];

export function Experience() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % experiences.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + experiences.length) % experiences.length);

  // Obtener las 3 tarjetas visibles
  const visible = [
    experiences[index],
    experiences[(index + 1) % experiences.length],
    experiences[(index + 2) % experiences.length],
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="experience">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-blue-950/10" />

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Experiencia Laboral
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Mi trayectoria profesional desde septiembre de 2023
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
            <AnimatePresence mode="popLayout">
              {visible.map((exp, i) => (
                <motion.div
                  key={exp.company + i}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="
                    w-full group relative p-6 rounded-2xl
                    bg-gradient-to-br from-slate-900/60 to-slate-800/60
                    backdrop-blur-sm border border-violet-500/20
                    hover:border-violet-500/50 transition-all duration-300
                  "
                  style={{
                    boxShadow: `0 0 20px ${exp.color}25`,
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                    style={{
                      background: `radial-gradient(circle at center, ${exp.color}25, transparent)`,
                    }}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Date */}
                    <div className="flex items-center gap-2 text-sm text-violet-300">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.date}</span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-300">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-lg">{exp.company}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300/80 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 pt-2">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement} className="flex items-start gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2"
                            style={{ backgroundColor: exp.color }}
                          />
                          <span className="text-sm text-slate-400">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                    style={{
                      background: `linear-gradient(135deg, transparent 50%, ${exp.color}40 50%)`,
                      borderTopRightRadius: "1rem",
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
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
      </div>
    </section>
  );
}