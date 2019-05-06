import { SET_ADDRESS } from "../actions/action_types";

export default (state = { address: [] }, action) => {
  switch(action.type) {
    case SET_ADDRESS:
      return { 
        ...state,
        address: action.address
      }
    default:
      return state
  }
}