import React, { useContext, useEffect, useRef, useState } from 'react';
import { NoteContext } from '../../../context/Notes/NoteContext';
import NoteItems from '../NoteItems/NoteItems';
import UpdateNote from '../../dashboard/UpdateNote/UpdateNote';

const Home = () =>
{
    const [ open, setOpen ] = useState( false );

    const updateNote = ( note ) =>
    {
        setOpen( true );
    };


    const cancelButtonRef = useRef( null );
    const context = useContext( NoteContext );
    const { noteState, getNote } = context;
    useEffect( () =>
    {
        getNote();
        //eslint-disable-next-line
    }, [] );


    return (
        <div>
            <UpdateNote cancelButtonRef={ cancelButtonRef } open={ open } setOpen={ setOpen } />
            <h1>Your Notes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
                {
                    noteState.map( note => ( <NoteItems key={ !note._id ? 10 : note._id } value={ note } updateNote={ updateNote } /> ) )
                }
            </div>
        </div>
    );
};

export default Home;
