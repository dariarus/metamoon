import React, {FunctionComponent, ReactElement} from 'react';

import airdropPageStyles from './UserFeatures.module.css';

import {ProgressBar} from '../../components/progress-bar/progress-bar';
import {AccountNavigation} from '../../components/account-navigation/account-navigation';

type TUserFeatures = {
  children: ReactElement;
}

export const UserFeatures: FunctionComponent<TUserFeatures> = (props) => {
  return (
    <div className={airdropPageStyles.content}>
      <ProgressBar/>
      <div className={airdropPageStyles['content__info-wrap']}>
        <AccountNavigation/>
        {props.children}
        <img src="" alt="Profile avatar" className={airdropPageStyles.image}/>
      </div>
    </div>
  )
}