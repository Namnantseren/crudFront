import Table from "react-bootstrap/Table";
import "../style/main.css";
import CalledData from "../subComponent/CalledData";


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
          <CalledData/>
        </Table>
      </div>
    </div>
  );
}
