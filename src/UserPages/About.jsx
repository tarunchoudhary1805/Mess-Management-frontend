import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.authReducer);
  console.log(state);

  if (!state.isAuthenticated) {
    return <Navigate replace to="/" />;
  } else {
    return <div>About</div>;
  }
};
export default About;
