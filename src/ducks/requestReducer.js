import { REQUEST_ROBOTS_FAILED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS } from './types';

const initialState = {
  isPending: false,
  robots:[],
  error: ''
}

export const requestRobots = (state = initialState, action={})=>{
  const { type, payload } = action
  switch(type){
    case REQUEST_ROBOTS_PENDING:
      return{
        ...state,
        isPending: true
      };
    case REQUEST_ROBOTS_SUCCESS:
      return{
        ...state,
        isPending: false,
        robots: payload
    };
    case REQUEST_ROBOTS_FAILED:{
      return{
        ...state,
        isPending: false,
        error: payload
      }
    }
    default:
      return state
  }
}