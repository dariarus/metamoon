import React, { type FC } from 'react';

import logo from '/images/logo.svg';

import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <Link href="/" title="Logo image" isInnerLink isTransparentHover>
        <img src={logo} alt="Logo" className={styles['logo']} />
      </Link>
      <nav className={styles['navigation']}>
        <Link href="/example/change-me">About us</Link>
        <Link href="/example/change-me">Roadmap</Link>
        <Link href="/example/change-me">Team</Link>
        <Link href="/example/change-me">Community</Link>
        <Button title="Connect wallet" />
      </nav>
    </header>
  );
};
