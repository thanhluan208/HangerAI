import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import httpService from "../services/httpServices";

const AuthenticationContext = createContext({
  islogged: false,
  setIsLogged: () => {},
  handleLogin: () => {},
  handleLogout: () => {},
});

export const useAuthentication = () => {
  return useContext(AuthenticationContext);
};

const AuthenticationProvider = ({ children }) => {
  //! State
  const token = httpService.getTokenFromLocalStorage("token");
  const [islogged, setIsLogged] = useState(!!token);

  //! Function
  const handleLogin = useCallback((payload) => {
    console.log("payload", payload);
    setIsLogged(true);
    httpService.saveTokenToLocalStorage("token");
  }, []);

  const handleLogout = useCallback(() => {
    setIsLogged(false);
    httpService.removeTokenFromLocalStorage("token");
  }, []);

  //! Render
  const value = useMemo(() => {
    return {
      islogged,
      setIsLogged,
      handleLogin,
      handleLogout,
    };
  }, [islogged, setIsLogged, handleLogin, handleLogout]);

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
