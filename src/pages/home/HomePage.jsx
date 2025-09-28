import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductGrid } from "./ProductsGrid";
export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };
    getHomeData();
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
