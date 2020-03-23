import React from 'react'

const Card = ({name, username, email}) => {
  return(
    <div className='bg-light-green dib br3 pa3 ma2 grow tc bw1 shadow-5'>
      <img alt="robot" src={`https://robohash.org/${username}?200x200`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )    
}

export default Card