import getDatesForCurrentWeek, {
  CustomDate,
} from "@/utils/dates/getDatesForCurrentWeek";
import { clsx } from "@mantine/core";
import dayjs from "dayjs";
import Image from "next/image";
import { useMemo, useState } from "react";
import SimpleScheduleCourse, { SimpleSchedule } from "./SimpleScheduleCourse";

const schedules: SimpleSchedule[] = [
  {
    course: {
      name: "Database Security",
      img: "/random-image.jpg",
    },
    time: "10:45 AM - 12:45 PM",
    venue: "B-08-01 | APU Campus",
  },
  {
    course: {
      name: "Database Security",
      img: "/random-image.jpg",
    },
    time: "10:45 AM - 12:45 PM",
    venue: "B-08-01 | APU Campus",
  },
  {
    course: {
      name: "Database Security",
      img: "/random-image.jpg",
    },
    time: "10:45 AM - 12:45 PM",
    venue: "B-08-01 | APU Campus",
  },
];

const SimpleSchedule = () => {
  const today = dayjs().day();
  const [selectedDay, setSelectedDay] = useState(today);

  const dates = useMemo(() => {
    return getDatesForCurrentWeek();
  }, [today]);
  const select = (date: CustomDate) => {
    setSelectedDay(date.obj.day());
  };

  return (
    <div className="px-4 py-4">
      <h3 className="text-lg font-medium">Your Schedule this week</h3>
      <div className="mt-3 flex space-x-1 rounded-lg bg-white px-1 py-2 shadow-sm">
        {dates.map((date, idx) => {
          const isSelected = selectedDay == date.obj.day();
          return (
            <button
              key={idx}
              className={clsx(
                "flex-1 space-y-2 rounded-lg px-1 py-2 transition-all",
                {
                  "bg-blue-600 text-white": isSelected,
                  "bg-transparent hover:bg-blue-50 active:bg-blue-100":
                    !isSelected,
                }
              )}
              onClick={() => select(date)}
            >
              <div className="text-sm">{date.shortDay}</div>
              <div className="font-semibold">{date.date.slice(0, 2)}</div>
            </button>
          );
        })}
      </div>
      <div className="mt-4 space-y-2">
        {schedules.map((schedule, idx) => (
          <SimpleScheduleCourse schedule={schedule} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SimpleSchedule;
