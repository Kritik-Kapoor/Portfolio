import "./App.css";
import About from "./sections/About/About";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./sections/Project/Projects";
// import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}

export default App;
