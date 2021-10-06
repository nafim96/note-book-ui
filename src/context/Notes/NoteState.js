import React from 'react';
import { NoteContext } from './NoteContext';

const noteResult = {
    "note": [
        {
            "_id": "615c3753d0e95a0427353380",
            "user": "615c36d4d0e95a042735337c",
            "title": "I'm Anupoma Nishat",
            "description": "I'm very Good",
            "tag": "wife of nasir",
            "date": "2021-10-05T11:30:27.986Z",
            "__v": 0
        },
        {
            "_id": "615d881049e527f16a5bfd19",
            "user": "615c36d4d0e95a042735337c",
            "title": "hello-1",
            "description": "Every programmer is brilliant and they are very secure and handsome guy......",
            "tag": "programmer life",
            "date": "2021-10-06T11:27:12.844Z",
            "__v": 0
        },
        {
            "_id": "615d881649e527f16a5bfd1b",
            "user": "615c36d4d0e95a042735337c",
            "title": "hello-2",
            "description": "Every programmer is brilliant and they are very secure and handsome guy......",
            "tag": "programmer life",
            "date": "2021-10-06T11:27:18.084Z",
            "__v": 0
        },
        {
            "_id": "615d881d49e527f16a5bfd1d",
            "user": "615c36d4d0e95a042735337c",
            "title": "hello-3",
            "description": "Every programmer is brilliant and they are very secure and handsome guy......",
            "tag": "programmer life",
            "date": "2021-10-06T11:27:25.059Z",
            "__v": 0
        },
        {
            "_id": "615d882349e527f16a5bfd1f",
            "user": "615c36d4d0e95a042735337c",
            "title": "hello-4",
            "description": "Every programmer is brilliant and they are very secure and handsome guy......",
            "tag": "programmer life",
            "date": "2021-10-06T11:27:31.026Z",
            "__v": 0
        },
        {
            "_id": "615d882849e527f16a5bfd21",
            "user": "615c36d4d0e95a042735337c",
            "title": "hello-5",
            "description": "Every programmer is brilliant and they are very secure and handsome guy......",
            "tag": "programmer life",
            "date": "2021-10-06T11:27:36.612Z",
            "__v": 0
        }
    ]
};

const NoteState = ( props ) =>
{
    const [ state, setState ] = React.useState( noteResult.note );
    return (
        <NoteContext.Provider value={ { state, setState } }>
            { props.children }
        </NoteContext.Provider>
    );
};

export default NoteState;
