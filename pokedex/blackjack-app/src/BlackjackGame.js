import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import Score from "./Score";
import "./BlackjackGame.css";

/* Get a random element from an array */
function choice(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/* Get a random value, suit combination from card data. */
function getCard(values, suits) {
  const randomValue = choice(values);
  const randomSuit = choice(suits);
  return `${randomValue}${randomSuit}`;
}

/* Get numCards random cards, with no duplicates. */
function getCards(values, suits, numCards = 1) {
  const cardsSet = new Set();

  while (cardsSet.size < numCards) {
    cardsSet.add(getCard(values, suits));
  }

  return [...cardsSet];
}

/* Main game component */
function BlackjackGame({ values, suits }) {
  const [pairOfCards, setPairOfCards] = useState([]);

  useEffect(() => {
    setPairOfCards(getCards(values, suits, 2));
  }, [values, suits]);

  return (
    <div className="BlackjackGame">
      <CardList cards={pairOfCards} />
      <Score cards={pairOfCards} />
    </div>
  );
}

BlackjackGame.defaultProps = {
  values: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"],
  suits: ["C", "D", "H", "S"],
};

export default BlackjackGame;
