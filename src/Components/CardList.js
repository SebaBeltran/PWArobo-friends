import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  console.log(robots)
  const mappedRobots = robots.map(robot => {
    const {id, name, username, email} = robot
    return(
      <Card
        key={id}
        name={name}
        username={username}
        email={email}
      />
    )
  })
  return (
    <>
      {mappedRobots}
    </>
  );
}

export default CardList;
