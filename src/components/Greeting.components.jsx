import Date from "./Calendar.components";

function Greeting() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div>
          <p>
            Welcome Back, <span></span>
          </p>
          <h3>Sedem Quame</h3>
        </div>

        <Date />
      </div>
    </>
  );
}

export default Greeting;
