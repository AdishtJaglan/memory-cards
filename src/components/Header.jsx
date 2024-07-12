import "../styles/Header.css";

export default function Header() {
  return (
    <div className="nav">
      <h1 className="heading">Pokemon Memory Cards</h1>

      <p>
        Get points by clicking on a pokemon but dont click on any more than
        once!
      </p>

      <div className="score-keeper">
        <p>Score: 0</p>
        <p>High Score: 0</p>
      </div>
    </div>
  );
}
