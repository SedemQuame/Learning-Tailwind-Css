const hours = [
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
function Timer() {
  return (
    <>
      <div className="grid">
        {hours.map((hour) => (
          <span className="mb-5 font-light">{hour}</span>
        ))}
      </div>
    </>
  );
}

export default Timer;
