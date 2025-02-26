import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/dashboard/Home";
import Income from "./pages/dashboard/Income";
import Expense from "./pages/dashboard/Expense";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/sign-in" exact element={<SignIn />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/dashboard" exact element={<Home />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expense" exact element={<Expense />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;

const Root = () => {

  // check if user is authenticated by checking if token is in local storage
  const isAuthenticated = !!localStorage.getItem("token");

  // return redirect to dashboard if authenticated, else redirect to sign-in
  return isAuthenticated ?  (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/sign-in" />
  );
}