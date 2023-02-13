import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products: productReducer,
});

let initState = {};

const middleWere = [thunk];

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleWere)));

export default store;

