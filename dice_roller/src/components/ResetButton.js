const ResetButton = (props) => {
  const { setNewNumber, setAllRolls } = props;

  const resetScreen = () => {
    setNewNumber("");
    setAllRolls([]);
  };

  return (
    <button
      onClick={() => {
        resetScreen();
      }}
      className="button"
    >
      Clear Result
    </button>
  );
};

export default ResetButton;
