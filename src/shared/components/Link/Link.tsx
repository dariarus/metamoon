import React, { type FC, type PropsWithChildren } from "react";
import * as cn from "classnames";

import styles from "./Link.module.css";

type Props = {
  href: string;
  modifier: "text" | "image";
};

export const Link: FC<PropsWithChildren<Props>> = ({
  href,
  modifier,
  children,
}) => {
  const linkClasses = cn(styles["link"], {
    [styles["link_text"]]: modifier === "text",
    [styles["link_image"]]: modifier === "image",
  });

  return (
    <a href={href} target="_blank" rel="noreferrer" className={linkClasses}>
      {children}
    </a>
  );
};
