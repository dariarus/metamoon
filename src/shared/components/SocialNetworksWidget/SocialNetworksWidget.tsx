import React, { type FC } from 'react';

import instagramIcon from '../../../../public/images/instagram-icon.svg';
import telegramIcon from '../../../../public/images/telegram-icon.svg';
import linkedinIcon from '../../../../public/images/linkedin-icon.svg';
import facebookIcon from '../../../../public/images/facebook-icon.svg';
import { Link } from '../Link/Link';
import styles from './SocialNetworksWidget.module.css';

export const SocialNetworksWidget: FC = () => {
  return (
    <div className={styles.widget}>
      <Link href="/example/change-me" modifier="image">
        <img src={instagramIcon} alt="instagram" className={styles.image} />
      </Link>
      <Link href="/example/change-me" modifier="image">
        <img src={telegramIcon} alt="telegram" className={styles.image} />
      </Link>
      <Link href="/example/change-me" modifier="image">
        <img src={linkedinIcon} alt="linkedin" className={styles.image} />
      </Link>
      <Link href="/example/change-me" modifier="image">
        <img src={facebookIcon} alt="facebook" className={styles.image} />
      </Link>
    </div>
  );
};
