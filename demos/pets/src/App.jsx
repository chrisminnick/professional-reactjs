import { useState } from 'react';
import Aquarium from './Aquarium';
import Pet from './Pet';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function AppHelper() {
  return <p>Just a helpful little component.</p>;
}
function App() {
  const [pets, setPets] = useState([]);

  function movePets() {
    function animate() {
      let newPets = [];
      pets.forEach((pet, index) => {
        const petPosition = {
          x: pet.position.x + getRandomInt(-10, 10),
          y: pet.position.y + getRandomInt(-10, 10),
        };
        newPets[index] = { ...pet, position: petPosition };
        console.log(newPets);
      });
      setPets([...newPets]);
    }
    setInterval(animate, 200);
  }

  function addPet(e) {
    e.preventDefault();
    console.log(pets);
    const newPet = {
      id: uuidv4(),
      name: e.target[0].value,
      type: e.target[1].value,
      position: { x: getRandomInt(0, 50), y: getRandomInt(0, 50) },
    };
    const newPetList = [...pets, newPet];
    setPets(newPetList);
  }
  return (
    <>
      <AppHelper />
      <Aquarium>
        {pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            type={pet.type}
            position={pet.position}
          />
        ))}
      </Aquarium>
      <form onSubmit={(e) => addPet(e)}>
        Pet Name: <input type="text" name="Pet Name" required></input>
        <br />
        <select required>
          <option>Select Pet Type</option>
          <option>Cat</option>
          <option>Dog</option>
          <option>Bird</option>
          <option>Fish</option>
        </select>
        <br />
        <button type="submit">Add a Pet</button>
      </form>
      <button onClick={() => movePets()}>Move the Pets</button>
    </>
  );
}

export default App;
