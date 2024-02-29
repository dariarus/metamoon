import React, { type FC } from 'react'
import * as cn from 'classnames'

import styles from './Button.module.css'

type Props = {
  title: string
  isBackgroundImage?: boolean
}

export const Button: FC<Props> = (props) => {
  const buttonStyles = cn(styles['button'], {
    [styles['button_background_with-image']]: props.isBackgroundImage,
    [styles['button_background_common']]: !props.isBackgroundImage
  })

  return (
    <button className={buttonStyles}>
      {props.title}
    </button>
  )
}
