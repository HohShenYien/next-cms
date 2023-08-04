import Navbar from "@/components/nav/Navbar";
import { ReactElement, ReactNode } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default function getDefaultLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
}
