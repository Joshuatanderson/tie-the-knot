import React from 'react';
import PropTypes from 'prop-types';

import GuestName from './GuestName'

    //returns guest cards
const Guest = ({id, removeSelf, name, isConfirmed, isEditing, handleToggleEditing, handleConfirmation, setName}) => {
    return(
        <li className="responded">
                {/* GuestName component */}
            <GuestName 
                isEditing = {isEditing}
                    //receives an event object, uses target.values
                handleNameEdits = {e => setName(e.target.value)}
                name = {name}
            >
                
            </GuestName>
            <label>
                    {/* onChange listens for changes in value */}
                <input onChange = {handleConfirmation} type="checkbox" checked = {isConfirmed} /> Confirmed
            </label>
                {/* binds func to onClick */}
            <button onClick = {handleToggleEditing}>
                    {/* ternary to define edit text */}
                {isEditing ? "save" : "edit"}
            </button>
            <button onClick = {removeSelf} >remove</button>
        </li>
    );
}


Guest.propTypes = {
    id: PropTypes.number.isRequired,
    isConfirmed: PropTypes.bool.isRequired,
    isEditing: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    handleConfirmation: PropTypes.func.isRequired,
    handleToggleEditing: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    removeSelf: PropTypes.func.isRequired
}
export default Guest;