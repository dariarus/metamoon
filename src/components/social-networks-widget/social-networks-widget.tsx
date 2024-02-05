import React, {FunctionComponent} from 'react';

import widgetStyles from './social-networks-widget.module.css';
import instagramIcon from '../../images/instagram-icon.png';
import telegramIcon from '../../images/telegram-icon.png';
import linkedinIcon from '../../images/linkedin-icon.png';
import facebookIcon from '../../images/facebook-icon.png';

export const SocialNetworksWidget: FunctionComponent = () => {
  return (
    <footer className={widgetStyles.widget}>
      <a href="#" className={widgetStyles.link}>
        <img src={instagramIcon} alt="instagram" className={widgetStyles.image}/>
      </a>
      <a href="#" className={widgetStyles.link}>
        <img src={telegramIcon} alt="telegram" className={widgetStyles.image}/>
      </a>
      <a href="#" className={widgetStyles.link}>
        <img src={linkedinIcon} alt="linkedin" className={widgetStyles.image}/>
      </a>
      <a href="#" className={widgetStyles.link}>
        <img src={facebookIcon} alt="facebook" className={widgetStyles.image}/>
      </a>
    </footer>
  )
}