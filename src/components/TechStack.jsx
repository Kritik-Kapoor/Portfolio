import {
  BootstrapIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
} from "../Icons";
import SingleTech from "./SingleTech";

const TechStack = () => {
  return (
    <div className="container-fluid py-10">
      <h4 className="text-center text-2xl font-medium my-8">TechStack</h4>
      <div className="flex items-center justify-around px-10">
        <SingleTech icon={<ReactIcon />} title="React" />
        <SingleTech icon={<ReduxIcon />} title="Redux" />
        <SingleTech icon={<JsIcon />} title="JavaScript" />
        <SingleTech icon={<TailwindIcon />} title="Tailwind" />
        <SingleTech icon={<BootstrapIcon />} title="Bootstrap" />
        <SingleTech icon={<HtmlIcon />} title="HTML5" />
        <SingleTech icon={<PhpIcon />} title="Php" />
        <SingleTech icon={<GitIcon />} title="Git" />
      </div>
    </div>
  );
};

export default TechStack;
