import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Companies } from "./components/Companies";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a15] text-white overflow-x-hidden">
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Companies />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-violet-500/20">
        <div className="container mx-auto text-center text-slate-400 text-sm">
          <p>© 2026 Andrelodev. Diseñado con 💜 y código limpio.</p>
        </div>
      </footer>
    </div>
  );
}