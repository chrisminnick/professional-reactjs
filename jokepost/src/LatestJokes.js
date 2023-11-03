function LatestJokes(props) {
  return (
    <div>
      <h2>Here are the latest jokes</h2>
      {props.jokes.map((joke, index) => (
        <p key={index}>{joke.text}</p>
      ))}
    </div>
  );
}

export default LatestJokes;
