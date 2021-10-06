import React, { useContext } from 'react';
import { NoteContext } from '../../../context/Notes/NoteContext';
import Form from '../Form/Form';
import NoteItems from '../NoteItems/NoteItems';

const Home = () =>
{
    const context = useContext( NoteContext );
    const { state } = context;
    console.log( state );
    return (
        <div>
            <h2>Add Note</h2>
            <Form />
            <h3>Your Notes</h3>
            <div>
                {
                    state.map( note => ( <NoteItems key={ !note._id ? 10 : note._id } value={ note } /> ) )
                }
            </div>
        </div>
    );
};

export default Home;
