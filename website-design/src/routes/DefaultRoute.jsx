import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { MainContext } from './MainContext';
import HeaderPage from '../views/partials/HeaderPage';
import FooterPage from '../views/partials/FooterPage';

const DefaultRoute = ({ children }) => {

  const { loader } = useContext(MainContext)

  return children ? children : <>

      <HeaderPage />
      <Outlet />
      <FooterPage />
  </>;
};

export default DefaultRoute;