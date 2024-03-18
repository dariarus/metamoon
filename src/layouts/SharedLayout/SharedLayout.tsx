import React, { type FC, type PropsWithChildren } from 'react';

import { Header, SocialNetworksWidget } from 'shared/components';

import styles from './SharedLayout.module.css';

export const SharedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles['shared-layout']}>
      <div className={styles['shared-layout__content']}>
        <Header />
        {children}
      </div>
      <footer className={styles['footer']}>
        <SocialNetworksWidget />
      </footer>
    </div>
  );
};
