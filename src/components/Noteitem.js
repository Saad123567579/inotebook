import React, { useContext } from 'react';
import noteContext from '../context/Notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const handleDelete = () => {
    deleteNote(props._id);
  };

  return (
    <div className="card my-3" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <i className="fa fa-trash mx-2" onClick={handleDelete}></i>
        <i className="fa fa-pen mx-2"></i>
      </div>
    </div>
  );
}

export default Noteitem;
