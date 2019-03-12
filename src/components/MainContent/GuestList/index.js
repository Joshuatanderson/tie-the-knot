import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

    //returns guest cards
const GuestList = ({pendingGuest, removeGuestAt, isFiltered, guests, toggleEditingAt, toggleConfirmationAt, setNameAt}) => {
    return(
        <ul>
                {/* calls pending guest component */}
            <PendingGuest name = {pendingGuest} />
                {/* filters guest array */}
            {guests.filter((guest) => {
                    //if not filtering, or guest is confirmed, guest passes the filter (by returning t)
                return !isFiltered || guest.isConfirmed;
            })
                //map state to cards
            .map((guest, index) =>
                <Guest 
                    id = {guest.id}
                        //this passes the index value into this function via a closure
                    handleConfirmation = {() => toggleConfirmationAt(guest.id)}
                        //does the same with the edit function
                    handleToggleEditing = {() => toggleEditingAt(guest.id)}
                    name = {guest.name}
                        //great way to make id from array
                    key = {guest.id}
                    isConfirmed = {guest.isConfirmed}
                    isEditing = {guest.isEditing}
                    setName = {text => setNameAt(text, guest.id)}
                        //the empty parameters to pass to this on call prevents the event from being passed
                        //the index parameter is included via a closure
                    removeSelf = {() => removeGuestAt(guest.id)}
                />
            )}
        </ul>
    );
}

    //verifying proptypes
GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}
export default GuestList;