import React, { type FC, type ReactElement } from 'react';

import { SharedLayout } from '../SharedLayout/SharedLayout';
import styles from './MainPageLayout.module.css';

type Props = {
  children: ReactElement;
};

export const MainPageLayout: FC<Props> = (props) => {
  return (
    <div className={styles['app']}>
      <div className={styles['app__content']}>
        <SharedLayout>
          <>
            <div className={styles['app__background-bottom']}>
              <div className={styles['app__background-circle']}></div>
            </div>
            <main className={styles['main']}>{props.children}</main>
          </>
        </SharedLayout>
      </div>
    </div>
  );
};
