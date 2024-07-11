import React, { useState, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import {
  setModalActive,
  setSelectedNote,
  updateNoteContent,
  addNote,
} from "../../store/slices/noteSlice";
import { modalContainer, modalContent, closeButton } from "./CreateModal.css";
import axios from "axios";

const CreateModal: React.FC = () => {
  const dispatch = useTypedDispatch();
  const selectedNote = useTypedSelector((state) => state.note.selectedNote);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [updatedAtDisplay, setUpdatedAtDisplay] = useState<string>("");

  useEffect(() => {
    if (selectedNote) {
      setTitle(selectedNote.noteTitle || "");
      setContent(selectedNote.noteContent || "");
      if (selectedNote.noteUpdatedAt) {
        setUpdatedAtDisplay(formatDate(selectedNote.noteUpdatedAt));
      }
    } else {
      setTitle("");
      setContent("");
      setUpdatedAtDisplay(""); // Clear updatedAtDisplay when selectedNote is null
    }
  }, [selectedNote]);

  const handleClose = async () => {
    await saveContent();
    dispatch(setModalActive(false));
    dispatch(setSelectedNote(null));
  };

  const saveContent = async () => {
    const updatedAt = new Date().toISOString();
    if (selectedNote) {
      try {
        await axios.put(`/notes/${selectedNote.noteId}`, {
          title,
          content,
          updatedAt,
        });
        dispatch(
          updateNoteContent({ noteId: selectedNote.noteId, title, content })
        );
        setUpdatedAtDisplay(formatDate(updatedAt)); // Update updatedAtDisplay after update
      } catch (error) {
        console.error("There was an error updating the note!", error);
      }
    } else {
      // Adding a new note
      try {
        const response = await axios.post("/notes", {
          title,
          content,
          createdAt: updatedAt,
          updatedAt,
        });
        const newNote = response.data;
        dispatch(
          addNote({
            noteId: newNote.id,
            noteTitle: newNote.title,
            noteContent: newNote.content,
            noteCreatedAt: formatDate(newNote.createdAt),
            noteUpdatedAt: formatDate(newNote.updatedAt),
          })
        );
        setUpdatedAtDisplay(formatDate(updatedAt)); // Update updatedAtDisplay after add
      } catch (error) {
        console.error("There was an error creating the note!", error);
      }
    }
  };

  // formatDate function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return ""; // Handle invalid date format gracefully
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className={modalContainer} onClick={handleClose}>
      <div className={modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2>{selectedNote ? "Edit Note" : "Create Note"}</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          cols={50}
          autoFocus
        />
        {/* Display updatedAt only if selectedNote and updatedAtDisplay are defined */}
        {updatedAtDisplay && <div>Updated At: {updatedAtDisplay}</div>}
      </div>
    </div>
  );
};

export default CreateModal;
