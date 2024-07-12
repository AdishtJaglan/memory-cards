/* eslint-disable react/prop-types */
import "../styles/Header.css";

let displayHighScore = 0;

export default function Header({ score, highScore = 0 }) {
  return (
    <div className="nav">
      <h1 className="heading">Pokemon Memory Cards</h1>

      <p>
        Get points by clicking on a pokemon but dont click on any more than
        once!
      </p>

      <div className="score-keeper">
        <p>Score: {score}</p>
        <p>
          High Score:{" "}
          {displayHighScore > highScore
            ? displayHighScore
            : (displayHighScore = highScore) && displayHighScore}
        </p>
      </div>
    </div>
  );
}
