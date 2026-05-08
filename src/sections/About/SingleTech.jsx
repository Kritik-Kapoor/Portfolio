const SingleTech = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {icon}
      <span className="font-medium mt-1.5">{title}</span>
    </div>
  );
};

export default SingleTech;
