function Overview(props) {
  const { tasksState } = props;
  return (
    <div>
      {tasksState.map((item) => {
        return <div>{item.task}</div>;
      })}
    </div>
  );
}

export default Overview;
