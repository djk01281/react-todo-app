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

//!recreate Input with forms

function Input(props) {
  const { inputText, setText, setTasks, taskState } = props;

  return (
    <form
      onSubmit={() => {
        setTasks([...taskState, inputText]);
      }}
    >
      <div>{taskState}</div>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        id="taskInput"
        name="taskInput"
      ></input>
    </form>
  );
}

export default App;
