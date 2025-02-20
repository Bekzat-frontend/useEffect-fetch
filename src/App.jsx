import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const handleButton = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div>
        <h1>value:{counter}</h1>
        <button onClick={handleButton}>increament</button>
        <hr />
        {data.map((item) => (
          <div key={item.id}>
            <h1>name: {item.name}</h1>
            <p>email: {item.email}</p>
            <p>phone: {item.phone}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
