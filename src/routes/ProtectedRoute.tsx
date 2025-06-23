import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import BackdropLoading from '../components/loading/BackdropLoading';

interface RouteProps {
  component?: React.ComponentType<any>;
  element?: React.ReactNode;
  isPrivate?: boolean;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<RouteProps> = ({
  component: Component,
  element,
  isPrivate = false,
  adminOnly = false,
  ...rest
}) => {
  const { isAuth, isAdmin, loading } = useContext(AuthContext);
  const location = useLocation();

  const renderContent = () => {
    if (loading) return <BackdropLoading />;

    // Se é uma rota privada e o usuário não está autenticado
    if (isPrivate && !isAuth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }

    // Se é uma rota admin e o usuário não é admin
    if (adminOnly && !isAdmin) {
      return <Navigate to="/dash/home" replace />;
    }

    // Se é uma rota pública e o usuário está autenticado
    if (!isPrivate && isAuth) {
      return <Navigate to="/dash/home" replace />;
    }

    // Se passou todas as verificações, renderiza o conteúdo
    return element ? element : Component ? <Component {...rest} /> : null;
  };

  return renderContent();
};

export default ProtectedRoute;
