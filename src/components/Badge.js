import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => {

  return (
    <div>
      {props.number}
    </div>
  )
};
// Bonus: have the circle change color based on the value of the number (e.g. red if it's < 50, green otherwise).

Badge.propTypes = {
  number: PropTypes.number.isRequired
}

export default Badge;