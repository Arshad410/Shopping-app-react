import { ProductType } from "../../types";
import { CartType } from "../../types";

const ActionTypes = {
  ADD_TO_CART: "[Cart] Add to cart",
  REMOVE_FROM_CART: "[Cart] Remove from cart",
  INCREMENT_QTY: "[Cart] Increment",
  DECREMENT_QTY: "[Cart] Decrement"
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

const incrementQty = (qtyId: number) => {
    return {
        type: ActionTypes.INCREMENT_QTY,
        qtyId,
    }
};

const decrementQty = (id: number) => {
    return {
        type: ActionTypes.DECREMENT_QTY,
        id,
    }
}

export default { ActionTypes, addToCart, removeFromCart, incrementQty, decrementQty };
