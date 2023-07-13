import AppRoutes from "./routes/AppRoutes";
import { UserContextProvider } from "./context/useUserContext";

function App() {
  //test

  return (
    <>
      {/* <HomePageContainer/>
      <LoginScreen/>
      <Registro/>  */}
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </>
  );
}

export default App;
