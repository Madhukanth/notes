export const getBg = (color) => {
  if (color === "red") return "bg-red-500";
  if (color === "blue") return "bg-blue-500";
  if (color === "green") return "bg-green-500";
  if (color === "yellow") return "bg-yellow-500";
  if (color === "pink") return "bg-pink-500";
  if (color === "gray") return "bg-gray-500";

  return "bg-red-500";
};

export const getBorder = (color) => {
  if (color === "red") return "border-red-500";
  if (color === "blue") return "border-blue-500";
  if (color === "green") return "border-green-500";
  if (color === "yellow") return "border-yellow-500";
  if (color === "pink") return "border-pink-500";
  if (color === "gray") return "border-gray-500";

  return "border-red-500";
};
