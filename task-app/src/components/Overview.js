function Overview(props) {
  const { tasks } = props;
  return (
    <div>
      {tasks.map((item, i) => {
        return <div>{tasks[i]}</div>;
      })}
    </div>
  );
}

export default Overview;
