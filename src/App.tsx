import Skills from "./components/Skills";
import "./style/main.css";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectSection";
import AboutSection from "./components/About";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default App;
