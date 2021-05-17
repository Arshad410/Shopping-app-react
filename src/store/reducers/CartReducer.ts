import { CartType, ProductType } from "../../types";
import { Action } from "redux";
import CartActions from "../actions/CartActions";
type IAction = {
  product: ProductType;
  id: number;
} & Action;
function cartReducer(store: CartType[] = [], action: IAction) {
  switch (action.type) {
    case CartActions.ActionTypes.ADD_TO_CART:
      return [...store, { ...action.product, productQty: 1 }];
    case CartActions.ActionTypes.REMOVE_FROM_CART:
      return store.filter((prod) => prod.productId !== action.id);
    default:
      return store;
  }
}
export default cartReducer;
