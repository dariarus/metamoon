import React, { type FC } from "react";

import { NftCount, Button } from "shared/components";

import styles from "./PublicSalePage.module.css";

type Props = {
  publicSaleStatus: "available" | "soon" | "finished";
};

export const PublicSalePage: FC<Props> = ({ publicSaleStatus }) => {
  return publicSaleStatus === "available" ? (
    <div
      className={`${styles["content"]} ${styles["content_sales-available"]}`}
    >
      <h3 className={styles["heading"]}>Mint NFTs now!</h3>
      <div className={styles["text-wrap"]}>
        <p className={`${styles["text"]}`}>
          You can mint an unlimited amount of NFTs for the market price
        </p>
      </div>
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
      <div className={styles["button-wrap"]}>
        <Button title="Mint 2 NFT" />
      </div>
    </div>
  ) : publicSaleStatus === "soon" ? (
    <div className={styles["content"]}>
      <h3 className={styles["heading"]}>Subscribe to our news!</h3>
      <div className={styles["text-wrap"]}>
        <p className={`${styles["text"]}`}>
          We’ll send you a notification when public sale is available to
          participate
        </p>
      </div>
      <div className={styles["coast-item"]}>
        <p className={styles["text"]}>Presale price</p>
        <span className={styles["coast-item__decor"]}></span>
        <div className={styles["coast-item__vertical-alignment-wrap"]}>
          <p className={styles["text"]}>0.1 ETH ($170)</p>
        </div>
      </div>
      <div className={styles["button-wrap"]}>
        <Button title="Subscribe" />
      </div>
    </div>
  ) : (
    <div className={styles["content"]}>
      <h3 className={styles["heading"]}>SOLD OUT</h3>
    </div>
  );
};
