import { Navbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ProgramSection } from "./components/program-section";
import { ServicesSection } from "./components/services-section";
import { InteractiveSection } from "./components/interactive-section";
import { ProjectGallery } from "./components/project-gallery";
import { ContactFooter } from "./components/contact-footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-slate-100 font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramSection />
        <ServicesSection />
        <InteractiveSection />
        <ProjectGallery />
      </main>
      <ContactFooter />
    </div>
  );
}

