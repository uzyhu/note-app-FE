import React, { useState, useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import {
  setModalActive,
  setSelectedNote,
  updateNoteContent,
} from "../../store/slices/noteSlice";
import { modalContainer, modalContent, closeButton } from "./CreateModal.css";
import axios from "axios";

const CreateModal: React.FC = () => {
  const dispatch = useTypedDispatch();
  const selectedNote = useTypedSelector((state) => state.note.selectedNote);
  const [content, setContent] = useState<string>(
    selectedNote?.noteContent || ""
  );

  useEffect(() => {
    if (selectedNote) {
      setContent(selectedNote.noteContent);
    }
  }, [selectedNote]);

  const handleClose = async () => {
    await saveContent();
    dispatch(setModalActive(false));
    dispatch(setSelectedNote(null));
  };

  const saveContent = async () => {
    if (selectedNote) {
      const updatedAt = new Date().toISOString();
      try {
        await axios.put(`/notes/${selectedNote.noteId}`, {
          title: selectedNote.noteTitle,
          content,
          updatedAt,
        });
        dispatch(updateNoteContent({ noteId: selectedNote.noteId, content }));
      } catch (error) {
        console.error("There was an error updating the note!", error);
      }
    }
  };

  return (
    <div className={modalContainer} onClick={handleClose}>
      <div
        className={modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={closeButton} onClick={handleClose}>
          &times;
        </button>
        <h2>{selectedNote?.noteTitle}</h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
          cols={50}
          autoFocus
        />
      </div>
    </div>
  );
};

export default CreateModal;