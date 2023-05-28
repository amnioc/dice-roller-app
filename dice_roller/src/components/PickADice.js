const PickADice = (props) => {
  const { setNewNumber } = props;

  const roll4Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (4 - 1 + 1) + 1);
    });
  };

  const roll6Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (6 - 1 + 1) + 1);
    });
  };

  const roll8Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (8 - 1 + 1) + 1);
    });
  };

  const roll10Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (10 - 1 + 1) + 1);
    });
  };

  const roll12Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    });
  };

  const roll20Sider = () => {
    setNewNumber(() => {
      return Math.floor(Math.random() * (20 - 1 + 1) + 1);
    });
  };

  return (
    <section id="DiceSelection">
      <button onClick={() => roll4Sider()}>4-sides</button>
      <button onClick={() => roll6Sider()}>6-sides</button>
      <button onClick={() => roll8Sider()}>8-sides</button>
      <button onClick={() => roll10Sider()}>10-sides</button>
      <button onClick={() => roll12Sider()}>12-sides</button>
      <button onClick={() => roll20Sider()}>20-sides</button>
    </section>
  );
};

export default PickADice;
