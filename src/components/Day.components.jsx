function Day(props) {
  return (
    <>
      <p className="bg-white p-2 rounded-md">
        {props.name}
        <br />
        {props.num}
      </p>
    </>
  );
}

export default Day;
