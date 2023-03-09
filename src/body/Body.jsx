import Table from "react-bootstrap/Table";
import '../style/main.css'

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
            <tr>
              <td>URL</td>
              <td>name</td>
              <td>35515</td>
              <td>Apple</td>
              <td>phone</td>
              <td>10%</td>
              <td>
                <div>
                  <button className="optionEdit">Edit</button>
                  /
                  <button className="optionDelete">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
