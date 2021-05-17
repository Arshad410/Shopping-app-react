import { Action } from "redux";
import CurrencyActions from "../actions/CurrencyActions";

type IAction = {
  code: string;
} & Action;
function currencyReducer(store = "INR", action: IAction) {
  switch (action.type) {
    case CurrencyActions.ActionTypes.UPDATE_CURRENCY:
      return action.code;
    default:
      return store;
  }
};
export default currencyReducer;
