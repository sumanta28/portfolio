import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      className="min-h-screen bg-paper text-ink font-sans bg-[length:40px_40px]
      bg-[linear-gradient(#D9D5C6_1px,transparent_1px),linear-gradient(90deg,#D9D5C6_1px,transparent_1px)]"
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
