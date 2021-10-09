import React, { useState } from 'react';
import { NoteContext } from './NoteContext';


const NoteState = ( props ) =>
{
    const initialNote = [];
    const host = "http://localhost:5000/";

    const [ notes, setNotes ] = useState( initialNote );
    const [ note, setNote ] = useState( { id: "", etitle: "", edescription: "", etag: "" } );

    // Get note functions
    const getNotes = async ( notes ) =>
    {
        const response = await fetch( `${ host }api/note/getNote`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            }
        } );
        const json = await response.json();
        setNotes( json.note );

    };
    // add note functions
    const addNote = async ( noteValue ) =>
    {
        const response = await fetch( `${ host }api/note/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            },
            body: JSON.stringify( noteValue )
        } );
        const noteData = await response.json();
        setNotes( notes.concat( noteData ) );
    };


    // update note functions
    const editNote = async ( id, title, description, tag ) =>
    {
        const response = await fetch( `${ host }api/note/updateNote/${ id }`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            },
            body: JSON.stringify( { title, description, tag } )

        } );

        const json = await response.json();

        let newNotes = JSON.parse( JSON.stringify( notes ) );
        // Logic to edit in client
        for ( let index = 0; index < newNotes.length; index++ )
        {
            const element = newNotes[ index ];
            if ( element._id === id )
            {
                newNotes[ index ].title = title;
                newNotes[ index ].description = description;
                newNotes[ index ].tag = tag;
                break;
            }
        }
        setNotes( newNotes );

        if ( json )
        {
            alert( "Note Update Successfully Done" );
        }
    };


    // delete note functions
    const deleteNote = async ( id ) =>
    {
        const response = await fetch( `${ host }api/note/deleteNote/${ id }`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            }

        } );
        const json = await response.json();
        console.log( json );
        const newNote = notes.filter( ( note ) => { return note._id !== id; } );
        setNotes( newNote );
    };



    return (
        <NoteContext.Provider value={ { notes, setNotes, addNote, deleteNote, editNote, getNotes, note, setNote } }>
            { props.children }
        </NoteContext.Provider>
    );
};

export default NoteState;
