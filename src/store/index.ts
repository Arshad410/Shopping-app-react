import { createStore } from "redux";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
const ecommStore = createStore(rootReducer, composeWithDevTools());

export default ecommStore;