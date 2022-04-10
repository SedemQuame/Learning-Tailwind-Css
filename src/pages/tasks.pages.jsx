import TaskHeader from "../components/TaskHeader.components";
import TaskList from "../components/TaskList.components";
import Timer from "../components/Timer.components";
import Week from "../components/Week.components";

function Tasks() {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <TaskHeader />
        <Week />
        <div className="flex justify-between p-4">
          <TaskList />
          <Timer />
        </div>
      </div>
    </>
  );
}

export default Tasks;
