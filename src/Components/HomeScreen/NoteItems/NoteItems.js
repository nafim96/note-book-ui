import React from 'react';
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const NoteItems = ( props ) =>
{

    const { note, updateNote, deletesNote, showAlert } = props;



    return (
        <div className="mx-2 sm:my-4 sm:m-auto md:m-4 md:my-4">
            <div className="max-w-sm  rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{ note.title }</div>
                    <p className="text-gray-700 text-base">
                        { note.description }
                    </p>
                </div>
                <div className="px-4 py-4">
                    <p className="text-gray-700 text-base">
                        { note.tag }
                    </p>
                    <p className="text-gray-700 text-base">
                        { note.date }
                    </p>

                </div>
                <div className="px-6 pt-4 pb-2">
                    <div className="flex flex-initial">
                        <div className="m-4 cursor-pointer">
                            <FaEdit onClick={ () => updateNote( note ) } />
                        </div>
                        <div className="m-4 cursor-pointer">
                            <FaRegTrashAlt onClick={ () => deletesNote( note._id ) } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteItems;
