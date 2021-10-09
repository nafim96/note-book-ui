import React, { useContext, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm } from "react-hook-form";
import { NoteContext } from '../../../context/Notes/NoteContext';

const AddNote = () =>
{
    const [ checking, setChecking ] = useState( true );
    const context = useContext( NoteContext );
    const { addNote } = context;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>
    {
        data.checkbox ? setChecking( false ) : setChecking( true );

        const notes = {
            title: data.title,
            description: data.description,
            tag: data.tag,
        };
        addNote( notes );
    };
    return (
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">

            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Add Your Daily Notes</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={ handleSubmit( onSubmit ) }>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="title">
                                Title
                            </label>

                            <input
                                id="title"
                                type="text"
                                autoComplete="title"
                                { ...register( "title", { required: true } ) }
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Title"
                            />
                            { errors.title && <span className="text-red-500">Title is required</span> }
                        </div>
                        <div>
                            <label htmlFor="description">
                                Description
                            </label>

                            <textarea
                                cols="30"
                                rows="10"
                                id="description"
                                type="text"
                                autoComplete="description"
                                { ...register( "description", { required: true } ) }
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Description"
                            ></textarea>
                            { errors.description && <span className="text-red-500">Description is required</span> }
                        </div>
                        <div>
                            <label htmlFor="tag">
                                Tag
                            </label>

                            <input
                                id="tag"
                                type="text"
                                autoComplete="tag"
                                { ...register( "tag", { required: true } ) }
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Tag"
                            />
                            { errors.tag && <span className="text-red-500">Tag is required</span> }
                        </div>

                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                onClick={ () => setChecking( false ) }
                                id="check-out"
                                type="checkbox"
                                { ...register( "checkbox" ) }
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="check-out" className="ml-2 block text-sm text-gray-900">
                                Check Out
                            </label>
                        </div>
                    </div>

                    <div>
                        <button

                            type="submit"
                            disabled={ checking }
                            className={ `group relative w-full  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` }
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                            Note Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
