import React, {FunctionComponent} from 'react';

import headerStyles from './header.module.css';
import logo from '../../images/logo.png';
import {Button} from '../button/button';

export const Header: FunctionComponent = () => {
  return (
    <header className={headerStyles.header}>
      <img src={logo} alt="Logo" className={headerStyles.logo}/>
      <nav className={headerStyles.navigation}>
        <a href="#" className={headerStyles.navigation__link}>About us</a>
        <a href="#" className={headerStyles.navigation__link}>Roadmap</a>
        <a href="#" className={headerStyles.navigation__link}>Team</a>
        <a href="#" className={headerStyles.navigation__link}>Community</a>
        <Button name="Connect wallet" isWithBackground={false}/>
      </nav>
    </header>
  )
}