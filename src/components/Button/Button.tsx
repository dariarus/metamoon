import React, { type FC } from 'react'
import * as classNames from 'classnames'

import styles from './Button.module.css'

interface Props {
  title: string
  isBackgroundImage?: boolean
}

export const Button: FC<Props> = (props) => {
  const buttonStyles = classNames(styles.button as string, {
    [styles['button_background_with-image']]: props.isBackgroundImage,
    [styles.button_background_common]: !props.isBackgroundImage
  })

  return (
    <button className={buttonStyles}>
      {props.title}
    </button>
  )
}
