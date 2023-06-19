import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64909b713b2d17bdb5099703",
          "user": "64909b413b2d17bdb5099700",
          "title": "meetup",
          "description": "Lets Meetup Tomorrow",
          "tag": "personal",
          "date": "2023-06-19T18:16:17.951Z",
          "__v": 0
        },
        {
          "_id": "64909b7a3b2d17bdb5099705",
          "user": "64909b413b2d17bdb5099700",
          "title": "meetup1",
          "description": "Lets Meetup Tomorrow1",
          "tag": "personal",
          "date": "2023-06-19T18:16:26.746Z",
          "__v": 0
        },
        {
          "_id": "64909b7f3b2d17bdb5099707",
          "user": "64909b413b2d17bdb5099700",
          "title": "meetup12",
          "description": "Lets Meetup Tomorrow12",
          "tag": "personal",
          "date": "2023-06-19T18:16:31.189Z",
          "__v": 0
        }
      ]
      const [notes,setNotes] = useState(notesInitial);

    return (
        <noteContext.Provider value={notesInitial}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
