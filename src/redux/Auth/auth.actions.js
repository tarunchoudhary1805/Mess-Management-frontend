import { LOAD_USER, LOGIN, LOGOUT, REGISTER } from "./auth.types";

export const login = () => {
  return {
    type: LOGIN,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const register = (data) => {
  console.log(data);
  return {
    type: REGISTER,
    payload: data,
  };
};

export const loadUser = () => {
  return {
    type: LOAD_USER,
  };
};
