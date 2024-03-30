const WorkComponent = ({ title, text, classes = "" }) => {
  return (
    <div className={`w-6/12 bg-[#101539] p-4 rounded-md ${classes}`}>
      <h3 className="text-4xl font-medium">{title}</h3>
      <p className="text-slate-400 mt-3.5">{text}</p>
    </div>
  );
};

export default WorkComponent;
