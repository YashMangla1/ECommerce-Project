import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductsGrid";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <Header cart={cart}></Header>
      <title>HomePage</title>
      <div className="home-page">
        <ProductGrid products={products} />
      </div>
    </>
  );
}
