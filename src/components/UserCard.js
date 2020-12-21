import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Badge from './Badge';

const UserCard = (user) => {

  return (
    <div>
      <h3>{user.userName}</h3>
      <Avatar imageLink={user.imageLink}/>
      <span>{user.rank}</span>
      <Badge number={user.score}/>
    </div>

  )
};

UserCard.propTypes = {
  userName: PropTypes.string.isRequired,
  rank: PropTypes.string,
  score: PropTypes.number,
  imageLink: PropTypes.string
}

export default UserCard;