import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = compose(composeWithDevTools(), applyMiddleware(thunk));
const initialState = {};

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;
