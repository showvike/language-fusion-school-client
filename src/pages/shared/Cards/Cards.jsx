import { useEffect, useState } from "react";
import Card from "../../shared/Card/Card";

const Cards = ({ api, background, heading }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, [api]);

  return (
    <div className={`h-screen ${background}`}>
      <h1 className="font-bold text-5xl text-center pt-4">{heading}</h1>
      <div className="pt-8 grid grid-cols-3 px-8 justify-items-center gap-8">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
