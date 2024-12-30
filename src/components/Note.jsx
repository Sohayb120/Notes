import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";

function Note(props) {
  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  function handleEditClick() {
    props.onEdit(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p style={{ fontSize: 15, color: 'orange',textAlign:'end' }}>{props.time}</p>
      <button onClick={handleDeleteClick}>
        <Fab>
          <DeleteIcon color="warning" />
        </Fab>
      </button>
      <button onClick={handleEditClick}>
        <Fab aria-label="edit">
          <EditIcon />
        </Fab>
      </button>
    </div>
  );
}

export default Note;
