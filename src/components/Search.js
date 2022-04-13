import React from "react";

function Search({setSearchPlant}) {


  const handleChange = (e) => {
    setSearchPlant(e.target.value)
    // setState to be the value of what was typed

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
