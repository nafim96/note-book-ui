import React from 'react';


const Alert = ( props ) =>
{

    return (
        <div className="h-20">
            { props.alert && <div className={ `flex items-center bg-${ props.alert.type }-500 text-white text-sm font-bold px-4 py-3` } role="alert">

                <p>{ props.alert.msg }</p>
            </div> }
        </div>
    );
};

export default Alert;
