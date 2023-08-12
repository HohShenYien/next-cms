import { getStudentLayout } from "@/layouts/AppLayout";
import { NextPageWithAttributes } from "../_app";
import { Select } from "@mantine/core";
import { useState } from "react";
import CourseCard from "@/features/Course/CourseCard";

const courses = [
  {
    name: "Database Security",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: "asdf",
    },
    description:
      "A cool course that teaches you about managing security in a database as well as advanced functions like triggers",
    img: "/random-image.jpg",
    id: "fasd",
    pending: 3,
  },
  {
    name: "Database Security",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: "asdf",
    },
    description:
      "A cool course that teaches you about managing security in a database as well as advanced functions like triggers",
    img: "/random-image.jpg",
    id: "fasd",
    pending: 3,
  },
  {
    name: "Database Security",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: "asdf",
    },
    description:
      "A cool course that teaches you about managing security in a database as well as advanced functions like triggers",
    img: "/random-image.jpg",
    id: "fasd",
    pending: 3,
  },
  {
    name: "Database Security",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: "asdf",
    },
    description:
      "A cool course that teaches you about managing security in a database as well as advanced functions like triggers",
    img: "/random-image.jpg",
    id: "fasd",
    pending: 3,
  },
  {
    name: "Database Security",
    instructor: {
      name: "Dr. John Doe",
      img: "/random-image.jpg",
      id: "asdf",
    },
    description:
      "A cool course that teaches you about managing security in a database as well as advanced functions like triggers",
    img: "/random-image.jpg",
    id: "fasd",
    pending: 3,
  },
];

const StudentCourses: NextPageWithAttributes = () => {
  const [filter, setFilter] = useState("active");
  return (
    <div>
      <div className="flex items-end justify-between">
        <h1 className="text-3xl font-semibold">Courses</h1>
        <Select
          data={[
            { value: "all", label: "All Courses" },
            { value: "active", label: "Current Courses" },
            { value: "past", label: "Past Courses" },
          ]}
          value={filter}
          onChange={(val) => setFilter(val!)}
        />
      </div>
      <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {courses.map((course, idx) => (
          <CourseCard course={course} key={idx} />
        ))}
      </div>
    </div>
  );
};

StudentCourses.isPublic = true;
StudentCourses.getLayout = getStudentLayout;
export default StudentCourses;
