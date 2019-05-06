import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import ModalReducer from "./modalReducer";
import AddressReducer from "./addressReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: ModalReducer,
  addressState: AddressReducer
})