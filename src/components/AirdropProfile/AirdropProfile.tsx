import React, {FunctionComponent} from 'react';

import styles from './AirdropProfile.module.css';
import {Button} from '../button/button';

type TAirdropProfileProps = {
  isUserActive: boolean;
}

export const AirdropProfile: FunctionComponent<TAirdropProfileProps> = (props) => {
  return (
    <div className={styles.content}>

        <h3 className={styles.heading}>{props.isUserActive
          ? "Congratulations!"
          : "You’re not whitelisted yet :("}</h3>
        <p className={styles.text}>{props.isUserActive
          ? "Your wallet has been whitelisted! Claim your NFT now!"
          : "To participate in AirDrop please send us an information about your project"}</p>
        <Button name={props.isUserActive
          ? "Claim NFT"
          : "Get whitelisted"}
                isWithBackground={false}/>

    </div>
  )
}