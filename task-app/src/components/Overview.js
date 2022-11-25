function Overview(props) {
  const { taskState } = props;
  return (
    <div>
      {taskState.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default Overview;
