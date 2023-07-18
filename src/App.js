import "./index.css";
import { useState } from "react";
import Switch from "./component/Switch";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <h3>SWITCH</h3>
      <div className="container">
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
        <Switch status={status} />
      </div>
    </div>
  );
}

export default App;
