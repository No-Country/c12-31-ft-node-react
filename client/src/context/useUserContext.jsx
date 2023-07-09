import { createContext, useState } from 'react';

// Crear el contexto de usuario
const UserContext = createContext();

// Proveedor del contexto
const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const userContextValue = {
    isLoggedIn,
    login,
    logout
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
