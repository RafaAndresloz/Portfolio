import { motion } from "motion/react";
import { useState } from "react";
import { Github, Linkedin, Send } from "lucide-react";
import emailjs from "emailjs-com";

export function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "Formulario de contacto del portfolio",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSending(false);
        alert("Mensaje enviado correctamente");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setIsSending(false);
        alert("Hubo un error al enviar el mensaje");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/RafaAndresloz",
      color: "#3b82f6",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/raflozano",
      color: "#06b6d4",
    },
  ];
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Hablemos
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            ¿Tienes un proyecto en mente? Contáctame
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-violet-500/20"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-slate-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-slate-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-violet-500/20 text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Info Card */}
            <div className="p-8 rounded-3xl backdrop-blur-sm bg-gradient-to-br from-slate-900/60 to-slate-800/60 border border-violet-500/20">
              <h3 className="text-2xl font-semibold text-white mb-4">
                ¿Prefieres un contacto directo?
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Estoy disponible para proyectos freelance, colaboraciones o simplemente
                para charlar sobre tecnología y desarrollo.
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-violet-500/20 hover:border-violet-500/50 transition-all duration-300 group"
                    style={{
                      boxShadow: `0 0 20px ${link.color}10`,
                    }}
                  >
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        background: `linear-gradient(135deg, ${link.color}30, ${link.color}10)`,
                      }}
                    >
                      <link.icon
                        className="w-5 h-5"
                        style={{ color: link.color }}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{link.name}</div>
                      <div className="text-sm text-slate-400">
                        {`/${link.name.toLowerCase()}`}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-r from-violet-600/10 to-blue-600/10 border border-violet-500/20"
            >
              <div className="space-y-2 text-center">
                <div className="text-4xl">⚡</div>
                <p className="text-slate-300 text-sm">
                  <span className="text-violet-400 font-semibold">Respuesta rápida</span>
                  <br />
                  Normalmente respondo en menos de 24 horas
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
