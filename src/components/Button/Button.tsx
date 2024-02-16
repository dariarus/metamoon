import React, { type FC } from 'react'

import styles from './Button.module.css'

type Props = {
  name: string
  isWithBackground: boolean
}

export const Button: FC<Props> = (props) => {
  return (
    <button className={props.isWithBackground
      ? `${styles.button} ${styles['button_background_with-image']}`
      : `${styles.button} ${styles.button_background_common}`}>
      {props.name}
    </button>
  )
}
