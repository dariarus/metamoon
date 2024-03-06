import React, { type FC } from 'react';

import { Link } from '../Link/Link';
import styles from './SocialNetworksWidget.module.css';

export const SocialNetworksWidget: FC = () => {
  return (
    <div className={styles['widget']}>
      <Link href="/example/change-me" modifier="image" socialNetwork="instagram" title="Instagram" />
      <Link href="/example/change-me" modifier="image" socialNetwork="telegram" title="Telegram" />
      <Link href="/example/change-me" modifier="image" socialNetwork="linkedin" title="Linkedin" />
      <Link href="/example/change-me" modifier="image" socialNetwork="facebook" title="Facebook" />
    </div>
  );
};
