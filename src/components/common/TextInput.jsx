const TextInput = (props) => {
  return (
    <input
      {...props}
      className="text-lg p-2 h-10 w-3/5 max-w-sm rounded border-2 border-gray-200 mt-3 focus:outline-none focus:border-green-500"
    />
  );
};

export default TextInput;
