
import React from 'react';
import './HomeButton.scss';
import { Link } from 'react-router';

export const HomeButton: React.FC = () => {
  return (
    <Link to={"/"} className='homeButton'>Домой</Link>
  );
};

