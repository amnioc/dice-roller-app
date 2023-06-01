const DiceResult = (props) => {
  const { number, allRolls, chosenDie, diceCount } = props;
  return (
    <section className="roll-result" aria-label="roll results">
      You got a total of...<span id="final-roll">{number}</span>{" "}
      {number === 20 && chosenDie === 20 && diceCount === 1 ? (
        <h3>
          <span aria-label="celebration emoji">&#127881;</span> Nat 20!!{" "}
          <span aria-label="celebration emoji">&#127881;</span>{" "}
        </h3>
      ) : null}
      {number === 1 && chosenDie === 20 && diceCount === 1 ? (
        <h3>
          <span aria-label="gritted teeth emoji"> &#128556;</span> Crit 1, oh
          no... <span aria-label="gritted teeth emoji"> &#128556;</span>{" "}
        </h3>
      ) : null}
      <details aria-label="results breakdown">
        <summary>Result Breakdown</summary>
        <ul className="throws-list">
          {allRolls.map((roll, index) => {
            return (
              <li key={index}>
                <span
                  className="throw-result"
                  aria-label="dice emoji roll result"
                >
                  {roll}
                </span>
              </li>
            );
          })}
        </ul>
      </details>
    </section>
  );
};

export default DiceResult;
