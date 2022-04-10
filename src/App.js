import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Activity from "./pages/activity.pages";
import TaskList from "./pages/talklist.pages";
import Tasks from "./pages/tasks.pages";

function App() {
  return (
    <Router>
      <div>
        <nav className="m-2">
          <ul className="flex flex-row justify-around">
            <li>
              <Link to="/activity">Activity</Link>
            </li>
            <li>
              <Link to="/tasklist">TaskList</Link>
            </li>
            <li>
              <Link to="/task">Tasks</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/activity" element={<Activity />}></Route>
          <Route path="/tasklist" element={<TaskList />} />
          <Route path="/task" element={<Tasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
