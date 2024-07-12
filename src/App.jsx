import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";

function App() {
  const [score, setScore] = useState(0);

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <>
      <Header score={score} />
      <Gameboard handleScore={handleScore} />
    </>
  );
}

export default App;
