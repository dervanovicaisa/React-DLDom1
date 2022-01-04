import "./SingleCard.css";
export default function singleCard({ card, handleChoice, flipped, disabled }) {
  const handleClickListener = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClickListener}
          alt="card back"
        />
      </div>
    </div>
  );
}
