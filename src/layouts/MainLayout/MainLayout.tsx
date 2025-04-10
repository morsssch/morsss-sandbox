
import React from 'react';
import './MainLayout.scss';
import { Outlet } from 'react-router';

export const MainLayout: React.FC = () => {
  return (
    <div className="mainLayout">
      <Outlet />
    </div>
  );
};

