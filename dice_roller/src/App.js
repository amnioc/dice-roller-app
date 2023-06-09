import "./App.css";
import Header from "./components/Header";
import Description from "./components/Description";
import { useState } from "react";
import PickADice from "./components/PickADice";
import ResetButton from "./components/ResetButton";
import DiceResult from "./components/DiceResult";
import DiceCount from "./components/DiceCount";

function App() {
  const [number, setNewNumber] = useState("");
  const [chosenDie, setChosenDie] = useState("");
  const [diceCount, setDiceCount] = useState("1");
  const [allRolls, setAllRolls] = useState([]);

  return (
    <div className="App">
      <Header />
      <Description />
      <DiceCount setDiceCount={setDiceCount} />
      <PickADice
        setNewNumber={setNewNumber}
        number={number}
        diceCount={diceCount}
        setAllRolls={setAllRolls}
        setChosenDie={setChosenDie}
      />
      <DiceResult
        number={number}
        allRolls={allRolls}
        chosenDie={chosenDie}
        diceCount={diceCount}
      />
      <ResetButton setNewNumber={setNewNumber} setAllRolls={setAllRolls} />
    </div>
  );
}

export default App;
