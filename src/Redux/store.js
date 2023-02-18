import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productDetailReducer, productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
    products: productReducer,
    productDetail: productDetailReducer,
    user: userReducer
});

let initState = {};

const middleWere = [thunk];

const store = createStore(reducer, initState, composeWithDevTools(applyMiddleware(...middleWere)));

export default store;

