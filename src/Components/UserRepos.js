import React from 'react';
import Card from './Card';

const UserRepos = (props) => {
  const { repos } = props;

  if(!repos)
    return null;

  const repoList = repos.map((repo,i) => {
    const {
       name,
       description,
       git_url,
       stargazers_count,
       forks,
       open_issues,
       size
      } = repo;

return (
  <Card
    key={i}
    name={name}
    description={description}
    gitUrl={git_url}
    stars={stargazers_count}
    forks={forks}
    issues={open_issues}
    repositorySize={size}
    />
    );
  });

  return (
    <div>
      {repoList}
    </div>
  );
}

export default UserRepos;
