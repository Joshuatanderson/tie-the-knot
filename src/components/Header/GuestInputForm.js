import React from 'react';
import PropTypes from 'prop-types';

    //returns GuestInputForm form
const GuestInputForm = ({handleSubmit, currentInput, handleInput}) => {
    return(
            //handles submit
        <form onSubmit = {handleSubmit}>
            <input onChange = {handleInput} value = {currentInput} type="text" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
    );
}


GuestInputForm.propTypes = {
        //function to handle input, updating pending user state
    handleInput: PropTypes.func.isRequired,
    currentInput: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default GuestInputForm;