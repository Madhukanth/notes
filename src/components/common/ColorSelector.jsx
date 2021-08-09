import { getBorder, getBg } from "../../utils/colors";

const ColorSelector = ({ color, active, onClick, ref }) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`h-8 w-8 mr-2 rounded-full cursor-pointer ${
        active ? "bg-white" : getBg(color)
      } border-solid ${getBorder(color)} border-4`}
    />
  );
};

export default ColorSelector;
