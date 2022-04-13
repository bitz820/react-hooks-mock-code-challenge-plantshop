import React, {useState} from "react";

function PlantCard({id, name, image, price, removePlant, changePlantPrice, plant}) {
const [inStock, setInStock] = useState(true)
const [newPrice, setNewPrice] = useState(price)

const toggleStock = () => {
  setInStock(inStock => !inStock)
}

const plantInStock = inStock ? (
  <button onClick={toggleStock} className="primary">In Stock</button>
) : (
  <button onClick={toggleStock}>Out of Stock</button>
)

const handleDelete = () => {
  removePlant(id)
}

const handlePriceChange = (e) => {
  setNewPrice(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(plant)
  const newObj = {
    ...plant,
    price: parseInt(newPrice),
  }
  changePlantPrice(id, newObj)
}

  return (
    <li key={id} className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <form onSubmit={handleSubmit}>
        <input onChange={handlePriceChange} type="text" placeholder={`Current Price is $${price}`}/>
        <button>Confirm Price Change</button>
      </form>
      <p>Price: ${price}</p>
      {plantInStock}
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
