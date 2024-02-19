import React, { type FC } from 'react'

import styles from './Header.module.css'
import logo from '../../images/logo.png'

import { Button } from '../Button/Button'

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <a href="/" target="_blank" rel="noreferrer" className={styles['header__logo-image-link']}>
        <img src={logo} alt="Logo" className={styles.logo}/>
      </a>
      <nav className={styles.navigation}>
        <a href="/example/change-me" target="_blank" rel="noreferrer" className={styles.navigation__link}>About us</a>
        <a href="/example/change-me" target="_blank" rel="noreferrer" className={styles.navigation__link}>Roadmap</a>
        <a href="/example/change-me" target="_blank" rel="noreferrer" className={styles.navigation__link}>Team</a>
        <a href="/example/change-me" target="_blank" rel="noreferrer" className={styles.navigation__link}>Community</a>
        <Button title="Connect wallet"/>
      </nav>
    </header>
  )
}
