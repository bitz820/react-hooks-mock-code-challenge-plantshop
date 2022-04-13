import React, {useState} from "react";

function NewPlantForm({addNewPlant}) {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  const handleName = (e) => {
    setName(e.target.value)
  }
  // console.log(name, image, price)

  const handleImage = (e) => {
    setImage(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObj = {
      name: name,
      image: image,
      price: price,
      key: name
    }

    addNewPlant(newObj)
    // console.log(newObj)
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleImage} type="text" name="image" placeholder="Image URL" />
        <input onChange={handlePrice} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
