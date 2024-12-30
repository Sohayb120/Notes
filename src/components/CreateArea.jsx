import React, { useState, useEffect } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    currentTime: new Date().toLocaleString()
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (props.noteToEdit) {
      setNote(props.noteToEdit);
      setIsExpanded(true);
    }
  }, [props.noteToEdit]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      currentTime: new Date().toLocaleString()
    });
    event.preventDefault();
  }

  function expanded() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expanded}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="write ur Note..."
          rows={isExpanded ? 5 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab color="info" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
