import ActivityList from "./../components/ActivityList.components";
import Greeting from "./../components/Greeting.components";
import Offer from "./../components/Offer.components";

function TaskList() {
  return (
    <div className="p-4 bg-slate-50">
      <Greeting />
      <Offer />
      <ActivityList />
    </div>
  );
}

export default TaskList;
