import React, { useContext, useEffect, useRef, useState } from 'react';
import { NoteContext } from '../../../context/Notes/NoteContext';
import NoteItems from '../NoteItems/NoteItems';
import UpdateNote from '../../dashboard/UpdateNote/UpdateNote';
import DeleteNote from '../../dashboard/DeleteNote/DeleteNote';

const Home = () =>
{
    const context = useContext( NoteContext );
    const { notes, getNotes, setNote } = context;
    const [ open, setOpen ] = useState( false );
    const [ cancel, setCancel ] = useState( false );
    const [ getNote, setGetNote ] = useState( {} );

    useEffect( () =>
    {
        getNotes();
        //eslint-disable-next-line
    }, [] );

    const updateNote = ( currentNote ) =>
    {
        setNote( { id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag } );
        setOpen( true );
    };
    const deletesNote = ( id ) =>
    {
        setCancel( true );
        setGetNote( id );
    };

    const cancelButtonRef = useRef( null );

    return (
        <div>
            <UpdateNote cancelButtonRef={ cancelButtonRef } open={ open } setOpen={ setOpen } />
            <DeleteNote cancelButtonRef={ cancelButtonRef } cancel={ cancel } setCancel={ setCancel } getNote={ getNote } />
            <h1>Your Notes</h1>
            { notes.length === 0 ? <div className="container mx-2">
                No notes to display
            </div> : <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
                {

                    notes.map( note => ( <NoteItems key={ !note._id ? 10 : note._id } note={ note } updateNote={ updateNote } deletesNote={ deletesNote } /> ) )
                }
            </div> }

        </div>
    );
};

export default Home;
