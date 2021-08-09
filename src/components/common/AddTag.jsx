import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";

import ColorSelector from "./ColorSelector";

const colors = ["red", "blue", "green", "yellow", "purple", "pink", "gray"];

function AddTag({ open, handleCancel, handleAdd }) {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: { title: "", description: "", color: "red" },
  });

  const onSubmit = (data) => {
    const error = handleAdd(data);
    if (error) {
      alert(error);
      return;
    }

    reset();
    handleCancel();
  };

  const onCancel = () => {
    reset();
    handleCancel();
  };

  const handleColorChange = (selectedColor) => () => {
    setValue("color", selectedColor);
  };

  return (
    <Modal
      isOpen={open}
      appElement={document.getElementById("root")}
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
      contentLabel="Add Tag Modal"
    >
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-xl mb-4 font-medium text-primary">Add Tag</div>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              placeholder="Title"
              className="w-full mb-4 p-2 border-gray-300 rounded-md border-solid border-2 focus:outline-none focus:border-primary"
            />
          )}
        />

        <Controller
          name="color"
          control={control}
          render={({ field }) => {
            return (
              <div className="flex mb-4">
                {colors.map((color, i) => (
                  <ColorSelector
                    key={i}
                    color={color}
                    active={field.value === color}
                    onClick={handleColorChange(color)}
                  />
                ))}
              </div>
            );
          }}
        />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              rows={5}
              placeholder="Description"
              className="w-full mb-4 p-2 border-gray-300 rounded-md border-solid border-2 focus:outline-none focus:border-primary"
            />
          )}
        />

        <div className="flex items-center justify-end">
          <button
            className="text-primary focus:outline-none"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-20 h-10 bg-primary text-white rounded-md ml-4 focus:outline-none"
          >
            Add
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default AddTag;
