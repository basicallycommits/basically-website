import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { FindMe } from "@/components/FindMe";
import { Contact } from "@/components/Contact";
import { GlobalBackground } from "./components/GlobalBackground";

function App() {
  return (
    <>
      <GlobalBackground />
      <Navbar />
      <main className="pt-24 space-y-32 px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <FindMe />
      </main>
      <Contact />
    </>
  );
}

export default App;
