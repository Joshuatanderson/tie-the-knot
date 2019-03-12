import React from 'react';
import PropTypes from 'prop-types';

    //exports the confirmed filter to app.js
const ConfirmedFilter = ({toggleFilter, isFiltered}) => {
    return(
        <label>
            <input 
                type="checkbox" 
                    //runs toggle filter function when checked
                onChange = {toggleFilter}
                    //updates UI to match state
                checked = {isFiltered}
            /> Hide those who haven't responded
        </label>
    );
}

ConfirmedFilter.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired
}

export default ConfirmedFilter;