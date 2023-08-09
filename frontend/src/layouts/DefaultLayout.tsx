import { HasChildren } from "@/utils/types/props";
import { ReactElement } from "react";

export const DefaultLayout = ({ children }: HasChildren) => {
  return <main>{children}</main>;
};

export default function getDefaultLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
}
