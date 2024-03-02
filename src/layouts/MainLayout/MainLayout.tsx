import React, { type FC, type ReactElement } from 'react';

import { SharedLayout } from '../SharedLayout/SharedLayout';
import styles from './MainLayout.module.css';

type Props = {
  children: ReactElement;
};

export const MainLayout: FC<Props> = (props) => {
  return (
    <div className={styles['main-layout']}>
      <div className={styles['main-layout__content']}>
        <SharedLayout>
          <>
            <div className={styles['main-layout__background-bottom']}>
              <div className={styles['main-layout__background-circle']}></div>
            </div>
            <main className={styles['main']}>{props.children}</main>
          </>
        </SharedLayout>
      </div>
    </div>
  );
};
