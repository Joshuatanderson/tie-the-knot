import React from 'react';
import PropTypes from 'prop-types';
import ConfirmedFilter from './ConfirmedFilter';
import Counter from './Counter';
import GuestList from './GuestList';

const MainContent = ({toggleFilter, isFiltered, numberConfirmed,
    numberInvited, numberUnconfirmed, toggleConfirmationAt, toggleEditingAt,
    guests, setNameAt, removeGuestAt, pendingGuest}) => {
    return(
       <div className="main">
        <div>
            <h2>Invitees</h2>
            <ConfirmedFilter
                toggleFilter = {toggleFilter}
                isFiltered = {isFiltered}
            />
        </div>
            <Counter 
                numberConfirmed = {numberConfirmed}
                numberInvited = {numberInvited}
                numberUnconfirmed = {numberUnconfirmed}
            />
        <GuestList 
            toggleConfirmationAt = {toggleConfirmationAt}
            toggleEditingAt = {toggleEditingAt}
            guests = {guests}
            setNameAt = {setNameAt}
            removeGuestAt = {removeGuestAt}
            pendingGuest = {pendingGuest}
            isFiltered = {isFiltered}
        />
    </div>
    );
}

MainContent.propTypes = {
        //for ConfirmedFilter
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,

        //for Counter
    numberConfirmed: PropTypes.number.isRequired,
    numberInvited: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,

    //for GuestList
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    guests: PropTypes.array.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired

}
export default MainContent;