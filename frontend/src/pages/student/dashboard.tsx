import { getStudentLayout } from "@/layouts/AppLayout";
import { NextPageWithAttributes } from "../_app";

const StudentDashboard: NextPageWithAttributes = () => {
  return <div></div>;
};

StudentDashboard.isPublic = true;
StudentDashboard.getLayout = getStudentLayout;
export default StudentDashboard;
