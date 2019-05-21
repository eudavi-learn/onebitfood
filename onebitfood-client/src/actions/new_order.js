import { ADD_ORDER_ITEM } from "./action_types";
import { REMOVE_ORDER_ITEM } from "./action_types";

export const addOrderItem = (restaurant, product, quantity, comment) => {
  return {
    type: ADD_ORDER_ITEM,
    restaurant: restaurant,
    product: product,
    quantity: quantity,
    comment: comment
  }
}

export const removeOrderItem = (orderItem) => {
  return {
    type: REMOVE_ORDER_ITEM,
    orderItem: orderItem
  }
}