import "./App.css";
import About from "./components/About/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
    </>
  );
}

export default App;
