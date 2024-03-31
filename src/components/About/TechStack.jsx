import {
  BootstrapIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NextJsIcon,
  PhpIcon,
  ReactIcon,
  ReduxIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../../Icons";
import SingleTech from "./SingleTech";

const TechStack = () => {
  return (
    <div className="py-10 grid grid-cols-4">
      <div className="col-span-3">
        <h3 className="text-center text-2xl font-medium my-8">TECHSTACK</h3>
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
      <div>
        <h3 className="text-center text-2xl font-medium my-8">UPCOMING</h3>
        <div className="flex items-center justify-around px-10">
          <SingleTech icon={<TypeScriptIcon />} title="TypeScript" />
          <SingleTech icon={<NextJsIcon />} title="NextJs" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
