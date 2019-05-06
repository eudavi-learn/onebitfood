import { SET_ADDRESS } from "./action_types";

export const setAddress = (address) => async (dispatch) => {
  dispatch({
    type: SET_ADDRESS,
    address: address
  });
}