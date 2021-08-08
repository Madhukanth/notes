import { useParams } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import Divider from "./Divider";

const Sidebar = ({ toggleTagAddModal, tags }) => {
  const { id } = useParams();

  return (
    <div className="w-64 h-full bg-primary">
      <div className="text-white text-2xl p-3 bg-purple-dark mb-4 shadow-md">
        Local Notes
      </div>

      <SidebarItem active={!id} to="/">
        Notes
      </SidebarItem>

      <Divider />

      {tags.map((tag) => (
        <SidebarItem key={tag.id} to={`/tags/${tag.id}`} active={id === tag.id}>
          <div
            className={`h-3 w-3 border-solid border-white border-2 rounded-full bg-${tag.color}-500`}
          />
          <div className="ml-4">{tag.title}</div>
        </SidebarItem>
      ))}

      <button
        className="text-white flex items-center pl-3 focus:outline-none w-full hover:bg-purple-dark"
        onClick={toggleTagAddModal}
      >
        <div className="text-4xl">+</div>
        <div className="ml-4">Add new</div>
      </button>

      <Divider />
    </div>
  );
};

export default Sidebar;
