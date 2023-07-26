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

import { TransferenciasRealizadas } from "../components/Transferencias/TransferenciasRealizadas";
import PagWelcome from "../components/PagWelcome";
import FinTranferencia from "../components/Transferencias/FinTranferencia";
import FinPagos from "../components/Pagos/FinPagos";
import ResumenPago from "../components/Pagos/ResumenPago";
import { AjustesScreen } from "../components/AjustesScreen/AjustesScreen";
import IngresarDinero from "../components/IngresarDinero/IngresarDinero";
import DenunciarTarjeta from "../components/tarjetaDebito/DenunciarTarjeta";
import LimiteDiario from "../components/tarjetaDebito/LimiteDiario";
import PaginaError from "../components/Error/PaginaError";
import { Movimientos } from "../components/Movimientos";
import { TransferenciaCelular } from "../components/Transferencias/TransferenciaCelular";
import AvisoViaje from "../components/tarjetaDebito/AvisoViaje";


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
          <Route path="/pagWelcome" element={<PagWelcome/>} />
          <Route path="/dashboard" element={<Dashboard />} />


          {/* TRANSFERENCIAS  */}
          <Route path="/transferencias" element={<TrasferenciasScreen />} />
          <Route path="/transferencias1" element={<TransferirDinero />} />
          <Route path="/transferencias2" element={<AQuien />} />
          <Route path="/contactoNuevo" element={<ContactoNuevo />} />
          <Route path="/realizadas" element={<TransferenciasRealizadas />} />
          <Route path="/finTransferencia" element={<FinTranferencia />} />
          <Route path="/celular" element={<TransferenciaCelular />} />

          {/* PAGOS  */}
          <Route path="/servicioPagar" element={<ServicioPagar />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/resumenPagos" element={<ResumenPago />} />
          <Route path="/finPagos" element={<FinPagos />} />

          {/* MOVIMIENTOS */}
          <Route path="/movimientos" element={<Movimientos />} />

          {/* AJUSTES */}
          <Route path="/ajustes" element={<AjustesScreen />} />

          {/* ACCIONES TARJETA */}
          <Route path="/denunciarTarjeta" element={<DenunciarTarjeta/>} />
          <Route path="/limiteDiario" element={<LimiteDiario/>} />
          <Route path="/avisoViaje" element={<AvisoViaje/>} />



          {/* INGRESAR DINERO  */}
          <Route path="/ingresarDinero" element={<IngresarDinero />} />

        </Route>
        <Route path="*" element={<PaginaError/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
