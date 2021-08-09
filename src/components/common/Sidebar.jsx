import { useState } from "react";
import { useParams } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import Divider from "./Divider";
import { getBg } from "../../utils/colors";
import DeleteIcon from "../../assets/delete_white.png";

const Sidebar = ({ toggleTagAddModal, tags, handleDelete }) => {
  const { id } = useParams();
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing(!editing);
  };

  const deleteTag = (id) => () => {
    handleDelete(id);
  };

  return (
    <div className="w-64 h-full bg-primary">
      <div className="flex justify-between items-center bg-purple-dark mb-4 shadow-md p-3">
        <div className="text-white text-2xl">Local Notes</div>

        {editing ? (
          <button
            className="text-white focus:outline-none"
            onClick={toggleEdit}
          >
            Done
          </button>
        ) : (
          <button
            className="text-white focus:outline-none"
            onClick={toggleEdit}
          >
            Edit
          </button>
        )}
      </div>

      <SidebarItem active={!id} to="/">
        Notes
      </SidebarItem>

      <Divider />

      {!editing &&
        tags.map((tag) => (
          <SidebarItem
            key={tag.id}
            to={`/tags/${tag.id}`}
            active={id === tag.id}
          >
            <div
              className={`h-3 w-3 border-solid border-white border-2 rounded-full ${getBg(
                tag.color
              )}`}
            />
            <div className="ml-2">{tag.title}</div>
          </SidebarItem>
        ))}

      {editing &&
        tags.map((tag) => (
          <div
            key={tag.id}
            className="text-white flex items-center justify-between p-3"
          >
            <div className="flex items-center">
              <div
                className={`h-3 w-3 border-solid border-white border-2 rounded-full ${getBg(
                  tag.color
                )}`}
              />
              <div className="ml-2">{tag.title}</div>
            </div>
            {tag.title !== "None" && (
              <button
                className="h-3 w-3 focus:outline-none"
                onClick={deleteTag(tag.id)}
              >
                <img alt="Delete" src={DeleteIcon} />
              </button>
            )}
          </div>
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
