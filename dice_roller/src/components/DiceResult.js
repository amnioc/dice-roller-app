const DiceResult = (props) => {
  const { number, allRolls } = props;
  return (
    <section className="roll-result">
      You got a...<span id="final-roll">{number}</span>{" "}
      <article>
        Made up of...
        <ul className="throws-list">
          <li>
            Throw <span>Number</span>
          </li>
          {allRolls.map((roll, index) => {
            return (
              <li key={index}>
                throw {index + 1} was a {roll}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default DiceResult;
