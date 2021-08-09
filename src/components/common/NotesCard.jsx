import DeleteIcon from "../../assets/delete.png";
import EditIcon from "../../assets/edit.png";

const NotesCard = ({ note, tag, handleDelete, handleEdit }) => {
  const deleteNote = () => {
    handleDelete(note.id);
  };

  return (
    <div
      className={`h-56 w-card-sm m-4 p-4 shadow-md bg-white rounded-md 2xl:w-card-2xl xl:w-card-xl lg:w-card-lg md:w-card-md sm:w-card-sm`}
    >
      <div className="text-sm mb-4 w-full flex justify-between items-center">
        <div className="opacity-50">
          {note.modifiedAt.toString().slice(0, 16).replace(" ", ", ")}
        </div>

        <div>
          <button title="Edit" className="h-4 w-4 mr-3" onClick={handleEdit}>
            <img alt="delete" src={EditIcon} />
          </button>

          <button title="Delete" className="h-5 w-3" onClick={deleteNote}>
            <img alt="delete" src={DeleteIcon} />
          </button>
        </div>
      </div>
      <div className="flex items-center mb-2 ">
        <div className="text-xl font-medium">{note.title}</div>
        <div className={`h-2 w-2 rounded-lg bg-${tag.color}-500 ml-2`} />
      </div>
      <div className="overflow-hidden h-24">{note.description}</div>
    </div>
  );
};

export default NotesCard;
