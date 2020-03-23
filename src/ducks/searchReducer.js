import { CHANGE_SEARCH_FIELD } from './types';
const initialState = {
  searchField: '',
}

export const searchRobots = (state=initialState, action={}) => {
  const { type, payload } = action
  switch(type){
    case(CHANGE_SEARCH_FIELD):
      return(
        {...state,
          searchField: payload
        }
      );
    default: 
       return state
  }
}