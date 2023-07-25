import { createContext, useState, useEffect } from "react";

// Crear el contexto de usuario
const UserContext = createContext();

// Proveedor del contexto
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user === null) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const login = (userData) => {
    setUser({ ...userData });
  };

  const logout = () => {
    setUser(null);
  };


  // STATES DE PAGOS 
  const [selectedEmpresa, setSelectedEmpresa] = useState(null);
  const [inputNcuenta, setInputNcuenta] = useState("");
  const [importePago, setImportePago] = useState(0);



  const userContextValue = {
    user,
    login,
    logout,
    selectedEmpresa,
    setSelectedEmpresa,
    inputNcuenta,
    setInputNcuenta,
    importePago,
    setImportePago

  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
