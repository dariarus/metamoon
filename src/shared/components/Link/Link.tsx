import React, { type FC, type ReactElement } from 'react'

interface Props {
  href: string
  styles: string
  children: string | ReactElement
}

export const Link: FC<Props> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={props.styles}>{props.children}</a>
  )
}
