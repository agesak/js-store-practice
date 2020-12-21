import React from 'react';
import PropTypes from 'prop-types';

const Avatar = (props) => {
  return (
    <img className="border border-success" src={props.imageLink} alt=""/>
  );
}

Avatar.propTypes = {
  imageLink: PropTypes.string.isRequired
}


export default Avatar;