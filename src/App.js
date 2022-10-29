//Styles
import './App.css';

//Components
import Header from './components/Header'
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import Footer from './components/Footer';

//Hooks
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
    
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id
      })
    })
  }

  return (
    <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    {notes && notes.map((noteItem, index) => (
      
        <Note
        key={index}
        id={index}
        title={noteItem.title} 
        content={noteItem.content}
        onDelete={deleteNote}
      />
      
    ))}
      <Footer />
    </div>
  );
}

export default App;
