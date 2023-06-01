const Description = () => {
  return (
    <section id="description" aria-label="app description">
      <h2>Welcome!</h2>
      <img
        src="https://images.unsplash.com/photo-1625173925005-0043774fe954?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
        alt="green dice on white background"
        id="description-image"
      />
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
