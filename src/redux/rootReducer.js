import { combineReducers } from "redux";

import authReducer from "./Auth/auth.reducer";
import adminReducer from "./Admin/admin.reducer";

const rootReducer = combineReducers({
  authReducer: authReducer,
  adminReducer: adminReducer,
});

export default rootReducer;
