//notes.js

const express = require('express');
const router = express.Router();
const Notes = require('../models/Notes');
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require('express-validator');


//Fetching notes of a user
router.get('/fetchallnotes',fetchuser, async(req, res) => {
  const notes = await Notes.find({user:req.user.id});
  res.json(notes);

 
});


//Adding notes of a user
router.post('/addnote',fetchuser,[
  body('title','Please enter a valid title').isLength({min:3}),
  body('description','Please enter a valid description').isLength({ min: 5 }),
], async(req, res) => {
  try{
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {title,description,tag} = req.body;
    const note = new Notes({title,description,tag,user:req.user.id})
    await note.save();
    res.json(note);
    
  }
  catch(e){
    console.error(error);
    res.status(500).send('Server Error');
  }
  }
  catch(err){
    console.error(err);
    res.status(500).send('Server Error');
  }
 
});


//Updating notes of a user
// Updating notes of a user
router.put('/updatenotes/:id', fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  const newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;

  // Find the note to be updated and update it
  try {
    let note = await Notes.findById(req.params.id.trim());
    if (!note) return res.status(404).send('Note not found');
    if (note.user.toString() !== req.user.id) return res.status(401).send('Not authorized');
    
    note = await Notes.findByIdAndUpdate(req.params.id.trim(), { $set: newNote }, { new: true });

    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


router.delete('/deletenotes/:id', fetchuser, async (req, res) => {
  
  // Find the note to be updated and update it
  try {
    const {title,description,tag} = req.body;
    let note = await Notes.findById(req.params.id.trim());
    if (!note) return res.status(404).send('Note not found');
    if (note.user.toString() !== req.user.id) return res.status(401).send('Not authorized');
    
    note = await Notes.findByIdAndDelete(req.params.id.trim());

    res.json({"Success":"Note has been deleted successfully"});
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
