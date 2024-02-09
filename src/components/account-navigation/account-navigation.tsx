import React, {FunctionComponent} from 'react';

import accountNavigationStyles from './account-navigation.module.css';

import {NavLink} from 'react-router-dom';

export const AccountNavigation: FunctionComponent = () => {
  return (
    <nav className={accountNavigationStyles.navigation}>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>AirDrop</NavLink>
        <div
          className={`${accountNavigationStyles['navigation__status']} ${accountNavigationStyles['navigation__status_available']}`}>Available
          now
        </div>
      </div>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>Private Presale</NavLink>
        <div
          className={`${accountNavigationStyles['navigation__status']} ${accountNavigationStyles['navigation__status_available']}`}>Available
          now
        </div>
      </div>
      <div className={accountNavigationStyles['navigation__link-wrap']}>
        <NavLink to="#" className={accountNavigationStyles.link}>Public Sale</NavLink>
        <div
          className={`${accountNavigationStyles['navigation__status']} ${accountNavigationStyles['navigation__status_pending']}`}>Soon
        </div>
      </div>
    </nav>
  )
}