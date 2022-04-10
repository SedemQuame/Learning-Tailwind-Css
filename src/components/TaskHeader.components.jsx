import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { CalendarIcon } from "@heroicons/react/outline";

function TaskHeader() {
  return (
    <>
      <div className="flex flex-row justify-around">
        <ArrowNarrowRightIcon className="h-6 w-6 " />
        <span>February</span>
        <CalendarIcon className="h-6 w-6 " />
      </div>
    </>
  );
}

export default TaskHeader;
