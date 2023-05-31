const DiceResult = (props) => {
  const { number, allRolls } = props;
  return (
    <section className="roll-result">
      You got a...<span id="final-roll">{number}</span>{" "}
      <article>
        Made up of...
        <ul className="throws-list">
          <li>
            <span id="word-throw">throw</span>{" "}
            <span id="word-was">was a...</span>
          </li>
          {allRolls.map((roll, index) => {
            return (
              <li key={index}>
                <span className="throw-number">{index + 1}</span>{" "}
                <span className="throw-result">{roll}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default DiceResult;
