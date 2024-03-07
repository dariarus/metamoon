import React, { type FC } from 'react';

import instagramIcon from '/images/instagram-icon.svg';
import telegramIcon from '/images/telegram-icon.svg';
import linkedinIcon from '/images/linkedin-icon.svg';
import facebookIcon from '/images/facebook-icon.svg';

import { Link } from '../Link/Link';
import styles from './SocialNetworksWidget.module.css';

export const SocialNetworksWidget: FC = () => {
  return (
    <div className={styles['widget']}>
      <Link href="/example/change-me" modifier="image" title="Instagram">
        <span className={styles['widget__icon']} style={{ backgroundImage: `url(${instagramIcon})` }}></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Telegram">
        <span className={styles['widget__icon']} style={{ backgroundImage: `url(${telegramIcon})` }}></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Linkedin">
        <span className={styles['widget__icon']} style={{ backgroundImage: `url(${linkedinIcon})` }}></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Facebook">
        <span className={styles['widget__icon']} style={{ backgroundImage: `url(${facebookIcon})` }}></span>
      </Link>
    </div>
  );
};
