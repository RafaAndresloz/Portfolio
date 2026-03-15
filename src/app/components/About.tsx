import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Coffee, Heart, Rocket, Sparkles } from "lucide-react";

export function About() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create subtle floating lines
    let lines: Array<{ x: number; y: number; length: number; angle: number; speed: number; opacity: number }> = [];

    for (let i = 0; i < 15; i++) {
      lines.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      lines.forEach((line) => {
        line.angle += line.speed * 0.01;
        line.y += Math.sin(line.angle) * 0.5;

        if (line.y < -line.length) line.y = height + line.length;
        if (line.y > height + line.length) line.y = -line.length;

        ctx.save();
        ctx.globalAlpha = line.opacity;
        ctx.strokeStyle = "#6366f1";
        ctx.lineWidth = 2;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#6366f1";

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Pasión",
      description: "Amor por el código limpio y el diseño elegante",
      color: "#3b82f6",
    },
    {
      icon: Coffee,
      title: "Dedicación",
      description: "Compromiso con la excelencia y el aprendizaje continuo",
      color: "#6366f1",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden" id="about">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Sobre Mí
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Conoce más sobre mi enfoque y filosofía de trabajo
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main Description */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative p-8 md:p-12 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-violet-500/20"
>
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/5 to-blue-600/5" />

  <div className="relative z-10 space-y-6 text-lg leading-relaxed">
    <p className="text-slate-300">
      Soy un desarrollador Full‑Stack con una fuerte inclinación hacia el{" "}
      <span className="text-violet-400 font-semibold">backend</span> y la{" "}
      <span className="text-blue-400 font-semibold">arquitectura de sistemas</span>.
      Me apasiona construir plataformas estables, escalables y seguras, donde cada
      pieza encaje y funcione como debe ser incluso en escenarios inesperados.
    </p>

    <p className="text-slate-300">
      Aunque puedo trabajar en frontend y crear interfaces modernas cuando el
      proyecto lo requiere, mi verdadera fortaleza está en la{" "}
      <span className="text-indigo-400 font-semibold">lógica de negocio</span>, la{" "}
      <span className="text-cyan-400 font-semibold">integración de servicios</span> y
      el diseño técnico que garantiza que el usuario final nunca experimente errores
      inesperados. Si algo falla, debe fallar de forma controlada, clara y predecible.
    </p>

    <p className="text-slate-300">
      Me involucro al 110% en cada proyecto: entiendo el contexto, anticipo problemas
      y busco entregar soluciones que realmente aporten valor. Trabajo con dedicación
      y responsabilidad, siempre cuidando que ese compromiso se mantenga dentro de un
      entorno profesional sano y sostenible.
    </p>

    <p className="text-slate-300">
      Disfruto crear sistemas sólidos, confiables y bien pensados, y colaborar con
      equipos y clientes que valoran la{" "}
      <span className="text-violet-400 font-semibold">calidad</span>, la{" "}
      <span className="text-blue-400 font-semibold">claridad técnica</span> y la{" "}
      <span className="text-indigo-400 font-semibold">excelencia en el desarrollo</span>.
    </p>
  </div>
</motion.div>



          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-slate-900/40 to-slate-800/40 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300"
                style={{
                  boxShadow: `0 0 20px ${value.color}10`,
                }}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${value.color}20, transparent)`,
                  }}
                />

                <div className="relative z-10 flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${value.color}30, ${value.color}10)`,
                    }}
                  >
                    <value.icon
                      className="w-6 h-6"
                      style={{ color: value.color }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {value.description}
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
