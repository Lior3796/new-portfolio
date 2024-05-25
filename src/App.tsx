import React from "react";
import Progress from "./components/Progress";
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
      <Progress />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
};
export default App;
