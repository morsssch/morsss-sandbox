
import React from 'react';
import './TaskHeader.scss';
import { HomeButton } from '../HomeButton';

interface TaskHeaderProps {
  title?: string
}

export const TaskHeader: React.FC<TaskHeaderProps> = ({ title }) => {
  return (
    <div className='taskHeader'>
      <div className="taskHeader__title">{title ?? "Без названия"}</div>
      <HomeButton />
    </div>
  );
};

