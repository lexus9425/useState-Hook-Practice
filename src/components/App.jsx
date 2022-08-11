import React, { useState } from "react";

function App() {
  //Challenge:
  //1. Given that you can get the current time using:
  let time = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const [currentTime, getTime] = useState(0);

  //Show the latest time in the <h1> when the Get Time button
  //is pressed.

  //2. Given that you can get code to be called every second
  //using the setInterval method.
  //Can you get the time in your <h1> to update every second?

  //e.g. uncomment the code below to see Hey printed every second.
  // function sayHi() {
  //   console.log("Hey");
  // }
  // setInterval(sayHi, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={() => getTime(time)}>Get Time</button>
    </div>
  );
}

export default App;
