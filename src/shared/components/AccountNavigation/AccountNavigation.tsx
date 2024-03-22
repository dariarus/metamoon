import React, { type FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AccountNavigation.module.css';
import { StatusRectangle } from '../StatusRectangle/StatusRectangle';

export const AccountNavigation: FC = () => {
  return (
    <nav className={styles['navigation']}>
      <div className={styles['navigation__link-wrap']}>
        <NavLink to="/airdrop" className={styles['link']}>
          AirDrop
        </NavLink>
        <StatusRectangle title="Available now" status="active" />
      </div>
      <div className={styles['navigation__link-wrap']}>
        <NavLink to="/private-presale" className={styles['link']}>
          Private Presale
        </NavLink>
        <StatusRectangle title="Available now" status="active" />
      </div>
      <div className={styles['navigation__link-wrap']}>
        <NavLink to="/public-sale" className={styles['link']}>
          Public Sale
        </NavLink>
        <StatusRectangle title="Soon" status="pending" />
      </div>
    </nav>
  );
};
