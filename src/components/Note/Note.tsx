import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

interface Note {
  id: number;
  title: string;
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
    <div>
      <h1>Note List</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Note;
