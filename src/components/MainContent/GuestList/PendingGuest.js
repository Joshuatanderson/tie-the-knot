import React from 'react';
import PropTypes from 'prop-types';

    //returns pendingGuest cards
const pendingGuest = ({name}) => {
        //if props.name exists, render a pending card
        //empty strings are falsy in JS
    if (name){
        return(
            <li className = "pending">
                <span>
                    {name}
                </span>
            </li>
        );
    }
        //if there is no name, return null
    return null;
}


pendingGuest.propTypes = {
    name: PropTypes.string.isRequired
}

export default pendingGuest;