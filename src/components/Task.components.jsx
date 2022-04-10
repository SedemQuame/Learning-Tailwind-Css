function Task(props) {
  return (
    <>
      <div className="flex flex-row mb-4 p-2 bg-white rounded-md">
        <p className="basis-1/6 text-2xl h-50 p-1 m-2 bg-slate-200 rounded-md">
          {props.image}
        </p>
        <div className="basis-5/6">
          <h4 className="font-semibold">{props.header}</h4>
          {props.subTasks.map((task) => (
            <p className="font-light">- {task}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Task;
