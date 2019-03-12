import React from 'react';
import PropTypes from 'prop-types';

    //returns GuestName cards
const GuestName = props => {
        //if they are editing, return an input
    
    if(props.isEditing){
        return(
            <input 
                type="text" 
                value = {props.name} 
                onChange = {props.handleNameEdits}
            />
        );
    }
    return(
        <span>
            {/* props.children returns all of the props as content 
            Use it when you wish to render the props, unchanged.  This lets each instance potentially have different content*/}

            {props.name}
        </span>
    );
}

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
}
export default GuestName;