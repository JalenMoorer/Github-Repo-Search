import React from 'react';

const Card = (props) => {
  const {  name, description, gitUrl, stars, forks, issues, repositorySize } = props;
  return (
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{name}</h4>
        <a href={gitUrl}>{gitUrl}</a>
        <p className="card-text">{description}</p>
        <ul>
          <li>Stars {stars}</li>
          <li>forks {forks}</li>
          <li>Issues {issues}</li>
          <li>Repository Size {repositorySize}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
