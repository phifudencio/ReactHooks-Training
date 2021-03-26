import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(
    0
  ); /* First Value(count) is the value of the state
 the second value is the function to update the state. */

  return (
    <div className="App">
      <button onClick={() =>{
        setCount(c => c + 1);
        setCount2(c => c + 1);
      }}>+</button>
      {/* () => setCount((c) => c + 1)
      } */}
      {/* ...currentState to keep other values from the object 
     count2: currentState.count2*/}
      {/* setCount(currentState => ({...currentState, count: currentState.count + 1 })) */}
      {/* Updater function takes a parameter, the current state of it , and do somenthing.  */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>Count 1:{count}</div>
      <div>Count 2:{count2}</div>
    </div>
  );
}

export default App;