import React, {
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from "react";

type Props = {
  href: string;
  styles: string;
  children: string | ReactElement;
};

export const Link: FC<PropsWithChildren<Props>> = ({
  href,
  styles,
  children,
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles}>
      {children}
    </a>
  );
};
