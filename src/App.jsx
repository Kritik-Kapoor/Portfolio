import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./sections/About/About";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./sections/Project/Projects";
// import Contact from "./sections/Contact";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const timerRef = useRef(null);
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      setIsScrolled(
        scrollRef.current !== lastScrollTop && scrollRef.current > 0
      );
      setLastScrollTop(scrollRef.current <= 0 ? 0 : scrollRef.current);
    };
    if (isScrolled) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsScrolled(false);
      }, 3000);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timerRef.current);
    };
  }, [lastScrollTop, isScrolled]);

  return (
    <>
      <Navbar isScrolled={isScrolled} scrollPos={scrollRef.current} />
      <HeroSection />
      <About />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}

export default App;
