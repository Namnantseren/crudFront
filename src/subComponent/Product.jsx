import { useContext } from "react";
import { ProductsContext } from "../App";
import { useEffect } from "react";
import axios from "axios";
import "../style/product.css";

export default function Product() {
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
    <div>
      {data &&
        data.map((category, index) => {
          return (
            <div className="d-flex product" key={index}>
              <p className="flex">{category.category}</p>
              <div className="flex"></div>
            </div>
          );
        })}
    </div>
  );
}
