const DiceCount = (props) => {
  const { setDiceCount } = props;

  return (
    <form>
      <label>
        {" "}
        How many die are you throwing?
        <input
          type="number"
          id="dice_count"
          name="dice_count"
          min="1"
          onChangeCapture={(event) => {
            setDiceCount(parseInt(event.target.value));
          }}
        ></input>
      </label>
    </form>
  );
};

export default DiceCount;