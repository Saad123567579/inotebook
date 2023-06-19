import React,{ useContext }  from 'react'
import noteContext from '../context/Notes/noteContext';
import Noteitem from './Noteitem';
function Note() {
    const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="container">
        <h1>Your Notes Are</h1>
        <div className="container mx-3 my-3">
        {notes.map((note) =><div key={note.title}> <Noteitem title={note.title} description={note.description} _id={note._id} /></div>  )}
        </div>
    </div>
  )
}

export default Note
