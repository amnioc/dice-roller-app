const DiceCount = (props) => {
  const { setDiceCount } = props;

  return (
    <form className="dice-count-form">
      <label>
        {" "}
        How many die are you throwing?
        <input
          type="number"
          id="dice_count"
          name="dice_count"
          aria-label="how many dice"
          min="1"
          className="dice-input"
          onChangeCapture={(event) => {
            setDiceCount(parseInt(event.target.value));
          }}
        ></input>
      </label>
    </form>
  );
};

export default DiceCount;
