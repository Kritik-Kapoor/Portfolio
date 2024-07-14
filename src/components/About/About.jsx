import WorkComponent from "./WorkComponent";
import TechStack from "./TechStack";

const About = () => {
  return (
    <section
      className="container mx-auto grid gap-8 min-h-[90vh] px-4 pt-10 pb-16"
      id="About"
    >
      <WorkComponent
        title="Experience"
        text={`In my 1.5 years of experience, I've built products for companies and
          businesses around the globe ranging from marketing websites to complex
          solutions and enterprise apps with focus on fast, elegant and
          accessible user experiences. Currently, I work at Skilldukan as a
          Frontend Developer. There, I'm contributing to the development of
          their exciting new investment platform, PitchHere.`}
      />
      <WorkComponent
        title="Design"
        text="My design approach may differ from that of a traditional designer
        working in tools like Illustrator. Instead, you'll often find me
        deep in stylesheets, fine-tuning font sizes, and carefully considering
        layouts. I'm dedicated to crafting seamless user experiences that
        not only function well but also look stylish and contemporary."
        classes="ml-auto"
      />
      <WorkComponent
        title="Engineering"
        text="In building JavaScript applications, I'm equipped with just the
        right tools, and can absolutely function independently of them to
        deliver fast, resilient solutions optimized for scale — performance
        and scalabilty are priorities on my radar."
      />
      <TechStack />
    </section>
  );
};

export default About;
