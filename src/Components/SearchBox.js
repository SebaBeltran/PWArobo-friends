import React from 'react'

const SearchBox = ({handleInput}) => {
return (
  <div className="pa2">
    <input 
    className="pa3 ba b--green bg-lightest-blue"
    placeholder="search robots" 
    type="search"
    onChange={handleInput}
    />
  </div>
)
}

export default SearchBox