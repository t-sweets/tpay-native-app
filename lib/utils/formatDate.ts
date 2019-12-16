/**
 * 日時のフォーマットを行う便利関数
 * @param Date date
 * @param string format - (default: `hh:mm`)
 * @return e.g. `11:00`
 */
const formatDate = (date: Date, format = "hh:mm") => {
  format = format.replace(/YYYY/g, `${date.getFullYear()}`);
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ("0" + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/E/g, getDayStrFormInt(date.getDay()));
  format = format.replace(/M/g, `${date.getMonth() + 1}`);
  format = format.replace(/D/g, `${date.getDate()}`);
  format = format.replace(/h/g, `${date.getHours()}`);
  format = format.replace(/m/g, `${date.getMinutes()}`);
  format = format.replace(/s/g, `${date.getSeconds()}`);
  return format;
};

const getDayStrFormInt = (
  dayIndex: number,
  format: "Japanese" | "English" | "EngFull" = "Japanese"
) => {
  const ja = ["日", "月", "火", "水", "木", "金", "土"];
  const en = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const enFull = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return format === "Japanese"
    ? ja[dayIndex]
    : format === "English"
    ? en[dayIndex]
    : format === "EngFull"
    ? enFull[dayIndex]
    : "";
};

/**
 * 言語に適した形でフォーマットをして文字列で返す
 *
 * @param Date date
 * @return e.g. `2019年10月24日`
 */
const formatDateYMDByLang = (date: Date) => {
  // Note: 言語を取得してフォーマットを決める
  const format = {
    ja: "YYYY年MM月DD日 hh:mm"
  };

  return formatDate(date, format.ja);
};

export { formatDate, formatDateYMDByLang };
