function Overview(props) {
  const { tasksState, setTasks } = props;
  return (
    <div>
      {tasksState.map((item) => {
        return (
          <div>
            <span>{item.task}</span>
            <button
              onClick={(e) =>
                setTasks(tasksState.filter((task) => task.id !== item.id))
              }
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Overview;
