import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({numberConfirmed, numberUnconfirmed, numberInvited}) => {
    return(
        <table className="counter">
                {/* The data in table comes from functions that scan the isConfirmed guest state */}
            <tbody>
                <tr>
                <td>Attending:</td>
                <td>{numberConfirmed}</td>
                </tr>
                <tr>
                <td>Unconfirmed:</td>
                <td>{numberUnconfirmed}</td>
                </tr>
                <tr>
                <td>Total:</td>
                <td>{numberInvited}</td>
                </tr>
            </tbody>
        </table>
    );
}

Counter.propTypes = {
    numberConfirmed: PropTypes.number.isRequired,
    numberInvited: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
}

export default Counter;