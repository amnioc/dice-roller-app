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
    >
      Clear Result
    </button>
  );
};

export default ResetButton;
