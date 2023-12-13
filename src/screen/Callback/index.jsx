import queryString from "query-string";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthentication } from "../../providers/AuthenticationProvider";
import httpService from "../../services/httpServices";

const Callback = () => {
  const location = useLocation().search;
  const navigate = useNavigate();
  const { setIsLogged } = useAuthentication();

  useEffect(() => {
    const token = queryString.parse(location)?.token;
    if (token) {
      setIsLogged(true);
      httpService.saveTokenToLocalStorage(token);
      httpService.attachTokenToHeader(token);
      navigate("/");
    }
  }, [location]);
};

export default Callback;
