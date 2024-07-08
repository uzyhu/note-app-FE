import React, { ChangeEvent, useEffect, useState } from "react";
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

interface Note {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
}

const Note: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  console.log("in-Note");
  useEffect(() => {
    console.log("in-Note?");
    axios
      .get("/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  return (
    <div className={noteContainer}>
      <div className={header}>
        <h1 className={title}>Note List</h1>
        <FaRegCalendarPlus className={addButton}/>
      </div>
      <ul>
        {notes.map((note) => (
          <div className={noteItemContainer} key={note.id}>
            <div>
            <span className={noteTitle}>{note.title}</span>
            <div className={noteContent}>{note.updatedAt}</div>
            </div>
            <button className={deleteButton}>DELETE</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Note;
