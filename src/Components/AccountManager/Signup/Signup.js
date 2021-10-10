import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NoteContext } from '../../../context/Notes/NoteContext';
import { useHistory } from 'react-router-dom';

const Signup = ( { showAlert } ) =>
{

    let history = useHistory();
    const context = useContext( NoteContext );
    const { host } = context;
    const [ check, setCheck ] = useState( true );
    const [ credential, setCredential ] = useState( { name: "", email: "", password: "", cpassword: "" } );
    const { register, handleSubmit, formState: { errors } } = useForm();



    const onSubmit = async ( data ) =>
    {
        setCredential( data );
        if ( credential )
        {
            const { name, email, password } = credential;
            const response = await fetch( `${ host }api/auth/create`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify( { name, email, password } )
            } );
            const json = await response.json();
            if ( json.success )
            {
                // Save the auth Token and redirects
                localStorage.setItem( "token", json.userToken );
                history.push( "/" );
                showAlert( "User Successfully Created", "green" );
            } else
            {
                showAlert( "Use valid Credential", "yellow" );
            }
            console.log( json );
        }


    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
            <div className="bg-white p-16 rounded shadow-2xl w-2/3">

                <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>

                <form className="mt-8 space-y-6" onSubmit={ handleSubmit( onSubmit ) }>

                    <div>
                        <label htmlFor="name" className="block mb-1 font-bold text-gray-500">Name</label>
                        <input id="name" type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" { ...register( "name", { required: true } ) } minLength={ 3 } />
                        { errors.name && <span className="text-red-500">Name is required</span> }
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 font-bold text-gray-500">Email</label>
                        <input id="email" type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" { ...register( "email", { required: true } ) } />
                        { errors.email && <span className="text-red-500">Email is required</span> }
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-1 font-bold text-gray-500">Password</label>
                        <input id="password" type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" { ...register( "password", { required: true } ) } minLength={ 6 } />
                        { errors.password && <span className="text-red-500">Password is required</span> }
                    </div>
                    <div>
                        <label htmlFor="cpassword" className="block mb-1 font-bold text-gray-500">Confirm Password</label>
                        <input id="cpassword" type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" { ...register( "cpassword", { required: true } ) } minLength={ 6 } />
                        { errors.cpassword && <span className="text-red-500">Confirm Password is required</span> }
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="agree" onClick={ () => setCheck( false ) } />
                        <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
                    </div>

                    <button type="submit" disabled={ check } className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>
                </form>
            </div>

        </div>
    );
};

export default Signup;
