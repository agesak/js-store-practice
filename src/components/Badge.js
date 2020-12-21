import React from 'react';
import PropTypes from 'prop-types';

const Badge = (props) => {

  return (
    // Bonus: have the circle change color based on the value of the number (e.g. red if it's < 50, green otherwise).
    <div className={props.number < 50 ? "badge badge-danger" : "badge badge-success"}>
      {props.number}
    </div>
  )
};


Badge.propTypes = {
  number: PropTypes.number.isRequired
}

export default Badge;