const SingleTech = ({ icon, title }) => {
  return (
    <div className="text-center">
      {icon}
      <span className="font-medium mt-1.5">{title}</span>
    </div>
  );
};

export default SingleTech;
