import "./App.css";
import Overview from "./components/Overview.js";
import { useState } from "react";

function App() {
  const [tasksState, setTasks] = useState([]);
  const [taskState, setTask] = useState({});
  const [inputText, setText] = useState("");
  const [idState, setId] = useState(0);

  return (
    <div>
      <Input
        inputText={inputText}
        setText={setText}
        setTasks={setTasks}
        tasksState={tasksState}
        idState={idState}
        setId={setId}
        setTask={setTask}
        taskState={taskState}
      />
      <Overview tasksState={tasksState} setTasks={setTasks} />
    </div>
  );
}
//!Deleting one task deletes all

function Input(props) {
  const {
    inputText,
    setText,
    setTasks,
    tasksState,
    idState,
    setId,
    setTask,
    taskState,
  } = props;

  return (
    <div>
      <div>{idState}</div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        type="text"
        id="taskInput"
        name="taskInput"
      ></input>
      <button
        onClick={(e) => {
          setTask({ task: inputText, id: idState });
          setTasks([...tasksState, taskState]);
          setId(idState + 1);
          //!below not working
          // setTasks([...taskState, { task: inputText, id: idState }]);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
