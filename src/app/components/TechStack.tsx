// @ts-nocheck
import { useState } from "react"
import { motion } from "motion/react"

const dailyTech = [
  { 
    category: "Maquetado",
    name: "HTML5",
    icon: "/html5-original.svg",
    color: "#E34F26",
    description: "Base estructural de la web moderna, usada para definir contenido semántico y accesible."
  },
  { 
    category: "Maquetado",
    name: "CSS3",
    icon: "/css3-original.svg",
    color: "#1572B6",
    description: "Estilos modernos para crear interfaces responsivas, fluidas y visualmente consistentes."
  },
  { 
    category: "Lenguajes",
    name: "JavaScript",
    icon: "/javascript-original.svg",
    color: "#F7DF1E",
    description: "Lenguaje principal del frontend moderno y base para aplicaciones dinámicas e interactivas."
  },
  { 
    category: "Lenguajes",
    name: "TypeScript",
    icon: "/typescript-original.svg",
    color: "#3178C6",
    description: "JavaScript tipado que mejora la escalabilidad, mantenibilidad y robustez del código."
  },
  { 
    category: "Lenguajes",
    name: "PHP",
    icon: "/php-original.svg",
    color: "#777BB4",
    description: "Lenguaje backend ampliamente usado para APIs, CMS y sistemas de gestión empresarial."
  },
  { 
    category: "Frontend",
    name: "Next.js",
    icon: "/nextjs-original.svg",
    color: "#000000",
    description: "Framework de React para apps rápidas con SSR, SSG, routing avanzado y optimización automática."
  },
  { 
    category: "Backend",
    name: "NestJS",
    icon: "/nestjs-original.svg",
    color: "#E0234E",
    description: "Framework modular de Node.js ideal para arquitecturas escalables y mantenibles."
  },
  { 
    category: "Backend",
    name: "GraphQL",
    icon: "/graphql-plain.svg",
    color: "#E10098",
    description: "Modelo de consultas flexible que permite obtener exactamente los datos necesarios."
  },
  { 
    category: "Bases de datos",
    name: "PostgreSQL",
    icon: "/postgresql-original.svg",
    color: "#336791",
    description: "Base de datos relacional potente, estable y optimizada para cargas de trabajo complejas."
  },
  { 
    category: "Control de versiones",
    name: "Git",
    icon: "/git-original.svg",
    color: "#F05033",
    description: "Sistema de control de versiones distribuido para flujos de trabajo colaborativos."
  },
  { 
    category: "Cloud",
    name: "AWS",
    icon: "/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
    description: "Servicios en la nube para despliegue, almacenamiento, seguridad y escalabilidad global."
  },
]


const fullStack = [
  // Maquetado
  { 
    category: "Maquetado",
    name: "HTML5",
    icon: "/html5-original.svg",
    color: "#E34F26",
    description: "Estructura semántica de aplicaciones web modernas, optimizada para accesibilidad."
  },
  { 
    category: "Maquetado",
    name: "CSS3",
    icon: "/css3-original.svg",
    color: "#1572B6",
    description: "Estilos avanzados para interfaces responsivas, animaciones y layouts modernos."
  },
  { 
    category: "Maquetado",
    name: "Tailwind CSS",
    icon: "/tailwindcss-original.svg",
    color: "#38BDF8",
    description: "Framework utilitario que acelera el diseño con clases consistentes y escalables."
  },

  // Lenguajes
  { 
    category: "Lenguajes",
    name: "JavaScript",
    icon: "/javascript-original.svg",
    color: "#F7DF1E",
    description: "Lenguaje esencial para el frontend y base del ecosistema Node.js."
  },
  { 
    category: "Lenguajes",
    name: "TypeScript",
    icon: "/typescript-original.svg",
    color: "#3178C6",
    description: "Tipado estático para proyectos grandes, APIs robustas y arquitecturas escalables."
  },
  { 
    category: "Lenguajes",
    name: "Java",
    icon: "/java-original.svg",
    color: "#E76F00",
    description: "Lenguaje empresarial para sistemas robustos, seguros y de alto rendimiento."
  },
  { 
    category: "Lenguajes",
    name: "Python",
    icon: "/python-original.svg",
    color: "#3776AB",
    description: "Lenguaje versátil ideal para automatización, scripting y desarrollo backend."
  },
  { 
    category: "Lenguajes",
    name: "PHP",
    icon: "/php-original.svg",
    color: "#777BB4",
    description: "Lenguaje backend maduro para APIs, CMS y aplicaciones de negocio."
  },

  // Frontend
  { 
    category: "Frontend",
    name: "React Native",
    icon: "/reactnative-original.svg",
    color: "#61DAFB",
    description: "Framework para crear apps móviles nativas usando componentes React."
  },
  { 
    category: "Frontend",
    name: "Next.js",
    icon: "/nextjs-original.svg",
    color: "#000000",
    description: "Framework de React con SSR, SSG y optimización automática para producción."
  },
  // Backend
  { 
    category: "Backend",
    name: "NestJS",
    icon: "/nestjs-original.svg",
    color: "#E0234E",
    description: "Framework modular para Node.js con arquitectura limpia y escalable."
  },
  { 
    category: "Backend",
    name: "Node.js",
    icon: "/nodejs-plain-wordmark.svg",
    color: "#339933",
    description: "Entorno de ejecución para construir APIs rápidas y eficientes."
  },
  { 
    category: "Backend",
    name: "FastAPI",
    icon: "/fastapi-original.svg",
    color: "#009688",
    description: "Framework de Python para APIs de alto rendimiento y validación automática."
  },
  { 
    category: "Backend",
    name: "Spring",
    icon: "/spring-original-wordmark.svg",
    color: "#6DB33F",
    description: "Framework empresarial de Java para microservicios y aplicaciones robustas."
  },
  { 
    category: "Backend",
    name: "GraphQL",
    icon: "/graphql-plain.svg",
    color: "#E10098",
    description: "Esquema de consultas flexible que optimiza el consumo de datos en APIs."
  },
  { 
    category: "Backend",
    name: "CodeIgniter",
    icon: "/codeigniter-plain.svg",
    color: "#EE4323",
    description: "Framework PHP ligero para APIs rápidas y aplicaciones simples."
  },

  // Bases de datos
  { 
    category: "Bases de datos",
    name: "PostgreSQL",
    icon: "/postgresql-original.svg",
    color: "#336791",
    description: "Base de datos relacional avanzada con soporte para consultas complejas."
  },
  { 
    category: "Bases de datos",
    name: "MariaDB",
    icon: "/mariadb-original.svg",
    color: "#003545",
    description: "Motor relacional compatible con MySQL, rápido y estable."
  },
  { 
    category: "Bases de datos",
    name: "SQL Server",
    icon: "/microsoftsqlserver-original.svg",
    color: "#CC2927",
    description: "Base de datos empresarial con herramientas avanzadas de análisis y seguridad."
  },

  // Cloud
  { 
    category: "Cloud",
    name: "AWS",
    icon: "/amazonwebservices-original-wordmark.svg",
    color: "#FF9900",
    description: "Infraestructura en la nube para despliegue, escalabilidad y servicios globales."
  },
  { 
    category: "Cloud",
    name: "Vercel",
    icon: "/vercel-original-wordmark.svg",
    color: "#000000",
    description: "Plataforma de despliegue rápida para proyectos frontend y serverless."
  },


  // Control de versiones
  { 
    category: "Control de versiones",
    name: "Git",
    icon: "/git-original.svg",
    color: "#F05033",
    description: "Control de versiones distribuido para flujos colaborativos y CI/CD."
  },
]


export function TechStack() {
  const [showFullStack, setShowFullStack] = useState(false)
  const currentList = showFullStack ? fullStack : dailyTech

  return (
    <section id="techstack" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      
      <div className="container mx-auto relative z-10">

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Stack Tecnológico
            </span>
          </h2>

          <p className="text-slate-400 text-lg">
            {showFullStack
              ? "Stack completo"
              : "Tecnologías que suelo usar diariamente"}
          </p>
        </motion.div>

        {/* Botón toggle */}
        <div className="flex justify-center mb-14">
          <button
            onClick={() => setShowFullStack(!showFullStack)}
            className="
              px-6 py-2 rounded-full border border-violet-500/40 
              hover:border-violet-400 hover:bg-violet-500/10 
              transition-all duration-300 text-white text-sm
            "
          >
            {showFullStack ? "Ver tecnologías diarias" : "Ver stack completo"}
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-visible">
          {currentList.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-visible"
            >
              {/* CARD — AQUÍ VA EL GROUP */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3 + (index % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative p-6 rounded-2xl backdrop-blur-sm
                  bg-gradient-to-br from-slate-900/60 to-slate-800/60
                  border border-violet-500/20
                  hover:border-violet-500/50
                  transition-all duration-300 cursor-pointer
                  group
                "
                style={{ boxShadow: `0 0 20px ${tech.color}15` }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${tech.color}30, transparent)`,
                  }}
                />

                {/* Icono + nombre */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div
                    className="p-1 rounded-lg mb-1 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
                      boxShadow: `0 2px 12px ${tech.color}40`,
                    }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="w-6 h-6 transition-transform group-hover:scale-110"
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-white">
                    {tech.name}
                  </h3>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
