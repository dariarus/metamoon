import React, { type FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

type Props = {
  title: string;
  isBackgroundImage?: boolean;
};

export const Button: FC<Props> = ({ title, isBackgroundImage }) => {
  const buttonClasses = cn(styles["button"], {
    [styles["button_background_with-image"]]: isBackgroundImage,
  });

  return <button className={buttonClasses}>{title}</button>;
};
