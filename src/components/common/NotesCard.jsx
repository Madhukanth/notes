const NotesCard = ({ title, modifiedAt, description, tag }) => {
  return (
    <div
      className={`h-56 w-card-sm m-4 p-4 shadow-md bg-white rounded-md 2xl:w-card-2xl xl:w-card-xl lg:w-card-lg md:w-card-md sm:w-card-sm`}
    >
      <div className="text-sm opacity-50 mb-4">
        {modifiedAt.toString().slice(0, 16).replace(" ", ", ")}
      </div>
      <div className="flex items-center mb-2 ">
        <div className="text-xl font-medium">{title}</div>
        <div className={`h-2 w-2 rounded-lg bg-${tag.color}-500 ml-2`} />
      </div>
      <div className="overflow-hidden h-24">{description}</div>
    </div>
  );
};

export default NotesCard;
