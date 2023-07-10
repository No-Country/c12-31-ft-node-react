import AppRoutes from './routes/AppRoutes'
import { UserContextProvider } from './context/useUserContext'
import PagWelcome from './components/PagWelcome'

function App() {

  return (
    <>
      {/* <HomePageContainer/>
      <LoginScreen/>
      <Registro/>  */}
     {/*  <UserContextProvider>
        <AppRoutes />
      </UserContextProvider> */}
      <PagWelcome/>
    </>
  )
}

export default App
