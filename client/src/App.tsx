import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setData(resData);
      });
  }, []);
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a href="#!" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.bodyHtml}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;
