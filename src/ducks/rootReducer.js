import { combineReducers } from 'redux'
import { requestRobots } from './requestReducer'
import { searchRobots } from './searchReducer'

export const rootReducer = combineReducers({
  searchRobots,
  requestRobots
})