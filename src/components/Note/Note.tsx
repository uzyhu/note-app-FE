import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  addButton,
  deleteButton,
  header,
  noteContainer,
  noteContent,
  noteItemContainer,
  noteTitle,
  title,
} from "./Note.css";
import { FaRegCalendarPlus } from "react-icons/fa";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setModalActive, setSelectedNote, updateNoteArray } from "../../store/slices/noteSlice";
import { INote } from "../../types";

const Note: React.FC = () => {
  const dispatch = useTypedDispatch();
  const notes = useTypedSelector((state) => state.note.noteArray);
  
  const fetchNotes = async () => {
    try {
      const response = await axios.get("/notes");
      const fetchedNotes: INote[] = response.data.map((note: any) => ({
        noteId: note.id,
        noteTitle: note.title,
        noteContent: note.content,
        noteCreatedAt: formatDate(note.createdAt),
        noteUpdatedAt: formatDate(note.updatedAt),
      }));
      dispatch(updateNoteArray(fetchedNotes));
    } catch (error) {
      console.error("There was an error fetching the notes!", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error("There was an error deleting the note!", error);
    }
  };

  const handleClickNote = (note: INote) => {
    dispatch(setSelectedNote(note));
    dispatch(setModalActive(true));
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className={noteContainer}>
      <div className={header}>
        <h1 className={title}>Note List</h1>
        <FaRegCalendarPlus className={addButton} />
      </div>
      <ul>
        {notes.map((note) => (
          <div
            onClick={() => handleClickNote(note)}
            className={noteItemContainer}
            key={note.noteId}
          >
            <div>
              <span className={noteTitle}>{note.noteTitle}</span>
              <div className={noteContent}>{note.noteUpdatedAt}</div>
            </div>
            <button
              className={deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(note.noteId);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Note;