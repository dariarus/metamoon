import React, { type FunctionComponent } from 'react'

import buttonStyles from './button.module.css'

interface TCommonButton {
  name: string
  isWithBackground: boolean
}

export const Button: FunctionComponent<TCommonButton> = (props) => {
  return (
    <button className={props.isWithBackground
      ? `${buttonStyles.button} ${buttonStyles['button_background_with-image']}`
      : `${buttonStyles.button} ${buttonStyles.button_background_common}`}>
      {props.name}
    </button>
  )
}
