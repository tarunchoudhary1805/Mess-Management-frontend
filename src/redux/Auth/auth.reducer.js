// import { act } from "react-dom/test-utils";
import { LOGIN, LOGOUT, REGISTER, LOAD_USER } from "./auth.types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: localStorage.getItem("isAuthenticated"),
  user: localStorage.getItem("user"),
};
console.log(initialState);
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem(
        "isAuthenticated",
        action.payload.token ? true : false
      );
      return {
        ...state,
        isAuthenticated: action.payload.token ? true : false,
        token: action.payload.token,
        user: action.payload.user,
      };

    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: "",
        token: "",
        user: "",
      };
    case REGISTER:
      console.log(action.payload);
      return {
        ...state,
        isAuthenticated: action.payload.token ? true : false,
        token: action.payload.token,
        user: action.payload.data,
      };
    case LOAD_USER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
