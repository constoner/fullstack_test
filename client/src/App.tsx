import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState<any[]>();
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((resData) => setData(resData));
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
            <li key={item.id}>
              <img src={item.imageSrc} alt="" />
              <div dangerouslySetInnerHTML={{ __html: item.bodyHtml }}></div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default App;
