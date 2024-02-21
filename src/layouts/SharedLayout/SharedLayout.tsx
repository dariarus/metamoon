import React, { type FC, type ReactElement } from 'react'

import { Header } from '../../components/Header/Header'
import { SocialNetworksWidget } from '../../components/SocialNetworksWidget/SocialNetworksWidget'

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
