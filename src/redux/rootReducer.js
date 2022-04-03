import { combineReducers } from "redux";

import authReducer from "./Auth/auth.reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
});

export default rootReducer;
