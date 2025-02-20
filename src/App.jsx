import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const handleButton = () => {
    setCounter(counter + 1);
  };
  return (
    <>
      <h1>value{counter}</h1>
      <button onClick={handleButton}>increament</button>
    </>
  );
}

export default App;
