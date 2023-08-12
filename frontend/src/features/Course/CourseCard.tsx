import Button from "@/components/buttons/Button";
import Image from "next/image";
import Link from "next/link";
import { BiBookmark, BiChevronRightCircle } from "react-icons/bi";
import { BsClock } from "react-icons/bs";

type Course = {
  name: string;
  instructor: {
    name: string;
    img: string;
    id: string;
  };
  description: string;
  img: string;
  id: string;
  pending: number;
};

type CourseCardProps = {
  course: Course;
};

const CourseCard = ({
  course: { name, instructor, description, id, pending, img },
}: CourseCardProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-white p-3 shadow-md transition-all hover:-translate-y-2">
      <div className="relative">
        <Image
          src={img}
          alt={name}
          height="240"
          width="240"
          className="h-40 w-full rounded-lg object-cover"
        />
        <div className="absolute bottom-2 left-2 flex items-center rounded-md bg-orange-400 px-2 py-1 text-xs text-white">
          <BsClock className="mr-2" /> {pending} Quizzes
        </div>
      </div>
      <Link
        href={`/student/instructors/${instructor.id}`}
        className="my-3 inline-flex items-center space-x-2 text-sm text-blue-600 transition-all hover:text-blue-700"
      >
        <Image
          src={instructor.img}
          alt={instructor.name}
          height={80}
          width={80}
          className="aspect-square w-6 rounded-full object-cover"
        />
        <div>{instructor.name}</div>
      </Link>
      <h3 className="text font-medium">{name}</h3>
      <p className="mt-1 line-clamp-2 flex-1 text-sm text-slate-500">
        {description}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <Button className="rounded-full">
          <span className="mr-2">Check it Out</span>
          <BiChevronRightCircle size={20} />
        </Button>
        <Button variant="light" className="rounded-full">
          <BiBookmark />
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
