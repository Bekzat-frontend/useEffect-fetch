import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState([]);
  const [seconds, setSeconds] = useState(0);

  const handleButton = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSecond) => prevSecond + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <h1>value:{counter}</h1>
        <button onClick={handleButton}>increament</button>
        <p>Second: {seconds}</p>

        <hr />
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h1>name: {item.name}</h1>
              <p>email: {item.email}</p>
              <p>phone: {item.phone}</p>
              <p>address: {item.address.city}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
