import React, { type FC, type PropsWithChildren } from "react";

import { SharedLayout } from "../SharedLayout/SharedLayout";
import styles from "./MainLayout.module.css";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles["main-layout"]}>
      <div className={styles["main-layout__content"]}>
        <SharedLayout>
          <>
            <div className={styles["main-layout__background-bottom"]}>
              <div className={styles["main-layout__background-circle"]}></div>
            </div>
            <main className={styles["main"]}>{children}</main>
          </>
        </SharedLayout>
      </div>
    </div>
  );
};
