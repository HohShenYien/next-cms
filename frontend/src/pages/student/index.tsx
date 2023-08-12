import { getStudentLayout } from "@/layouts/AppLayout";
import { NextPageWithAttributes } from "../_app";
import WelcomeComponent from "@/features/Home/WelcomeComponent";
import SimpleSchedule from "@/features/Schedule/SimpleSchedule";
import { Divider } from "@mantine/core";
import SimpleNewsCarousel from "@/features/News/SimpleNewsCarousel";
import SimpleCourseGrid from "@/features/Course/SimpleCourseGrid";
import QuickAccess from "@/features/Home/QuickAccess";

const StudentHome: NextPageWithAttributes = () => {
  return (
    <div className="grid h-full grid-cols-12 gap-6">
      <div className="col-span-8 space-y-6">
        <WelcomeComponent />
        <SimpleCourseGrid />
        <QuickAccess />
      </div>
      <div className="col-span-4 flex h-full flex-col items-stretch rounded-md border-2 border-solid border-gray-100 bg-blue-50/30 shadow-sm">
        <SimpleSchedule />
        <Divider className="mx-4" color="gray.3" />
        <SimpleNewsCarousel />
      </div>
    </div>
  );
};

StudentHome.isPublic = true;
StudentHome.getLayout = getStudentLayout;
export default StudentHome;
