function HighscoreInput({ handleSubmit }) {
  return (
    <div className="highscore-input">
      <h3>Enter your name to add the result to the high score list!</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your name" required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default HighscoreInput;