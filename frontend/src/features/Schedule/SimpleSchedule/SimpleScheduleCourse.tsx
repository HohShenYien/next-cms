import Image from "next/image";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

export type SimpleSchedule = {
  course: {
    name: string;
    img: string;
  };
  time: string;
  venue: string;
};

type SimpleScheduleCourseProps = {
  schedule: SimpleSchedule;
};

const SimpleScheduleCourse = ({ schedule }: SimpleScheduleCourseProps) => {
  return (
    <div className="flex items-center space-x-3 rounded-md border-2 border-gray-200 bg-white/50 px-2 py-1">
      <Image
        src={schedule.course.img}
        height={48}
        width={48}
        alt={schedule.course.name}
        className="aspect-square rounded-lg object-cover"
      />
      <div>
        <div className="font-medium">{schedule.course.name}</div>
        <div className="flex text-sm text-slate-500">
          <AiOutlineClockCircle className="mr-1" />
          {schedule.time}
        </div>
        <div className="flex text-sm text-slate-500">
          <FiMapPin className="mr-1" />
          {schedule.venue}
        </div>
      </div>
    </div>
  );
};

export default SimpleScheduleCourse;
