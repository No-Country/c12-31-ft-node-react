import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import { ProtectedRoute } from "./ProtectedRouter";
import Registro from "../components/Registro/Registro";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import HomePageContainer from "../components/container/HomePageContainer";
import NavBar from "../components/layout/NavBar";
import { UserContext } from "../context/useUserContext";
import { Dashboard } from "../components/Dashboard";

function AppRoutes() {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route element={<ProtectedRoute isAllowed={!isLoggedIn} />}>
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
