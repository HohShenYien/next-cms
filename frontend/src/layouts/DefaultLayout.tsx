import Navbar from "@/components/nav/Navbar";
import { HasChildren } from "@/utils/types/props";
import { ReactElement, ReactNode } from "react";

export const DefaultLayout = ({ children }: HasChildren) => {
  return <main>{children}</main>;
};

export default function getDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}
