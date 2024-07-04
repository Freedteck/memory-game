import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/cards.css";

const Cards = ({ updateScore, handleBestScore }) => {
  const url = `https://www.amiiboapi.com/api/amiibo`;
  const [amiibos, setAmiibos] = useState([]);
  let isMounted = false;

  useEffect(() => {
    const getAmiibos = async () => {
      console.log("Fetching from URL:", url); // Log the URL being fetched
      await fetch(url, { mode: "cors" })
        .then((response) => response.json())
        .then((data) => {
          console.log("Data fetched:", data); // Log fetched data
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
      isMounted = true;
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
          key={`${amiibo.head}-${amiibo.tail}`} // Ensure unique keys
          image={amiibo.image}
          name={amiibo.character}
          shuffleCards={() => shuffleCards(amiibo.character)}
        />
      ))}
    </div>
  );
};

export default Cards;
