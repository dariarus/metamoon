import React, {FC} from 'react';

import styles from './StatusRectangle.module.css';

type Props = {
  title: string;
  status: 'active' | 'pending'
}

export const StatusRectangle: FC<Props> = ({title, status}) => {
  // TODO: настроить стили под библиотеку classnames

  return (
    <div
      className={status === 'active' ? `${styles['status']} ${styles['status_active']}`
        : `${styles['status']} ${styles['status_pending']}`}>{title}
    </div>
  )
}