import {
  BootstrapIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  MongoDBIcon,
  NextJsIcon,
  NodeJsIcon,
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
      <div className="col-span-4 lg:col-span-3">
        <h3 className="text-center text-2xl font-medium my-8">TECHSTACK</h3>
        <div className="flex items-center justify-around md:justify-center flex-wrap gap-3 md:gap-5 md:px-10">
          <SingleTech icon={<ReactIcon />} title="ReactJS" />
          <SingleTech icon={<ReduxIcon />} title="Redux" />
          <SingleTech icon={<TypeScriptIcon />} title="TypeScript" />
          <SingleTech icon={<JsIcon />} title="JavaScript" />
          <SingleTech icon={<TailwindIcon />} title="Tailwind" />
          <SingleTech icon={<BootstrapIcon />} title="Bootstrap" />
          <SingleTech icon={<HtmlIcon />} title="HTML5" />
          <SingleTech icon={<PhpIcon />} title="Php" />
          <SingleTech icon={<GitIcon />} title="Git" />
        </div>
      </div>
      <div className="col-span-4 lg:col-span-1">
        <h3 className="text-center text-2xl font-medium my-8">LEARNING</h3>
        <div className="flex items-center justify-around md:justify-center gap-3 md:gap-5 px-10">
          <SingleTech icon={<NextJsIcon />} title="NextJs" />
          <SingleTech icon={<NodeJsIcon />} title="NodeJs" />
          <SingleTech icon={<MongoDBIcon />} title="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
