import { Navigate, useLocation } from 'react-router-dom';
import { getToken } from '../../models/AuthModel';

const RequireAuth = ({ children }) => {
  const location = useLocation();

  if (!getToken()) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
