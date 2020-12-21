import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

const Avatar = (props) => {
  return (
    <img className="avatar-img" src={props.imageLink} alt=""/>
  );
}

Avatar.propTypes = {
  imageLink: PropTypes.string.isRequired
}


export default Avatar;