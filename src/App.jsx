import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  const updateScore = () => {
    setScore((prevScore) => (prevScore += 1));
  };

  const handleBestScore = (character) => {
    if (clicked.includes(character)) {
      setBestScore((prev) => (score > prev ? score : prev));
      setClicked([]);
      setScore(0);
    } else {
      setClicked([...clicked, character]);
    }
  };

  return (
    <div className="app">
      <Header score={score} bestScore={bestScore} />
      <Cards updateScore={updateScore} handleBestScore={handleBestScore} />
    </div>
  );
}

export default App;
