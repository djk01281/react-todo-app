function Overview(props) {
  const { taskState } = props;
  return (
    <div>
      {taskState.map((item, i) => {
        return <div>{taskState[i]}</div>;
      })}
    </div>
  );
}

export default Overview;
