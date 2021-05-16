const IconButton = (props) => {
  return (
    <button
      {...props}
      className={`border-2 m-5 border-green-200 hover:border-green-500 rounded-full h-12 w-12 bg-no-repeat bg-center bg-30px focus:outline-none bg-${props.url}`}
    ></button>
  );
};

export default IconButton;
