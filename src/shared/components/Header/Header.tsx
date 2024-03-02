import React, { type FC } from 'react';

import logo from '../../../../public/images/logo.svg';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <Link href="/" modifier="image">
        <img src={logo} alt="Logo" className={styles['logo']} />
      </Link>
      <nav className={styles.navigation}>
        <Link href="/example/change-me" modifier="text">
          About us
        </Link>
        <Link href="/example/change-me" modifier="text">
          Roadmap
        </Link>
        <Link href="/example/change-me" modifier="text">
          Team
        </Link>
        <Link href="/example/change-me" modifier="text">
          Community
        </Link>
        <Button title="Connect wallet" />
      </nav>
    </header>
  );
};
