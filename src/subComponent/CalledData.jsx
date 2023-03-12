import { useContext, useEffect } from "react";
import axios from "axios";
import { ProductsContext } from "../App";

export default function CalledData() {
  const { setData, data, current } = useContext(ProductsContext);

  useEffect(() => {
    if (current.value !== "load") {
      axios
        .get(`http://localhost:2000/product`)
        .then((data) => setData(data.data));
    }
    // eslint-disable-next-line
  }, [current]);

  return (
    <tbody>
      {data &&
        data.map((runner, index) => {
          return (
            <tr key={index}>
              <td className="productImage">
                <img src={runner.image} alt="" />
              </td>
              <td>{runner.name}</td>
              <td>{runner.price}</td>
              <td>{runner.brands}</td>
              <td>{runner.category}</td>
              <td>{runner.sale}%</td>
              <td>
                <div>
                  <button className="optionEdit">Edit</button>/
                  <button className="optionDelete">Delete</button>
                </div>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}
