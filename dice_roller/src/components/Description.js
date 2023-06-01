const Description = () => {
  return (
    <section id="description" aria-label="app description">
      <h3>Welcome!</h3>
      <br />
      1. Please <span className="focus-word"> enter your number</span> of dice
      being thrown (if empty, we'll assume 1). <br /> 2. Then, choose how many
      sides your dice have!
      <br />
      <span className="focus-word"> *May the Odds Be in Your Favour*</span>
    </section>
  );
};

export default Description;
