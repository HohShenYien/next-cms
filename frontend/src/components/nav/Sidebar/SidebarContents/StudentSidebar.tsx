import { BsCalendar4Week } from "react-icons/bs";
import SidebarButton from "../SidebarButton";
import { PiBookOpenTextLight, PiGraduationCapLight } from "react-icons/pi";
import { AiOutlineSetting } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

const StudentSidebar = () => {
  return (
    <>
      <SidebarButton label="Home" Icon={PiGraduationCapLight} href="/student" />
      <SidebarButton
        label="Dashboard"
        Icon={RxDashboard}
        href="/student/dashboard"
      />
      <SidebarButton
        label="Courses"
        Icon={PiBookOpenTextLight}
        href="/student/courses"
      />
      <SidebarButton
        label="Schedule"
        Icon={BsCalendar4Week}
        href="/student/schedule"
      />
      <SidebarButton
        label="Settings"
        Icon={AiOutlineSetting}
        href="/student/settings"
      />
    </>
  );
};

export default StudentSidebar;
