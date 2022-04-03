import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Expense from "../Pages/Expense/Expense";
import Income from "../Pages/Income/Income";
import Students from "../Pages/Students/Students";
import HomePage from "../UserPages/HomePage";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import About from "../UserPages/About";
import Feedback from "../UserPages/Feedback";
import Payment from "../UserPages/Payment";

const PrimaryRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adminDashboard" element={<Dashboard />} />
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/students" element={<Students />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default PrimaryRoute;
