import React, { useState, useContext, useEffect } from 'react';
import Note from './Note';
import noteContext from '../context/Notes/noteContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Move useNavigate inside the functional component body

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate('/login');
    }
  }, []);

  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description);
    document.getElementById('description').value = '';
    document.getElementById('title').value = '';
  };

  return (
    <div className="container" style={{ alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }} className="my-3">
        Add A Note
      </h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" placeholder="Title" aria-describedby="emailHelp" onChange={handleChange} />
          <div id="emailHelp" className="form-text">
            Give a title to your notes
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="description" placeholder="Description" onChange={handleChange} />
          <div id="emailHelp" className="form-text">
            Write your description here
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Save
        </button>
      </form>
      <Note />
    </div>
  );
}

export default Home;
