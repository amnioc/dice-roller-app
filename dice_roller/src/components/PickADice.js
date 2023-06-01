const PickADice = (props) => {
  const { setNewNumber, diceCount, setAllRolls, setChosenDie } = props;
  let total = [];
  let subTotal = 0;
  const rollFunction = (diceCount, diceSides) => {
    setChosenDie(diceSides);
    total = [];
    for (let i = 1; i <= diceCount; i++) {
      const thisRoll = Math.floor(Math.random() * (diceSides - 1 + 1) + 1);
      total.push(thisRoll);
      subTotal += thisRoll;
    }
    setNewNumber(subTotal);
    setAllRolls(total);
  };

  return (
    <section id="DiceSelection">
      <button onClick={() => rollFunction(diceCount, 4)}>4-sides</button>
      <button onClick={() => rollFunction(diceCount, 6)}>6-sides</button>
      <button onClick={() => rollFunction(diceCount, 8)}>8-sides</button>
      <button onClick={() => rollFunction(diceCount, 10)}>10-sides</button>
      <button onClick={() => rollFunction(diceCount, 12)}>12-sides</button>
      <button onClick={() => rollFunction(diceCount, 20)}>20-sides</button>
    </section>
  );
};

export default PickADice;
