import React, { type FC, type PropsWithChildren } from 'react';

import { Header, SocialNetworksWidget } from '../../shared/components';

export const SharedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <footer>
        <SocialNetworksWidget />
      </footer>
    </>
  );
};
