import { useState } from "react";
import "./style.css";

export default function App() {
  const [initialData, setInitialdata] = useState(0);
  const increaseValue = () => {
    setInitialdata(initialData + 1);
  };
  const decreaseValue = () => {
    setInitialdata(initialData);
  };
  const resetValue = () => {
    setInitialdata(0);
  };
  return (
    <div className="App">
      <h1>{initialData}</h1>
      <button
        type="submit"
        onClick={increaseValue}
        className="btn btn-success btn-circle btn-sm"
      >
        start
      </button>
      <button
        type="submit"
        onClick={decreaseValue}
        className="btn btn-danger btn-circle btn-sm"
      >
        Stop
      </button>
      <button
        type="submit"
        onClick={resetValue}
        className="btn btn-dark btn-circle btn-sm"
      >
        Reset
      </button>
    </div>
  );
}
