import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { FindMe } from "@/components/find-me";
import { Contact } from "@/components/contact";
import { GlobalBackground } from "./components/global-background";

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
