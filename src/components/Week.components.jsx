import Day from "./Day.components";

const week = [
  { name: "Mon", num: "21" },
  { name: "Tue", num: "22" },
  { name: "Wed", num: "23" },
  { name: "Thu", num: "24" },
  { name: "Fri", num: "25" },
  { name: "Sat", num: "26" },
  { name: "Sun", num: "27" },
];

function Week() {
  return (
    <>
      <div className="flex flex-row justify-between mx-4 mt-2 pt-2">
        {week.map((day) => (
          <Day name={day.name} num={day.num} />
        ))}
      </div>
    </>
  );
}

export default Week;
