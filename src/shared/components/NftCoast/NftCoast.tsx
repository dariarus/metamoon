import React, { type FC } from "react";

import { NftCount } from "../NftCount/NftCount";
import styles from "./NftCoast.module.css";

type Props = {
  infoKind: "total" | "partial";
  priceKind?: "presale" | "public";
};

export const NftCoast: FC<Props> = ({ infoKind, priceKind = "" }) => {
  return infoKind === "total" ? (
    <div className={styles["coast-info"]}>
      <div className={styles["coast-item"]}>
        <p className={styles["text"]}>Your balance</p>
        <span className={styles["coast-item__decor"]}></span>
        <div className={styles["coast-item__vertical-alignment-wrap"]}>
          <p className={styles["text"]}>1 ETH ($1700)</p>
        </div>
      </div>
      <div className={styles["coast-item"]}>
        <p className={styles["text"]}>Presale Price</p>
        <span className={styles["coast-item__decor"]}></span>
        <div className={styles["coast-item__vertical-alignment-wrap"]}>
          <p className={styles["text"]}>0.2 ETH ($340)</p>
        </div>
      </div>
      <div className={styles["coast-item"]}>
        <p className={styles["text"]}>Amount of NFT</p>
        <span className={styles["coast-item__decor"]}></span>
        <div className={styles["coast-item__vertical-alignment-wrap"]}>
          <NftCount />
        </div>
      </div>
      <div className={styles["coast-item"]}>
        <p className={styles["text"]}>Total coast</p>
        <span className={styles["coast-item__decor"]}></span>
        <div className={styles["coast-item__vertical-alignment-wrap"]}>
          <p className={styles["text"]}>0.2 ETH ($340)</p>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles["coast-item"]}>
      <p className={styles["text"]}>
        {priceKind === "presale" ? "Presale" : "Public"} Price
      </p>
      <span className={styles["coast-item__decor"]}></span>
      <div className={styles["coast-item__vertical-alignment-wrap"]}>
        <p className={styles["text"]}>0.1 ETH ($170)</p>
      </div>
    </div>
  );
};
