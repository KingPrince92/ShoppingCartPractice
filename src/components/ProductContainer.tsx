import "./ProductContainer.css";
import { useEffect, useState } from "react";
import StoreItem from "../Models/StoreItem";
import ProductCard from "./ProductCard";
import { getAllProducts } from "../services/fakeProductService";

const ProductContainer = () => {
  const [products, setProducts] = useState<StoreItem[]>([]);

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  return (
    <ul className="ProductContainer">
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default ProductContainer;
