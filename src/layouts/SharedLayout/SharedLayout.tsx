import React, { type FC, type PropsWithChildren } from 'react';

import { Header, SocialNetworksWidget } from '../../shared/components';
import styles from './SharedLayout.module.css'

export const SharedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles['content']}>
      <Header />
      {children}
      <footer>
        <SocialNetworksWidget />
      </footer>
    </div>
  );
};
