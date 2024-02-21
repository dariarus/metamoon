import React, { type FC } from 'react'

import styles from './SocialNetworksWidget.module.css'

import instagramIcon from '../../../public/images/instagram-icon.png'
import telegramIcon from '../../../public/images/telegram-icon.png'
import linkedinIcon from '../../../public/images/linkedin-icon.png'
import facebookIcon from '../../../public/images/facebook-icon.png'
import { Link } from '../Link/Link'

export const SocialNetworksWidget: FC = () => {
  return (
    <div className={styles.widget}>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={instagramIcon} alt="instagram" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={telegramIcon} alt="telegram" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={linkedinIcon} alt="linkedin" className={styles.image}/>
      </Link>
      <Link href="/example/change-me" styles={styles.link}>
        <img src={facebookIcon} alt="facebook" className={styles.image}/>
      </Link>
    </div>
  )
}
