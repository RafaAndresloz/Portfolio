import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Sistema de Facturación PLAFAM (Software Propietario)",
    description:
      "Mantenimiento evolutivo y ampliación del sistema de facturación de PLAFAM. Implementación de módulos internos, optimización de procesos y mejoras en estabilidad y escalabilidad.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1080&q=80",
    tags: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    color: "#7c3aed",
  },

  {
    title: "Plataforma Administrativa SAGA (Base Técnica Pre‑Producción)",
    description:
      "Participación en el desarrollo y modernización de una plataforma administrativa propietaria. Contribución a la arquitectura base, módulos funcionales y estabilización previa al lanzamiento final.",
    image:
      "https://cdn.dribbble.com/userupload/3180519/file/original-9e16eb1950173a9d5a16d9039947b5f7.png?resize=1024x768&vertical=center",
    tags: ["PHP", "CodeIgniter", "MySQL", "Arquitectura"],
    color: "#3b82f6",
  },

{
  title: "Cargonam (Etapa de Desarrollo Pre‑Release)",
  description:
    "Contribución al desarrollo inicial y a la estructura técnica de Cargonam antes de su salida a producción. Implementación de componentes, flujos internos y bases funcionales utilizadas en el release final.",
  image: "https://images.unsplash.com/photo-1583929260767-9020a3cdc78a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  tags: ["Next.js", "TypeScript", "Tailwind", "APIs"],
  color: "#06b6d4",
},

  {
    title: "Panel Interno de Gestión (SAGA)",
    description:
      "Desarrollo de interfaces internas y herramientas de gestión para uso exclusivo de la empresa. Enfoque en UI/UX, componentes reutilizables y flujos administrativos.",
    image:
      "https://cdn.dribbble.com/userupload/13799952/file/original-da19059e6b93db48b8e91b499c768751.jpg?resize=1024x768&vertical=center",
    tags: ["Next.js", "Tailwind CSS", "React", "UI/UX"],
    color: "#3b82f6",
  },
];


export function Projects() {
  return (
    <section className="py-24 px-6 relative" id="projects">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Algunos de los proyectos en los que he trabajado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto place-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-800/60 backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${project.color}30, transparent)`,
                  }}
                />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/80 z-10"
                  />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-300/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {/* <div className="flex gap-3 pt-4">
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-200 hover:bg-violet-600/30 hover:border-violet-500/50 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Código</span>
                    </button>
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-200 hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                  </div> */}
                </div>

                {/* Animated border */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${project.color}40`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
