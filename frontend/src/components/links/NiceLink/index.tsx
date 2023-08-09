import React from "react";
import styles from "./NiceLink.module.scss";
import Link from "next/link";
import { clsx } from "@mantine/core";
import theme from "@/styles/MantineTheme";

type NiceLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children?: React.ReactNode;
  href: string;
};

const NiceLink = ({
  children,
  href,
  style,
  className,
  ...props
}: NiceLinkProps) => {
  return (
    <Link
      href={href}
      {...props}
      className={clsx(
        styles["nice-link"],
        "text-blue-500 transition-colors hover:text-blue-600",
        className
      )}
      style={
        {
          ...style,
          "--link": theme.colors?.blue?.[6] ?? "blue",
        } as React.CSSProperties
      }
    >
      {children}
    </Link>
  );
};

export default NiceLink;
