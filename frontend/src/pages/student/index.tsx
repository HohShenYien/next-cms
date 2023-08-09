import { getStudentLayout } from "@/layouts/AppLayout";
import { NextPageWithAttributes } from "../_app";
import WelcomeComponent from "@/features/Home/WelcomeComponent";
import SimpleSchedule from "@/features/Schedule/SimpleSchedule";
import { Divider } from "@mantine/core";

const StudentHome: NextPageWithAttributes = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <WelcomeComponent />
      </div>
      <div className="col-span-4 rounded-md border-2 border-solid border-gray-100 bg-blue-50/30 shadow-sm">
        <SimpleSchedule />
        <Divider className="mx-4" color="gray.3" />
        <SimpleSchedule />
      </div>
    </div>
  );
};

StudentHome.isPublic = true;
StudentHome.getLayout = getStudentLayout;
export default StudentHome;
