import React, { type FC } from 'react'
import * as classNames from 'classnames'

import styles from './Button.module.css'

interface Props {
  name: string
  isWithBackground: boolean
}

export const Button: FC<Props> = (props) => {
  const buttonStyles = classNames(styles.button as string, {
    [styles['button_background_with-image']]: props.isWithBackground,
    [styles.button_background_common]: !props.isWithBackground
  })

  return (
    <button className={buttonStyles}>
      {props.name}
    </button>
  )
}
