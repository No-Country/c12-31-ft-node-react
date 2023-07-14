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
import ServicioPagar from "../components/Pagos/ServicioPagar";
import ContactoNuevo from "../components/Transferencias/ContactoNuevo";
import Empresa from "../components/Pagos/Empresa";
import { TransferenciasRecibidas } from "../components/Transferencias/TransferenciasRecibidas";

function AppRoutes() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContainer />} />
        {/* <NavBar /> */}
        {/* LOGUEO  */}
        <Route element={<ProtectedRoute isAllowed={!user} />}>
          <Route path="/register" element={<Registro />} />
          <Route path="/login" element={<LoginScreen />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={user} />}>
          {/* INICIO  */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* TRANSFERENCIAS  */}
          <Route path="/transferencias" element={<TrasferenciasScreen />} />
          <Route path="/transferencias1" element={<TransferirDinero />} />
          <Route path="/transferencias2" element={<AQuien />} />
          <Route path="/contactoNuevo" element={<ContactoNuevo />} />
          <Route path="/recibidas" element={<TransferenciasRecibidas />} />

          {/* PAGOS  */}
          <Route path="/servicioPagar" element={<ServicioPagar />} />
          <Route path="/empresa" element={<Empresa />} />
        </Route>
        <Route path="*" element={<h1>404 pagina no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
