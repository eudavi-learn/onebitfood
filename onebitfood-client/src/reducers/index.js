import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import orderReducer from "./orderReducer";
import modalReducer from "./modalReducer";
import addressReducer from "./addressReducer";
import newOrderReducer from "./newOrderReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  orderState: orderReducer,
  modalState: modalReducer,
  addressState: addressReducer,
  newOrderState: newOrderReducer
})