import axios from "axios";
import "../style/add.css";

export default function Add() {
  function add(e) {
    e.preventDefault();
    axios.post(`http://localhost:3000/product/add`, {
      name: e.target.name.value,
      price: e.target.price.value,
      image: e.target.image.value,
      brands: e.target.brand.value,
      category: e.target.category.value,
    });
    console.log('name',e.target.name.value);
  }

  return (
    <div className="containerOfAdd">
      <h2>Add Product</h2>
      <form className="d-flex flex-wrap containerOfInputs" onSubmit={add}>
        <input
          type="text"
          placeholder="name"
          className="fiveInput"
          name="name"
        />
        <input
          type="text"
          placeholder="Price"
          className="twoPrice"
          name="price"
        />
        <input
          type="text"
          placeholder="Image"
          className="fiveInput"
          name="image"
        />
        <input
          type="text"
          placeholder="Brand"
          className="twoPrice"
          name="brand"
        />
        <input
          type="text"
          placeholder="Category"
          className="fiveInput categoryInput"
          name="category"
        />
        <div>
          <button className="purpleBtn" onClick={add}>
            Add +
          </button>
        </div>
      </form>
      <div className="containerOfBottom">
        <h2>Add Category</h2>
        <input
          type="text"
          placeholder="Category"
          className="fiveInput categoryInput"
        />
        <div>
          <button className="purpleBtn">Add category +</button>
        </div>
        <h2>Add Brand</h2>
        <input
          type="text"
          placeholder="Brand"
          className="fiveInput categoryInput"
        />
        <div>
          <button className="purpleBtn">Add brand +</button>
        </div>
      </div>
    </div>
  );
}
