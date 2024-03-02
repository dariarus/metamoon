import React, { type FC } from "react";
import * as cn from "classnames";

import styles from "./Button.module.css";

type Props = {
  title: string;
  isBackgroundImage?: boolean;
};

export const Button: FC<Props> = ({ title, isBackgroundImage }) => {
  const buttonClasses = cn(styles["button"], {
    [styles["button_background_with-image"]]: isBackgroundImage,
    [styles["button_background_common"]]: !isBackgroundImage,
  });

  return <button className={buttonClasses}>{title}</button>;
};
