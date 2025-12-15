import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../Components/Layout/Layout";
import ProductCard from "../../Components/Product/ProductCard";
import classes from "./Results.module.css";
import { productUrl } from "../../Api/endPoint";


function Results() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <p style={{ padding: "30px" }}>Results</p>
        <p style={{ padding: "30px" }}>{categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
