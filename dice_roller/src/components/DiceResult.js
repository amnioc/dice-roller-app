const DiceResult = (props) => {
  const { number, allRolls } = props;
  return (
    <section id="rollResult">
      You got a...<span id="rollNumber">{number}</span>{" "}
      <article>
        Made up of...
        <ul className="throws-list">
          <li>
            Throw <span>Number</span>
          </li>
          {allRolls.map((roll, index) => {
            return (
              <li key={roll}>
                <span className="throw-num">{index + 1}</span> {roll}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};

export default DiceResult;
