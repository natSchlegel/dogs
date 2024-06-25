import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { login } = React.useContext(UserContext);
  if (login === true) {
    return children;
  } else if (login === false) return <Navigate to="/login" />;
  else {
    return <></>;
  }
};

export default ProtectedRoute;
