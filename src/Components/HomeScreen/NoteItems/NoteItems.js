import React from 'react';

const NoteItems = ( props ) =>
{
    const { value } = props;
    return (
        <div className="container border-2 rounded-lg border-red-500 m-2">
            <h1>Title: { value.title }</h1>
            <p>Description
                : { value.description }</p>
            <p>Tag: { value.tag }</p>
            <p>Agree:{ value.agree ? "Yes" : "No" }</p>
            <p>Date: { value.date }</p>
        </div>
    );
};

export default NoteItems;
