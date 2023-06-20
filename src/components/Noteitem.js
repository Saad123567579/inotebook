import React, { useContext,useState } from 'react';
import noteContext from '../context/Notes/noteContext';

function Noteitem(props) {
  const id = props._id;


  const context = useContext(noteContext);
  const { deleteNote,editNote } = context;
  const [note,setnote] = useState({title:"",description:""})
  const handleChange = (e) => {
    setnote({ ...note, [e.target.id]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.title,note.description,id);
    document.getElementById('description').value="";
    document.getElementById('title').value="";

  }

  const handleDelete = () => {
    deleteNote(props._id);
  };

  return (
    <div className="card my-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <i className="fa fa-trash mx-2" onClick={handleDelete}></i>
        <i className="fa fa-pen mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" ></i>
      </div>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text">Give a title to your notes</div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" onChange={handleChange} />
          <div id="emailHelp" className="form-text">Write your description here</div>
        </div>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save</button>
      </form>
      </div>
      
    </div>
  </div>
</div>
    </div>
  );
}

export default Noteitem;
