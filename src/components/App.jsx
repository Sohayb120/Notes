import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  function addOrUpdateNote(newNote) {
    if (editingIndex !== null) {
      setNotes(prevNotes => {
        const updatedNotes = [...prevNotes];
        updatedNotes[editingIndex] = newNote;
        return updatedNotes;
      });
      setEditingIndex(null);
    } else {
      setNotes(prevNotes => [...prevNotes, newNote]);
    }
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }

  function editNote(id) {
    setEditingIndex(id);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addOrUpdateNote} noteToEdit={notes[editingIndex]} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          time={note.currentTime}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
