import { createContext, useRef, useState } from "react";
import { v4 } from "uuid";
import * as localForage from "localforage";

const INITIAL_TAGS = [
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
];

export const NotesContext = createContext({
  // Notes
  notes: [],
  addNote: () => {},
  editNote: () => {},
  deleteNote: () => {},
  getNoteByID: () => {},
  searchNotes: () => {},
  getNotesByTag: () => {},

  // Tags
  tags: [],
  addTag: () => {},
  editTag: () => {},
  deleteTag: () => {},
  getTagByID: () => {},

  // Save Data
  initialRender: true,
  saveData: () => {},
  extractData: () => {},
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
        return { ...updatedNote, id: note.id, modifiedAt: new Date() };
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

  const searchNotes = (text) => {
    const res = [];
    for (const note of notes) {
      if (note.title.includes(text) || note.description.includes(text)) {
        res.push(note);
      }
    }
    return res;
  };

  // Tags
  const [tags, setTags] = useState(INITIAL_TAGS);

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

    // Marking notes with deleted tag to none tag
    const noneTag = tags.find((tag) => tag.title === "None");
    setNotes((data) =>
      data.map((note) => {
        if (note.tag !== id) return note;
        return { ...note, tag: noneTag.id };
      })
    );
  };

  const getTagByID = (id) => {
    return tags.find((tag) => tag.id === id);
  };

  // Save Data
  const initialRender = useRef(true);

  const saveData = async () => {
    await localForage.setItem("notes", notes);
    await localForage.setItem("tags", tags);
  };

  const extractData = async () => {
    const localNotes = await localForage.getItem("notes");
    const localTags = await localForage.getItem("tags");

    setNotes(localNotes || []);
    setTags(localTags || INITIAL_TAGS);
    initialRender.current = false;
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
        searchNotes,
        getNotesByTag,

        // Tags
        tags,
        addTag,
        editTag,
        deleteTag,
        getTagByID,

        // Save Data
        initialRender: initialRender,
        saveData,
        extractData,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
