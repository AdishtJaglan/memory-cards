import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import createArray, { shuffleArray } from "./utils";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState();
  const [clicked, setClicked] = useState(new Array(8).fill(false));
  const [ids, setIds] = useState(createArray());

  const handleScore = (index) => {
    if (!clicked[index]) {
      const prevScore = score;
      const newScore = score + 1;
      setScore(newScore);
      setHighScore(newScore > prevScore ? newScore : prevScore);

      const newClicked = [...clicked];
      newClicked[index] = true;
      const { newIdsArray, newClickedArray } = shuffleArray(ids, newClicked);
      setIds(newIdsArray);
      setClicked(newClickedArray);
    } else {
      setScore(0);
      setIds(createArray());
      setClicked(new Array(8).fill(false));
    }
  };

  return (
    <>
      <Header score={score} highScore={highScore} />
      <Gameboard handleScore={handleScore} clicked={clicked} ids={ids} />
    </>
  );
}

export default App;
