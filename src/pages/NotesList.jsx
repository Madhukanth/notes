import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { NotesContext } from "../contexts/NotesContext";
import Sidebar from "../components/common/Sidebar";
import AddNote from "../components/common/AddNote";
import AddTag from "../components/common/AddTag";
import NotesCard from "../components/common/NotesCard";

function NotesList() {
  const [addModalOpen, setModalOpen] = useState(false);
  const [addTagModalOpen, setTagModalOpen] = useState(false);
  const { tags, addNote, getTagByID, getNotesByTag, addTag, deleteNote } =
    useContext(NotesContext);

  const { id } = useParams();

  const handleEnter = (e) => {
    if (e.keyCode !== 13) return;

    // Handle Search here ...
  };

  const toggleTagAddModal = () => {
    setTagModalOpen(!addTagModalOpen);
  };

  const toggleAddModal = () => {
    setModalOpen(!addModalOpen);
  };

  const activeTag = getTagByID(id);
  const notes = getNotesByTag(id);

  return (
    <div className="w-screen h-screen flex">
      <Sidebar toggleTagAddModal={toggleTagAddModal} tags={tags} />

      <AddTag
        open={addTagModalOpen}
        handleCancel={toggleTagAddModal}
        handleAdd={addTag}
      />

      <div className="h-full w-full-without-sidebar ">
        <div className="h-14 w-full shadow-md flex justify-center items-center">
          <input
            className="w-full max-w-lg ml-2 mr-2 pt-1 pb-1 pl-2 pr-2 border-gray-300 border-solid border-2 rounded-md focus:outline-none"
            placeholder="Search"
            onKeyDown={handleEnter}
          />
        </div>

        <div className="pt-6 pb-6 pl-8 pr-8 bg-gray-100 h-full-without-header w-full">
          <div className="flex justify-between items-center pl-2 pr-4">
            <div className="m-2 bg-primary text-white pl-5 pr-5 pb-1 pt-1 rounded-md focus:outline-none">
              {activeTag ? activeTag.title : "All"}
            </div>

            <button
              className="flex items-center focus:outline-none"
              onClick={toggleAddModal}
            >
              <div className="text-4xl border-solid rounded-full border-primary border-2 h-6 w-6 leading-5 text-primary">
                +
              </div>
              <div className="ml-2 text-primary font-medium">Add new note</div>
            </button>

            <AddNote
              tags={tags}
              open={addModalOpen}
              handleAdd={addNote}
              handleCancel={toggleAddModal}
            />
          </div>

          <div className="flex flex-wrap w-full overflow-y-scroll overflow-x-hidden max-h-full-without-header-tags mt-2">
            {notes.map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                tag={getTagByID(note.tag)}
                handleDelete={deleteNote}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
