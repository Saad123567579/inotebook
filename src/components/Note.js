import React,{ useContext,useEffect }  from 'react'
import noteContext from '../context/Notes/noteContext';
import Noteitem from './Noteitem';
import { useNavigate } from 'react-router-dom';

function Note() {
  const navigate = useNavigate();

    const context = useContext(noteContext);
  const { notes,fetchNote } = context;
  
  useEffect(() => {
    if(localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== "" )
    fetchNote();
    else 
    navigate('/login');

  }, [])
  return (
    <div className="container">
        {notes.length!==0?(<h1>Your Notes Are</h1>):(<h1>You Dont Have Any Notes Yet</h1>)}
        <div className="container mx-3 my-3">
        {notes.map((note) =><div key={note._id}> <Noteitem title={note.title} description={note.description} _id={note._id} /></div>  )}
        </div>
    </div>
  )
}

export default Note
