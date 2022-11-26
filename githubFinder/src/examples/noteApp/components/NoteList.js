import React, { useContext } from "react"
import Note from "./Note"
import NoteContext from "../context/noteContext"

const NoteList = () => {
    const {notes} =  useContext(NoteContext)
    return (
        notes.map((note) => (
            <Note key={note.title} note={note} />
        ))
    )
}

export default NoteList