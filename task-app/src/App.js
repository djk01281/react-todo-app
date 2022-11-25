import "./App.css";
import Overview from "./components/Overview.js";
import { useState } from "react";

function App() {
  const [taskState, setTasks] = useState([1, 2]);
  const [inputText, setText] = useState("");

  return (
    <div>
      <Input
        inputText={inputText}
        setText={setText}
        setTasks={setTasks}
        taskState={taskState}
      />
      <Overview taskState={taskState} />
    </div>
  );
}

function Input(props) {
  const { inputText, setText, setTasks, taskState } = props;

  return (
    <div>
      <div>{taskState}</div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        id="taskInput"
        name="taskInput"
      ></input>
      <button onClick={setTasks([...taskState, inputText])}></button>
    </div>
  );
}

export default App;
