import React, { useContext } from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { NoteContext } from '../../../context/Notes/NoteContext';

const NoteItems = ( props ) =>
{
    const { title, description, tag, date, agree, _id } = props.value;
    const { updateNote } = props;
    const context = useContext( NoteContext );
    const handleDelete = context.deleteNote;



    return (
        <div className="mx-2 sm:my-4 sm:m-auto md:m-4 md:my-4">
            <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{ title }</div>
                    <p className="text-gray-700 text-base">
                        { description }
                    </p>
                </div>
                <div className="px-4 py-4">
                    <p className="text-gray-700 text-base">
                        { agree }
                    </p>
                    <p className="text-gray-700 text-base">
                        { tag }
                    </p>
                    <p className="text-gray-700 text-base">
                        { date }
                    </p>

                </div>
                <div className="px-6 pt-4 pb-2">
                    <div className="flex flex-initial">
                        <div className="m-4 cursor-pointer">
                            <FaEdit onClick={ () => updateNote() } />
                        </div>
                        <div className="m-4 cursor-pointer">
                            <FaRegTrashAlt onClick={ () => handleDelete( _id ) } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItems;
