import Sidebar from "@/components/nav/Sidebar";
import { HasChildren } from "@/utils/types/props";
import { ReactNode } from "react";
import { GetLayoutFunction } from "./types";
import StudentSidebar from "@/components/nav/Sidebar/SidebarContents/StudentSidebar";
import Appbar from "@/components/nav/Appbar";

type SidebarLayoutProps = {
  sidebarContent: ReactNode;
} & HasChildren;

export const AppLayout = ({ children, sidebarContent }: SidebarLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-blue-50/25 pl-72 pt-16">
      <Sidebar>{sidebarContent}</Sidebar>
      <div className="max-w-6xl flex-1 px-4">
        <Appbar />
        <main className="py-6">{children}</main>
      </div>
    </div>
  );
};

export const getStudentLayout: GetLayoutFunction = (page) => {
  return <AppLayout sidebarContent={<StudentSidebar />}>{page}</AppLayout>;
};
