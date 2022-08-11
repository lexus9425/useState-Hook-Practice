import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);

  const time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const [currentTime, setTime] = useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={() => updateTime()}>Get Time</button>
    </div>
  );
}

export default App;
