import NiceLink from "@/components/links/NiceLink";
import Image from "next/image";
import Link from "next/link";
import { FaBell, FaChalkboardTeacher } from "react-icons/fa";
import { IoChevronForwardCircleSharp } from "react-icons/io5";

const courses = [
  {
    name: "Database Security",
    img: "/random-image.jpg",
    description: "Learning about managing database security in MSSQL",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: 2,
    },
    pending: 2,
    id: "asdasd",
  },
  {
    name: "Database Security",
    img: "/random-image.jpg",
    description: "Learning about managing database security in MSSQL",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: 2,
    },
    pending: 2,
    id: "asdasd",
  },
  {
    name: "Database Security",
    img: "/random-image.jpg",
    description: "Learning about managing database security in MSSQL",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: 2,
    },
    pending: 2,
    id: "asdasd",
  },
];

const SimpleCourseGrid = () => {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between ">
        <h3 className="text-xl font-semibold">Your Courses</h3>
        <NiceLink href="/student/courses" className="flex items-center">
          View All <IoChevronForwardCircleSharp size={20} className="ml-2" />
        </NiceLink>
      </div>
      <div className="grid grid-cols-3 gap-6 pl-4">
        {courses.map((course, idx) => (
          <div key={idx}>
            <div className="overflow-hidden rounded-md border-2 border-gray-200 bg-white px-4 py-3 shadow-sm">
              <div className="relative mx-auto aspect-square w-24">
                <Image src={course.img} alt={course.name} fill />
              </div>
              <div className="mt-3">
                <h4 className="mb-2 text-center font-medium">
                  <NiceLink href={`/student/course/${course.id}`}>
                    {course.name}
                  </NiceLink>
                </h4>
                <div className="mb-2 line-clamp-2 text-center text-sm text-slate-500">
                  {course.description}
                </div>
                <div className="mb-1 flex items-center space-x-2 text-sm">
                  <FaChalkboardTeacher className="text-blue-600" />
                  <NiceLink
                    href={`/student/instructor/${course.instructor.id}`}
                  >
                    {course.instructor.name}
                  </NiceLink>
                </div>
                <div className="flex items-center space-x-2 text-sm font-light">
                  <FaBell className="text-blue-600" />
                  <div>
                    <b className="font-semibold">{course.pending}</b> pending
                    quizzes...
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCourseGrid;
