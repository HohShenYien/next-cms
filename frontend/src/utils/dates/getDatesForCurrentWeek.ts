import dayjs, { Dayjs } from "dayjs";

export type CustomDate = {
  shortDay: string;
  date: string;
  obj: Dayjs;
};

const getDatesForCurrentWeek = () => {
  const today = dayjs(); // Get current date
  const startOfWeek = today.startOf("week"); // Calculate start of the week (Monday)

  const dates: CustomDate[] = [];
  for (let i = 1; i < 7; i++) {
    const cur = startOfWeek.add(i, "day");
    // Generate dates for Monday to Saturday
    dates.push({
      shortDay: cur.format("ddd"),
      date: cur.format("DD MMM"),
      obj: cur,
    });
  }

  return dates;
};

export default getDatesForCurrentWeek;
