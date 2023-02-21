import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HomePage from "./Pages/Home";
import NavBar from "./Pages/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-100vh">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
