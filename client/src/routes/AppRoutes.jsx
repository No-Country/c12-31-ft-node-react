import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ProtectedRoute } from "./ProtectedRouter";
import Registro from "../components/Registro/Registro";
import LoginScreen from "../components/LoginScreen/LoginScreen";
import HomePageContainer from "../components/container/HomePageContainer";
import { UserContext } from "../context/useUserContext";
import { Dashboard } from "../components/Dashboard";
import { TrasferenciasScreen } from "../components/Transferencias/TrasferenciasScreen";
import { TransferirDinero } from "../components/Transferencias/TransferirDinero";
import { AQuien } from "../components/Transferencias/AQuien";

function AppRoutes() {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        <Route element={<ProtectedRoute isAllowed={!isLoggedIn}/>}>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transferencias" element={<TrasferenciasScreen />} />
        <Route path="/transferencias1" element={<TransferirDinero />} />
        <Route path="/transferencias2" element={<AQuien />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default AppRoutes;
