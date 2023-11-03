import { useState, useEffect } from 'react';
import JokeInput from './JokeInput';
import LatestJokes from './LatestJokes';

import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);
  const [newJoke, setNewJoke] = useState('');
  const [count, setCount] = useState(1);

  async function fetchJokes() {
    const response = await fetch('/data.json');
    const data = await response.json();
    setJokes(data);
  }

  useEffect(() => {
    fetchJokes();
  }, [count]);

  return (
    <div className="App">
      <h1>JokePost {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment and refresh jokes
      </button>
      <br />
      <br />
      <JokeInput
        newJoke={newJoke}
        setNewJoke={setNewJoke}
        setJokes={setJokes}
        jokes={jokes}
      />
      <p>Here's the joke you're writing: {newJoke}</p>
      <LatestJokes jokes={jokes} />
    </div>
  );
}

export default App;
