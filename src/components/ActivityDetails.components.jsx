import { CheckIcon } from "@heroicons/react/outline";

function ActivityDetails() {
  return (
    <>
      <div className="h-54 m-4 p-4 space-y-4 rounded-md bg-white">
        <div>
          <h1>Maret's Target</h1>
          <span>10 Target</span>
        </div>

        <div className="inline-flex items-baseline">
          <CheckIcon className="h-6 w-6 text-slate-500" />
          <span>Mythical Glory on Land of Dawn</span>
        </div>

        <div className="inline-flex items-baseline">
          <CheckIcon className="h-6 w-6 text-slate-500" />
          <span>Upload 4 shots & 1 product on Dribble</span>
        </div>
      </div>
    </>
  );
}

export default ActivityDetails;
