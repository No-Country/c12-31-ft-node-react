import AppRoutes from './routes/AppRoutes'
import { UserContextProvider } from './context/useUserContext'
/* import PagWelcome from './components/PagWelcome'
import FinTransaccion from './components/FinTransaccion' */

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
{/*       <PagWelcome/> */}
  {/*     <FinTransaccion/> */}
    </>
  );
}

export default App;
