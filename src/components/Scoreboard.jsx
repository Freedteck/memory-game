const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="scores">
      <div>
        <p>Score: {score}</p>
        <p>Best score: {bestScore}</p>
      </div>
    </div>
  );
};

export default Scoreboard;
