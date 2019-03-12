//must be named index.js since it's the parent of the folder

import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm'

const Header = ({handleInput, handleSubmit, currentInput}) => {
    return(
        <header>
            <h1>Tie the Knot</h1>
            <p>Add Guests Below</p>
            <GuestInputForm
                handleInput = {handleInput}
                currentInput = {currentInput}
                handleSubmit = {handleSubmit}
            />
        </header>
    );
}

Header.propTypes = {
    handleInput: PropTypes.func.isRequired,
    currentInput: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Header