import { LOGIN, LOGOUT, REGISTER, LOAD_USER } from "./auth.types";

const initialState = {
  token: "",
  isAuthenticated: "",
  user: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
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
        user: action.payload,
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
