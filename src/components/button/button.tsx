import React, {FunctionComponent} from 'react';

import buttonStyles from './button.module.css';

type TCommonButton = {
  name: string;
  isWithBackground: boolean;
}

export const Button: FunctionComponent<TCommonButton> = (props) => {
  return (
    <button className={props.isWithBackground
      ? `${buttonStyles.button} ${buttonStyles.button_background_image}`
      : `${buttonStyles.button} ${buttonStyles.button_background_common}`}>
      {props.name}
    </button>
  )
}