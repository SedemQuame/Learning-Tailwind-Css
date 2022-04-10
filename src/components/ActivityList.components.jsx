import ActivityDetails from "./ActivityDetails.components";
import Pane from "./Pane.components";

function ActivityList() {
  return (
    <>
      <h1>Activity List</h1>
      <p className="text-blue-600">View All</p>

      <ActivityDetails />
      <ActivityDetails />
      <div className="flex justify-between -mt-8">
        <button className="bg-sky-500/100 text-white p-2 mx-20 w-60 rounded-md">
          View All
        </button>
      </div>

      <div className="grid justify-items-center mt-4">
        <Pane />
      </div>
    </>
  );
}

export default ActivityList;
