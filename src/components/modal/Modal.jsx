import "./modal.css";

const Modal = ({ open, onClose, data }) => {
  if (!open) {
    return;
  }
  console.log(data);
  return (
    <div
      className={`overlay ${open ? "visible" : "invisible"}`}
      onClick={onClose}
    >
      <div
        className="modal-container grid grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="col-span-2 flex items-center justify-between mb-2">
          <h4 className="col-span-2 text-2xl font-medium mb-3">{data.title}</h4>
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ccf381] px-2 py-1.5 rounded-md flex items-center"
          >
            Visit
          </a>
        </div>
        <div>
          <img
            src={data.img}
            alt="highligted image"
            width="92%"
            className="rounded"
          />
          <div className="flex items-center gap-2 my-2">
            <img
              src={data.img}
              alt="highligted image"
              width="30%"
              className="rounded"
            />
            <img
              src={data.img}
              alt="highligted image"
              width="30%"
              className="rounded"
            />
            <img
              src={data.img}
              alt="highligted image"
              width="30%"
              className="rounded"
            />
          </div>
        </div>
        <div>
          <p className="mb-2">{data.description}</p>
          <div className="flex flex-col gap-2 mb-3">
            <span className="font-medium underline underline-offset-4">
              TECHSTACK
            </span>
            <p className="flex items-center flex-wrap gap-2">
              {data.languages?.map((tech, i) => (
                <span key={i} className="bg-[#000020] px-1.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="font-medium underline underline-offset-4">FEATURES</p>
            <ul className="list-disc ml-5">
              {data.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
