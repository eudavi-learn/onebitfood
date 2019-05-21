import { LOAD_ORDER } from "./action_types";
import api from "../services/api";

export const loadOrder = (id) => async (dispatch) => {
  let response = await api.loadOrder(id);
  dispatch({
    type: LOAD_ORDER,
    order: response.data.order
  });
}