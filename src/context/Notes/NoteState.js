import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);
  const fetchNote = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDliNDEzYjJkMTdiZGI1MDk5NzAwIn0sImlhdCI6MTY4NzI2MTg3OX0.ZQ0P7SqAPYrbCRO2Nf-6jPguGyogLAdfmHZ1BQEcd7I",
      },
    });
    let json = await response.json();
    setNotes(json);
  };

  //Function to add a note
  const addNote = async (title, description) => {
    let tag = "general";
    const response = await fetch(`${host}/api/notes/addnote `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDliNDEzYjJkMTdiZGI1MDk5NzAwIn0sImlhdCI6MTY4NzI2MTg3OX0.ZQ0P7SqAPYrbCRO2Nf-6jPguGyogLAdfmHZ1BQEcd7I",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    fetchNote();
  };

  const editNote = async (title, description, id) => {
    let tag = "general";
    //API CALL
    const response = await fetch(
      `${host}/api/notes/updatenotes/${id} `,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDliNDEzYjJkMTdiZGI1MDk5NzAwIn0sImlhdCI6MTY4NzI2MTg3OX0.ZQ0P7SqAPYrbCRO2Nf-6jPguGyogLAdfmHZ1BQEcd7I",
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();

    fetchNote();
  };

  const deleteNote = async (id) => {
    
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ5MDliNDEzYjJkMTdiZGI1MDk5NzAwIn0sImlhdCI6MTY4NzI2MTg3OX0.ZQ0P7SqAPYrbCRO2Nf-6jPguGyogLAdfmHZ1BQEcd7I",
      },
    });
    fetchNote();
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, fetchNote,editNote }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
