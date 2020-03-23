import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { requestRobots, setSearchField } from '../ducks/actions';
import CardList from './CardList';
import ErrorBoundry from './ErrorBoundry';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

const Robots = props => {
  const [filteredRobots, setFilteredRobots] = useState([]);

  const handleInput = (e) => {
    props.onSearchField(e.target.value)
  }
  const {onRequestRobots, robots, isPending, error} = props
  useEffect(() => {
    onRequestRobots()
  },[onRequestRobots])

  useEffect(() => {
   const filtered = robots.filter(robot => robot.name.toLocaleLowerCase().includes(props.searchField.toLocaleLowerCase()))
   setFilteredRobots(filtered)
  }, [robots, props.searchField])


  return(
    error 
    ? <h1>Oops!</h1> 
    : (
    <>
      <SearchBox handleInput={handleInput} />
      {isPending 
      ? <h1 className="f2">Loading...</h1>
      : <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>  
      }
    </>)
  )
}

const mapStateToProps = state =>({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error
})
const mapDispatchToProps = dispatch =>({
  onSearchField: event => dispatch(setSearchField(event)),
  onRequestRobots: () => dispatch(requestRobots())
})
 export default connect(mapStateToProps, mapDispatchToProps)(Robots)