import { CartType, ProductType } from "../../types";
import { Action } from "redux";
import CartActions from "../actions/CartActions";
type IAction = {
  product: ProductType;
  id: number;
  qtyId: number
} & Action;
function cartReducer(store: CartType[] = [], action: IAction) {
  switch (action.type) {
    case CartActions.ActionTypes.ADD_TO_CART:
      return [...store, { ...action.product, productQty: 1 }];
    case CartActions.ActionTypes.REMOVE_FROM_CART:
      return store.filter((prod) => prod.productId !== action.id);
    case CartActions.ActionTypes.INCREMENT_QTY:
        return (store.map((order) => {
            if(order.productId === action.qtyId) {
                order.productQty++
            }
            return order
        }));
    case CartActions.ActionTypes.DECREMENT_QTY:
        return (store.map((order) => {
            if((order.productQty>1)&&(order.productId === action.id)) {
                order.productQty--
            }
            return order
        }))
    default:
      return store;
  }
}
export default cartReducer;
