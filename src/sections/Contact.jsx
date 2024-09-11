import { GitHubIcon, LinkedInIcon, MailIcon } from "../Icons";

const Contact = () => {
  return (
    <div
      className="container mx-auto bg-[#101539] p-7 mb-7 rounded-lg"
      id="Projects"
    >
      <h3 className="text-center text-3xl font-medium mb-10">
        Want to connect ?
      </h3>
      <div className="flex items-center justify-around">
        <p className="flex items-center gap-x-2" title="LinkedIn">
          <LinkedInIcon />
          <span>https://www.linkedin.com/in/kritik-kapoor/</span>
        </p>
        <p className="flex items-center gap-x-2" title="Mail">
          <MailIcon />
          <span>kritik0401@gmail.com</span>
        </p>
        <p className="flex items-center gap-x-2" title="GitHub">
          <GitHubIcon />
          <span>https://github.com/Kritik-Kapoor</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
