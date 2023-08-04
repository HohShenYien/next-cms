import { clsx } from "@mantine/core";
import { ReactNode } from "react";

type LandingContainerProps = {
  containerClass?: string;
  innerClass?: string;
  children?: ReactNode;
};

const LandingContainer = ({
  containerClass,
  innerClass,
  children,
}: LandingContainerProps) => {
  return (
    <div className={clsx("flex justify-center py-24", containerClass)}>
      <div className={clsx("max-w-6xl", innerClass)}>{children}</div>
    </div>
  );
};

export default LandingContainer;
