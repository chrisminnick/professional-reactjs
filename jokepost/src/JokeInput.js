function JokeInput(props) {
  return (
    <div>
      <label>
        Enter a joke:{' '}
        <input
          id="newjoke"
          type="text"
          value={props.newJoke}
          onChange={(e) => props.setNewJoke(e.target.value)}
        />
      </label>
      <button
        onClick={() =>
          props.setJokes([...props.jokes, { text: props.newJoke }])
        }
      >
        Submit Joke
      </button>
    </div>
  );
}

export default JokeInput;
