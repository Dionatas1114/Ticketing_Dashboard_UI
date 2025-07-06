import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthStatus } from '../hooks/useAuthStatus';
import BackdropLoading from '../components/loading/BackdropLoading';

type RouteProps = {
  element?: React.ReactNode;
  isPrivate?: boolean;
  adminOnly?: boolean;
};

const ProtectedRoute: React.FC<RouteProps> = ({
  element,
  isPrivate = false,
  adminOnly = false,
}) => {
  const location = useLocation();
  const { isAuth, isAdmin, loading, clear } = useAuthStatus();

  const [redirectPath, setRedirectPath] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!loading) {
      if (isPrivate && !isAuth) {
        clear();
        setRedirectPath('/login');
      } else if (adminOnly && !isAdmin) {
        setRedirectPath('/dash/home');
      } else if (!isPrivate && isAuth) {
        setRedirectPath('/dash/home');
      }
    }
  }, [loading, isAuth, isAdmin, isPrivate, adminOnly, clear]);

  if (loading) return <BackdropLoading />;
  if (redirectPath) return <Navigate to={redirectPath} state={{ from: location }} replace />;
  return element;
};

export default ProtectedRoute;
