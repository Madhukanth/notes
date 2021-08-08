import { Link } from "react-router-dom";

const SidebarItem = ({ active, children, to }) => {
  return (
    <Link
      className={`flex items-center p-3 bg-primary ${
        active && "border-l-4 border-solid border-white"
      } text-white cursor-pointer hover:bg-purple-dark`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default SidebarItem;
