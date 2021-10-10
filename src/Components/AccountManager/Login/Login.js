import React, { useContext } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useForm } from "react-hook-form";
import { NoteContext } from '../../../context/Notes/NoteContext';
import { useHistory } from 'react-router-dom';

const Login = ( { showAlert } ) =>
{
    let history = useHistory();
    const context = useContext( NoteContext );
    const { host } = context;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async ( data ) =>
    {
        const response = await fetch( `${ host }api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify( { email: data.email, password: data.password } )
        } );
        const json = await response.json();
        if ( json.success )
        {
            // Save the auth Token and redirects
            localStorage.setItem( "token", json.userToken );
            history.push( "/" );
            showAlert( "Successfully Login", "green" );
        } else
        {
            showAlert( "Invalid Credential", "red" );
        }
        console.log( json );
    };


    return (
        <div className="container">
            <div className="w-full h-screen flex items-center justify-center bg-gray-800">
                <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
                    <label className="font-light text-4xl mb-4">Note<span className="font-bold">Book Login</span></label>
                    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8">
                            <form className="mt-8 space-y-6" onSubmit={ handleSubmit( onSubmit ) }>
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="rounded-md shadow-sm -space-y-px">
                                    <div>
                                        <label htmlFor="email">
                                            Email
                                        </label>

                                        <input
                                            id="email"
                                            type="email"
                                            { ...register( "email", { required: true } ) }
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Email"
                                        />
                                        { errors.email && <span className="text-red-500">Email is required</span> }
                                    </div>
                                    <div>
                                        <label htmlFor="password">
                                            Password
                                        </label>

                                        <input
                                            id="password"
                                            type="password"
                                            { ...register( "password", { required: true } ) }
                                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="password"
                                        />
                                        { errors.password && <span className="text-red-500">Password is required</span> }
                                    </div>


                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className={ `group relative w-full  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` }
                                    >
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                        </span>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
