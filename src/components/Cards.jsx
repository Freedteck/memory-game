import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/cards.css";

const Cards = ({ updateScore, handleBestScore }) => {
  const url = `http://www.amiiboapi.com/api/amiibo`;
  const [amiibos, setAmiibos] = useState([]);
  let isMounted = true;

  useEffect(() => {
    const getAmiibos = async () => {
      await fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
          const amiibo = data.amiibo.slice(1, 13);
          setAmiibos(amiibo);
        })
        .catch((error) => {
          console.log("can't fetch", error);
        });
    };

    if (isMounted) {
      getAmiibos();
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const shuffleCards = (character) => {
    setAmiibos((prevAmiibos) => {
      const shuffledCharacters = [...prevAmiibos];
      for (let i = shuffledCharacters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCharacters[i], shuffledCharacters[j]] = [
          shuffledCharacters[j],
          shuffledCharacters[i],
        ];
      }
      return shuffledCharacters;
    });
    updateScore();
    handleBestScore(character);
  };

  return (
    <div className="cards">
      {amiibos.map((amiibo) => (
        <Card
          key={amiibo.head}
          image={amiibo.image}
          name={amiibo.character}
          shuffleCards={() => shuffleCards(amiibo.character)}
        />
      ))}
    </div>
  );
};

export default Cards;
