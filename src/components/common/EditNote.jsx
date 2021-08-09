import { useForm, Controller } from "react-hook-form";
import Modal from "react-modal";

function EditNote({ open, handleCancel, tags, handleUpdate, note }) {
  const { handleSubmit, reset, control } = useForm({
    defaultValues: note,
  });

  const onSubmit = (data) => {
    handleUpdate(note.id, data);
    reset();
    handleCancel();
  };

  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={open}
      style={{
        overlay: {
          background: "rgba(0,0,0,0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          maxWidth: "600px",
          width: "100%",
          borderRadius: "10px",
        },
      }}
      contentLabel="Add Note Modal"
    >
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-xl mb-4 font-medium text-primary">Add Notes</div>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              placeholder="Title"
              className="w-full mb-4 p-2 border-gray-300 rounded-md border-solid border-2 focus:outline-none focus:border-primary"
              {...field}
            />
          )}
        />
        <Controller
          name="tag"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className="w-full mb-4 p-2 border-gray-300 rounded-md border-solid border-2 focus:outline-none focus:border-primary"
            >
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.title}
                </option>
              ))}
            </select>
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              placeholder="Type notes here"
              rows={5}
              className="w-full mb-4 p-2 border-gray-300 rounded-md border-solid border-2 focus:outline-none focus:border-primary"
            />
          )}
        />

        <div className="flex items-center justify-end">
          <button
            className="text-primary focus:outline-none"
            onClick={handleCancel}
            type="button"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-20 h-10 bg-primary text-white rounded-md ml-4 focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default EditNote;
