import { LOAD_USER, LOGIN, LOGOUT, REGISTER } from "./auth.types";

export const login = async (data) => {
  
  console.log(data);
  return {
    type: LOGIN,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const register = async (data) => {
  console.log(data);
  // let data1;
  // try {
  //   const response = await fetch("http://localhost:8080/signin", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   data1 = await response.json();
  //   console.log(data1);
  // } catch (error) {}
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
