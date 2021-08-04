const SidebarItem = ({ active, handleClick, children }) => {
  return (
    <div
      className={`flex items-center p-3 bg-primary ${
        active && "border-l-4 border-solid border-white"
      } text-white cursor-pointer hover:bg-purple-dark`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default SidebarItem;
