import Navbar from "@/components/nav/Navbar";
import { HasChildren } from "@/utils/types/props";
import { ReactElement, ReactNode } from "react";

export const HeroLayout = ({ children }: HasChildren) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default function getHeroLayout(page: ReactElement) {
  return <HeroLayout>{page}</HeroLayout>;
}
