import React, { type FC, type ReactElement } from 'react'

import { Header, SocialNetworksWidget } from '../../shared/components'

interface Props {
  children: ReactElement
}

export const SharedLayout: FC<Props> = (props) => {
  return (
    <>
      <Header/>
      {props.children}
      <footer>
        <SocialNetworksWidget/>
      </footer>
    </>
  )
}
