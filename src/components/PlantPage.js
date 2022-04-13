import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

const [plantArr, setPlantArr] = useState([])
const [searchPlant, setSearchPlant] = useState("")

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(r => r.json())
  .then(plants=> setPlantArr(plants))
}, [])

// console.log(plantArr)

const addNewPlant = (newObj) => {
  const configObj = {
    method: "POST",
    headers: {
      'Content-Type': "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(newObj)
  }

  fetch("http://localhost:6001/plants", configObj)
  .then(r => r.json())
  .then(data => setPlantArr([...plantArr, newObj]))
}

const filterPlants = () => {
  const filteredArr = plantArr.filter(plant => plant.name.toLowerCase().includes(searchPlant))
  return (filteredArr)
}

const removePlant = (id) => {
  fetch(`http://localhost:6001/plants/${id}`, {method: "DELETE"})
  .then(r => r.json())
  .then(() => {
    const delArr = plantArr.filter(plant => plant.id !== id)
    setPlantArr(delArr)
  })
}

const changePlantPrice = (id, newObj) => {
console.log(id, newObj)

  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newObj)
  }
  fetch(`http://localhost:6001/plants/${id}`, configObj)
  .then(r => r.json())
  .then(data => {
    console.log(data)
    const updatedArr = plantArr.map(plant => plant.id === id ? data : plant)
    console.log(updatedArr)
    setPlantArr(updatedArr)
  })


}

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search setSearchPlant={setSearchPlant}/>
      <PlantList changePlantPrice={changePlantPrice} removePlant={removePlant} plants={filterPlants()}/>
    </main>
  );
}

export default PlantPage;
