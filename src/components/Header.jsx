/* eslint-disable react/prop-types */
import "../styles/Header.css";

export default function Header({ score }) {
  let highScore = 0;

  if (score > highScore) highScore = score;

  return (
    <div className="nav">
      <h1 className="heading">Pokemon Memory Cards</h1>

      <p>
        Get points by clicking on a pokemon but dont click on any more than
        once!
      </p>

      <div className="score-keeper">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}
