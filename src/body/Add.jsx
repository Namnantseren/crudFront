import "../style/add.css"

export default function Add() {
    return (
        <div className="containerOfAdd">
            <h2>Add Product</h2>
            <div className="d-flex flex-wrap containerOfInputs">
                <input type="text" placeholder="name" className="fiveInput"/>
                <input type="text" placeholder="Price" className="twoPrice"/>
                <input type="text" placeholder="Image" className="fiveInput"/>
                <input type="text" placeholder="Brand" className="twoPrice"/>
                <input type="text" placeholder="Category" className="fiveInput categoryInput"/>
            </div>
            <div className="containerOfBottom">
            <div>
                <button className="purpleBtn">Add +</button>
            </div>
            <h2>Add Category</h2>
            <input type="text" placeholder="Category" className="fiveInput categoryInput"/>
            <div>
                <button className="purpleBtn">Add category +</button>
            </div>
            <h2>Add Brand</h2>
            <input type="text" placeholder="Brand" className="fiveInput categoryInput"/>
            <div>
                <button className="purpleBtn">Add brand +</button>
            </div>
            </div>
        </div>
    )
}