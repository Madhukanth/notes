const ColorSelector = ({ color, active, onClick, ref }) => {
  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`h-8 w-8 mr-2 rounded-full cursor-pointer ${
        active ? "bg-white" : `bg-${color}-500`
      } border-solid border-${color}-500 border-4`}
    />
  );
};

export default ColorSelector;
