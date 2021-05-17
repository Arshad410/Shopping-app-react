import { ProductType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to cart",
  REMOVE_FROM_CART: "[Cart] Remove from cart",
};

const addToCart = (product: ProductType) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    product,
  };
};
const removeFromCart = (id: number) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    id,
  };
};
export default { ActionTypes, addToCart, removeFromCart };
