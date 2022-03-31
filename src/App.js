import { useState } from "react";
import "./styles.css";
import Count from "./class";
// import Signin from "./signin";
import Signin from "./signInClass";
import Lifecycle from "./lifeCycle";
import AboutUs from "./aboutUs";

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AboutUs />
      {/* <Lifecycle /> */}
      {/* <Signin /> */}
      {/* <Signin /> */}
      {/* <Count /> */}
      {/* <h1>Count incrementer </h1>
      <br />
      {count}
      <br />

      <button onClick={() => setCount((oldCount) => ++oldCount)}>
        count +
      </button>
      <button onClick={() => setCount((oldCount) => --oldCount)}>count-</button> */}
    </div>
  );
}
