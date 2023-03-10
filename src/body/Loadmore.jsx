import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ProductsContext } from "../App";
import "../style/main.css";
import CalledData from "../subComponent/CalledData";

export default function Add() {
  const { setData, current } = useContext(ProductsContext);
  const [load, setLoad] = useState(3);

  useEffect(() => {
    if (current.value === "load") {
      axios
        .get(`http://localhost:2000/products/limit?limit=${load}`)
        .then((data) => setData(data.data));
    }
  }, [current]);

  function takeLimit() {
    setLoad(load + 3);
    axios
      .get(`http://localhost:2000/products/limit?limit=${load}`)
      .then((data) => setData(data.data));
  }
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
          <CalledData />
        </Table>

        <button onClick={takeLimit}>Load more</button>
      </div>
    </div>
  );
}
