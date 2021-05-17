import {combineReducers} from 'redux';
import {StoreType} from "../../types";
import cartReducer from "./CartReducer";
import currencyReducer from "./CurrencyReducer";
import userReducer from './UserReducer';


const rootReducer = combineReducers<StoreType>({
    currency: currencyReducer,
    cart: cartReducer,
    userSession: userReducer
});

export default rootReducer;
