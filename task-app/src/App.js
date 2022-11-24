import "./App.css";
import Overview from "./components/Overview.js";
import { useState } from "react";

function App() {
  const [taskState, setTasks] = useState([1, 2, 3]);
  const [inputText, setText] = useState("");

  return (
    <div>
      <Input inputText={inputText} setText={setText}></Input>
      <div class="Overview-mockup">{inputText}</div>
      <Overview tasks={taskState} />
    </div>
  );
}

function Input(props) {
  const { inputText, setText } = props;

  return (
    <div>
      <input type="text" id="taskInput" name="taskInput"></input>
      <Button
        onClick={() => {
          setText("mockup");
        }}
      ></Button>
    </div>
  );
}
function Button(props) {
  return <button onClick={props.onClick}></button>;
}
export default App;
