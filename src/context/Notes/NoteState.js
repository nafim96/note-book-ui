import React, { useState } from 'react';
import { NoteContext } from './NoteContext';


const initialNote = [];




const NoteState = ( props ) =>
{
    const [ noteState, setNoteState ] = useState( initialNote );
    const host = "http://localhost:5000/";

    // Get note functions
    const getNote = async ( notes ) =>
    {
        const response = await fetch( `${ host }api/note/getNote`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            }

        } );
        const json = await response.json();
        setNoteState( json.note );
    };
    // add note functions
    const addNote = async ( notes ) =>
    {
        const response = await fetch( `${ host }api/note/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "User-Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOnsiaWQiOiI2MTVjMzZkNGQwZTk1YTA0MjczNTMzN2MifX0sImlhdCI6MTYzMzU5OTMxNX0.7DfsZFQhvx-i99mRcaKiiVDSVJ6aer2KgZ7toKH1GUs"
            },
            body: JSON.stringify( notes )
        } );
        const json = await response.json();
        setNoteState( noteState.concat( json ) );
    };


    // edit note functions
    const editNote = async ( id, title, description, tag ) =>
    {
        // eslint-disable-next-line
        const response = await fetch( `${ host }api/note/updateNote/${ id }`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "User-Token": ""
            },
            body: JSON.stringify( { title, description, tag } )

        } );

        // const json = await response.json();

        // for ( let i = 0; i < noteState.length; i++ )
        // {
        //     let note = noteState[ i ];
        //     if ( note._id === id )
        //     {
        //         note.title = title,
        //             note.description = description,
        //             note.tag = tag;
        //     }
        // }
        console.log( id, title, description, tag );
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
        const newNote = noteState.filter( ( note ) => { return note._id !== id; } );
        setNoteState( newNote );
    };



    return (
        <NoteContext.Provider value={ { noteState, setNoteState, addNote, deleteNote, editNote, getNote } }>
            { props.children }
        </NoteContext.Provider>
    );
};

export default NoteState;
