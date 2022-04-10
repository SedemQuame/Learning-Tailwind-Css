function Activity(props) {
  return (
    <>
      <div className="h-32 w-32 p-4 text-center">
        <div className="h-20 w-20 bg-white rounded-full pt-4">
          <p className="text-6xl">{props.src}</p>
        </div>
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default Activity;
