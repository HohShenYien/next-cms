import { NextPageWithAttributes } from "@/pages/_app";
import { ReactElement } from "react";

export type GetLayoutFunction = (page: ReactElement) => JSX.Element;
