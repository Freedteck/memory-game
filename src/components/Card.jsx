const Card = ({ image, name, shuffleCards }) => {
  return (
    <button className="card" onClick={shuffleCards}>
      <div className="img">
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
    </button>
  );
};

export default Card;
