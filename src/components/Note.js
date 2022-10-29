import DeleteIcon from '@material-ui/icons/Delete'

export default function Note({ id, title, content, onDelete}) {

    const handleClick = () => {
        onDelete(id)
    }
    return(
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    )
}