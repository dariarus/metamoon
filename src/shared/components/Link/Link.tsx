import React, { type FC, type PropsWithChildren } from "react";
import * as cn from "classnames";

import instagramIcon from "../../../../public/images/instagram-icon.svg";
import telegramIcon from "../../../../public/images/telegram-icon.svg";
import linkedinIcon from "../../../../public/images/linkedin-icon.svg";
import facebookIcon from "../../../../public/images/facebook-icon.svg";
import styles from "./Link.module.css";

type Props = {
  href: string;
  modifier?: "text" | "image" | "logo";
  socialNetwork?: "instagram" | "telegram" | "linkedin" | "facebook";
  title?: string;
};

export const Link: FC<PropsWithChildren<Props>> = ({
  href,
  modifier,
  children,
  socialNetwork,
  title,
}) => {
  const linkClasses = cn(styles["link"], {
    [styles["link_text"]]: modifier === "text",
    [styles["link_image"]]: modifier === "image",
    [styles["link_logo"]]: modifier === "logo",
  });

  let socialNetworkIcon;

  switch (socialNetwork) {
    case "instagram":
      socialNetworkIcon = instagramIcon;
      break;
    case "telegram":
      socialNetworkIcon = telegramIcon;
      break;
    case "linkedin":
      socialNetworkIcon = linkedinIcon;
      break;
    case "facebook":
      socialNetworkIcon = facebookIcon;
      break;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
      className={linkClasses}
      style={{ background: `url(${socialNetworkIcon}) 20% / 100% no-repeat` }}
    >
      {children}
    </a>
  );
};
