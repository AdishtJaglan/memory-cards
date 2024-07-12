import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import createArray, { shuffleArray } from "./utils";

function App() {
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(new Array(8).fill(false));
  const [ids, setIds] = useState(createArray());

  const handleScore = (index) => {
    if (!clicked[index]) {
      setScore(score + 1);
      const newClicked = [...clicked];
      newClicked[index] = true;
      const { newIdsArray, newClickedArray } = shuffleArray(ids, newClicked);
      setIds(newIdsArray);
      setClicked(newClickedArray);
    }
  };

  return (
    <>
      <Header score={score} />
      <Gameboard handleScore={handleScore} clicked={clicked} ids={ids} />
    </>
  );
}

export default App;
