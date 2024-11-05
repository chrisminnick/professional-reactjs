import { useState } from 'react';
import Aquarium from './Aquarium';
import Pet from './Pet';

import './App.css';

function App() {
  const [pets, setPets] = useState([]);

  function movePets() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.ceil(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
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

  function addPet(newPet) {
    const newPetList = [...pets, newPet];
    setPets(newPetList);
  }
  return (
    <>
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
      <button
        onClick={() =>
          addPet({
            id: 0,
            name: 'Frank',
            type: 'cat',
            position: { x: 0, y: 0 },
          })
        }
      >
        Add a Pet
      </button>
      <button onClick={() => movePets()}>Move the Pets</button>
    </>
  );
}

export default App;
