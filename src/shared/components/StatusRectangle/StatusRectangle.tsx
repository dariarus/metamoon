import React, { type FC } from 'react';
import cn from 'classnames';

import styles from './StatusRectangle.module.css';

type Props = {
  title: string;
  status: 'active' | 'pending';
};

export const StatusRectangle: FC<Props> = ({ title, status }) => {
  const statusRectangleClasses = cn(styles['rectangle'], {
    [styles['rectangle_status_active']]: status === 'active',
    [styles['rectangle_status_pending']]: status === 'pending',
  });

  return <div className={statusRectangleClasses}>{title}</div>;
};
