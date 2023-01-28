import { useState, useEffect } from 'react';
import SolarSystem from './components/SolarSystem';
import Asteroid from './components/Asteroid';
import './App.css';

function App() {
  const today = new Date().toISOString().slice(0, 10);
  const key = '66XxLATG5cxQiXmDdDeuAJyVsqIoPqnXv0Vg90dk';
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&api_key=${key}`;

  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    async function getAsteroids() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setAsteroids(data.near_earth_objects[today]);
      } catch (error) {
        console.log(error);
      }
    }
    getAsteroids();
  }, [url, today]);

  return (
    <SolarSystem>
      {asteroids.map((asteroid) => (
        <Asteroid element={asteroid} />
      ))}
    </SolarSystem>
  );
}

export default App;
