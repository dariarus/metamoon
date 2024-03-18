import React, { type FC, type ReactNode } from "react";
import cn from "classnames";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: ReactNode;
  isTransparentHover?: boolean;
  isInnerLink?: boolean;
  title?: string;
};

export const Link: FC<Props> = ({
  href,
  children,
  isTransparentHover = false,
  isInnerLink = false,
  title = "",
}) => {
  const linkClasses = cn(styles["link"], {
    [styles["link_transparent-hover"]]: isTransparentHover,
  });

  return isInnerLink ? (
    <span className={linkClasses}>{children}</span>
  ) : (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={linkClasses}
    >
      {children}
    </a>
  );
};
