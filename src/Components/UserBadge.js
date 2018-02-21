import React from 'react';

const UserBadge = (props) => {
  const { avatar_url, login, followers, following } = props.user;
  const { avatar } = Style;

  if (!props.user)
    return null;

  return (
    <div>
      <img className="img-thumbnail" alt="thumbnail" style={avatar} src={avatar_url} />
      <div>
        <h6>{login}</h6>
        <p>{followers} followers </p>
        <p>{following} following </p>
        </div>
      </div>
  );
}

const Style = {
  avatar: {
    width: 220,
    height: 220
  }
}

export default UserBadge;
