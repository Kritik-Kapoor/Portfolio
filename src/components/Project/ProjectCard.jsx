import { useState } from "react";
import { SendIcon } from "../../Icons";
import Modal from "../modal/Modal";

const ProjectCard = ({ data }) => {
  const { img, title, description, languages, url } = data;

  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="project-card">
      <img
        src={img[0].image}
        alt={`${title} screenshot`}
        className="h-[250px] rounded"
      />
      <h4 className="font-medium text-2xl mt-2">{title}</h4>
      <p className="leading-6 my-3">{description.slice(0, 200)}...</p>
      <p className="flex items-center flex-wrap gap-1">
        {languages?.map((tech, i) => (
          <span key={i} className="bg-[#000020] px-1.5 py-1 rounded">
            {tech}
          </span>
        ))}
      </p>
      <div className="flex items-center justify-between mt-7">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ccf381] px-2 py-1.5 rounded-md flex items-center"
        >
          Visit <SendIcon />
        </a>
        <button
          className="bg-[#004c64] px-2 py-1.5 rounded-md"
          onClick={() => setOpenModal(true)}
        >
          Read More
        </button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} data={data} />
    </div>
  );
};

export default ProjectCard;
