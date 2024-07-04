import Scoreboard from "./Scoreboard";
import "../styles/header.css";

const Header = ({ score, bestScore }) => {
  return (
    <header>
      <div className="brand">
        <h1>Amiibo Memory Match</h1>
        <p>
          Think you have an <strong>eidetic</strong> memory? Prove it in Amiibo
          Memory Match and see if you can recall each character's position with
          perfect precision!
        </p>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
