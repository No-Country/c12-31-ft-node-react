
import LoginScreen from './components/LoginScreen/LoginScreen'
import Registro from './components/Registro/Registro' 
import HomePageContainer from './components/container/HomePageContainer'
import AppRoutes from './routes/AppRoutes'
import { UserContextProvider } from './context/useUserContext'


function App() {
  
  return (
    <>
      {/* <HomePageContainer/>
      <LoginScreen/>
      <Registro/>  */}
      <UserContextProvider>
      <AppRoutes />
      </UserContextProvider>
    </>
  )
}

export default App

