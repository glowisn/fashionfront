import { CurrentRequestTime } from "./types";

export const getCurrentTimeParsed = () : CurrentRequestTime => {
  const krDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
  const baseTime = `${krDate.getHours() - (krDate.getMinutes() <= 40 ? 1 : 0)}00`;

  return {
    base_date: `${krDate.getFullYear()}${(krDate.getMonth() + 1).toString().padStart(2, "0")}${krDate
      .getDate()
      .toString()
      .padStart(2, "0")}`,
    base_time: baseTime,
  };
};
