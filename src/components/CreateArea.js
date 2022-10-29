import { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function CreateArea({ onAdd }){
    const [isExpanded, setIsExpanded] = useState(false)
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
        // console.log(note)
    } 

    const submitNote = (e) => {
        e.preventDefault()

        onAdd(note)
        setNote({
            title:'',
            content: ''
        })
    }

    const handleExpanded = () => setIsExpanded(true)

    return(
        <div>
            <form className="create-note">
            {isExpanded && (
                <input 
                    type="text" 
                    name="title"
                    placeholder='Title' 
                    value={note.title}
                    onChange={handleChange} 
                />
            )}
                <textarea 
                    name="content" 
                    rows={isExpanded ? '3' : '1'}
                    placeholder='Take a note...' 
                    value={note.content}
                    onClick={handleExpanded}
                    onChange={handleChange}
                />
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    )
} 