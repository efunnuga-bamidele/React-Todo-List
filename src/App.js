import './App.css';
import Header from './components/Header'
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {

  const [notes, setNotes] = useState([])

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
    console.log(notes)
  }

  return (
    <div>
    <Header />
    <CreateArea onAdd={addNote}/>

      
    </div>
  );
}

export default App;
