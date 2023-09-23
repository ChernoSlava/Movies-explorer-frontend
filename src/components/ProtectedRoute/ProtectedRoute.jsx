import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTER_PATH } from '../../constants';

export function ProtectedRoute({ loggedIn, children }) {
  const location = useLocation();
  if (!loggedIn) {
    return (
      <Navigate to={ROUTER_PATH.MAIN} state={{ from: location }} replace />
    );
  }

  return children;
}

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
