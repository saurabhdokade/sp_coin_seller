import React, { useState } from "react";

function AddCoin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Coin Added: ${name}, Price: ${price}`);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h4>Add a New Coin</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Coin Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Add Coin</button>
      </form>
    </div>
  );
}

export default AddCoin;
