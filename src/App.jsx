import "./App.css";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <TechStack />
    </>
  );
}

export default App;
