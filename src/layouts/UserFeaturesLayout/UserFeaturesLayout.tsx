import React, { type FC, type PropsWithChildren } from 'react';

import { AccountNavigation, ProgressBar, ScrollingText } from 'shared/components';
import { SharedLayout } from 'layouts';

import styles from './UserFeaturesLayout.module.css';

export const UserFeaturesLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${styles['users-features-layout']}`}>
      <div className={styles['users-features-layout__content']}>
        <SharedLayout>
          <main className={styles['main']}>
            <ProgressBar />
            <div className={styles['main__info-wrap']}>
              <AccountNavigation />
              {children}
              <img src="example/change-me" alt="Profile avatar" className={styles['image']} />
            </div>
          </main>
        </SharedLayout>
      </div>
      <ScrollingText />
    </div>
  );
};
