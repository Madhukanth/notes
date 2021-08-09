import { createContext, useState } from "react";
import { v4 } from "uuid";

export const NotesContext = createContext({
  // Notes
  notes: [],
  addNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
  getNoteByID: () => {},
  getNotesByTag: () => {},

  // Tags
  tags: [],
  addTag: () => {},
  editTag: () => {},
  deleteTag: () => {},
  getTagByID: () => {},
});

export const NotesProvider = (props) => {
  // Notes
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((data) => [
      ...data,
      { ...newNote, id: v4(), modifiedAt: new Date() },
    ]);
  };

  const editNote = (id, updatedNote) => {
    setNotes((data) =>
      data.map((note) => {
        if (note.id !== id) return note;
        return { ...updatedNote, id: note.id };
      })
    );
  };

  const deleteNote = (id) => {
    setNotes((data) => data.filter((note) => note.id !== id));
  };

  const getNoteByID = (id) => {
    return notes.find((note) => note.id === id);
  };

  const getNotesByTag = (tagID = null) => {
    if (!tagID) return notes;

    return notes.filter((note) => note.tag === tagID);
  };

  // Tags
  const [tags, setTags] = useState([
    {
      title: "Project",
      id: v4(),
      color: "red",
      description: "This tag relates to the projects",
    },
    {
      title: "Business",
      id: v4(),
      color: "blue",
      description: "This tag relates to the business",
    },
    {
      title: "Personal",
      id: v4(),
      color: "green",
      description: "This tag relates to the personals",
    },
    {
      title: "None",
      id: v4(),
      color: "gray",
      description: "This tag relates to none",
    },
  ]);

  const addTag = (newTag) => {
    const tagAlreadyExist = tags.find(
      (tag) => tag.title.toLowerCase() === newTag.title.toLowerCase()
    );
    if (tagAlreadyExist) {
      return `A tag with title ${newTag.title} already exists`;
    }

    setTags((data) => [...data, { ...newTag, id: v4() }]);
  };

  const editTag = (id, updatedTag) => {
    setTags((data) =>
      data.map((tag) => {
        if (tag.id !== id) return tag;
        return { ...updatedTag, id: tag.id };
      })
    );
  };

  const deleteTag = (id) => {
    setTags((data) => data.filter((tag) => tag.id !== id));
  };

  const getTagByID = (id) => {
    return tags.find((tag) => tag.id === id);
  };

  return (
    <NotesContext.Provider
      value={{
        // Notes
        notes,
        addNote,
        editNote,
        deleteNote,
        getNoteByID,
        getNotesByTag,

        // Tags
        tags,
        addTag,
        editTag,
        deleteTag,
        getTagByID,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
