import React, { type FC, type ReactNode } from "react";
import cn from "classnames";

import styles from "./Link.module.css";

type Props = {
  href: string;
  children: string | ReactNode;
  modifier?: "text" | "image" | "logo";
  title?: string;
};

export const Link: FC<Props> = ({ href, modifier, children, title }) => {
  const linkClasses = cn(styles["link"], {
    [styles["link_text"]]: modifier === "text",
    [styles["link_image"]]: modifier === "image",
    [styles["link_logo"]]: modifier === "logo",
  });

  return modifier === "logo" ? (
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
