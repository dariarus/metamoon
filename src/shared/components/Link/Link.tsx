import React, { type FC, type ReactNode } from 'react';
import cn from 'classnames';

import styles from './Link.module.css';

type Props = {
  href: string;
  children: ReactNode;
  isTransparentHover?: boolean;
  isLogo?: boolean;
  title?: string;
};

export const Link: FC<Props> = ({ href, isTransparentHover, children, isLogo, title }) => {
  const linkClasses = cn(styles['link'], {
    [styles['link_transparent-hover']]: isTransparentHover ?? isLogo,
  });

  return isLogo ? (
    <span className={linkClasses}>{children}</span>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" title={title} className={linkClasses}>
      {children}
    </a>
  );
};
