import Table from "react-bootstrap/Table";
import "../style/main.css";
import { Data } from "../data/Data.js";

export default function Body() {
  return (
    <div className="main">
      <div className="d-flex justify-content-around mt-3"></div>
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>Image</th>
              <td>Name</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
              <td>Sale</td>
              <td>Options</td>
            </tr>
          </thead>
          <tbody>
              {Data &&
                Data.map((runner, index) => {
                  return (
                    <div key={index}>
                      <tr>
                        <td className="productImage">
                          <img src={runner.image} alt="" />
                        </td>
                        <td>{runner.name}</td>
                        <td>{runner.price}</td>
                        <td>{runner.brand}</td>
                        <td>{runner.category}</td>
                        <td>{runner.sale}</td>
                        <td>
                          <div>
                            <button className="optionEdit">Edit</button>/
                            <button className="optionDelete">Delete</button>
                          </div>
                        </td>
                      </tr>
                    </div>
                  );
                })}
            </tbody>
        </Table>
        
      </div>
    </div>
  );
}
