import React,{ useContext,useEffect }  from 'react'
import noteContext from '../context/Notes/noteContext';
import Noteitem from './Noteitem';
function Note() {

    const context = useContext(noteContext);
  const { notes,fetchNote } = context;
  
  useEffect(() => {
    fetchNote();
  }, [])
  return (
    <div className="container">
        {notes.length!==0?(<h1>Your Notes Are</h1>):(<h1>Sorry No Notes Availabe</h1>)}
        <div className="container mx-3 my-3">
        {notes.map((note) =><div key={note._id}> <Noteitem title={note.title} description={note.description} _id={note._id} /></div>  )}
        </div>
    </div>
  )
}

export default Note
