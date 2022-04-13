import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, removePlant, changePlantPrice}) {
  console.log(plants)

  const renderPlants = plants.map(plant => <PlantCard 
    plant={plant}
    key={plant.id}
    id={plant.id}
    image={plant.image}
    name={plant.name}
    price={plant.price} 
    removePlant={removePlant}
    changePlantPrice={changePlantPrice}
    />)

  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
