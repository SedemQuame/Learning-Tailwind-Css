import Task from "./Task.components";

const tasks = [
  {
    image: "🏃",
    header: "Jogging In The Morning",
    subTasks: ["Inviting @synter @johny", "Bring a bottle of mineral water"],
  },
  { image: "📚", header: "Reading 'a thousand brains'", subTasks: [] },
  { image: "💻", header: "Continue Wireframe Nifty", subTasks: [] },
  {
    image: "🤝",
    header: "Meeting with Metaco Team",
    subTasks: ["@SedemQuame, @SeyramKojo", "Talk about product design"],
  },
  { image: "💻", header: "Continue work with Nifty", subTasks: [] },
];

function TaskList() {
  return (
    <>
      <div className="mr-4">
        {tasks.map((task) => (
          <Task
            image={task.image}
            header={task.header}
            subTasks={task.subTasks}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
