import { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>CreatorVerse</h1>
      </div>
    </>
  );
}

export default App;
