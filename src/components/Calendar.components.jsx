import { CalendarIcon } from "@heroicons/react/solid";

function Date() {
  return (
    <p>
      <span className="flex flex-row justify-evenly">
        <span>25 Feb</span>
        <CalendarIcon className="h-6 w-6 text-slate-500 pl-2" />
      </span>
    </p>
  );
}

export default Date;
