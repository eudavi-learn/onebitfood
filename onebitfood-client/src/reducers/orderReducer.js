import { LOAD_ORDER } from "../actions/action_types";

export default (state = { order: [] }, action) => {
  switch(action.type) {
    case LOAD_ORDER:
      return { 
        ...state,
        order: action.order
      }
    default:
      return state
  }
}