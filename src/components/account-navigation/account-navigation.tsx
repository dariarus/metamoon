import React, {FunctionComponent} from 'react';
import {NavLink} from 'react-router-dom';

import accountNavigationStyles from './account-navigation.module.css';

import {StatusRectangle} from '../StatusRectangle/StatusRectangle';

export const AccountNavigation: FunctionComponent = () => {
  return (
    <nav className={accountNavigationStyles.navigation}>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>AirDrop</NavLink>
        <StatusRectangle title="Available now" status="active"/>
      </div>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>Private Presale</NavLink>
        <StatusRectangle title="Available now" status="active"/>
      </div>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>Public Sale</NavLink>
        <StatusRectangle title="Soon" status="pending"/>
      </div>
    </nav>
  )
}