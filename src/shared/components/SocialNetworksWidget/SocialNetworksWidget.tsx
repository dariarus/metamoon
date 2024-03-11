import React, { type FC } from "react";

import { Link } from "../Link/Link";
import styles from "./SocialNetworksWidget.module.css";

export const SocialNetworksWidget: FC = () => {
  return (
    <div className={styles["widget"]}>
      <Link href="/example/change-me" modifier="image" title="Instagram">
        <span
          className={`${styles["widget__icon"]} ${styles["widget__icon_instagram"]}`}
        ></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Telegram">
        <span
          className={`${styles["widget__icon"]} ${styles["widget__icon_telegram"]}`}
        ></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Linkedin">
        <span
          className={`${styles["widget__icon"]} ${styles["widget__icon_linkedin"]}`}
        ></span>
      </Link>
      <Link href="/example/change-me" modifier="image" title="Facebook">
        <span
          className={`${styles["widget__icon"]} ${styles["widget__icon_facebook"]}`}
        ></span>
      </Link>
    </div>
  );
};
