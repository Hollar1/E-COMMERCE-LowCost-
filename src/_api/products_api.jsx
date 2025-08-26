import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const Product_api_context = createContext([]);

export const Product_api_context_provider = ({ children }) => {
  const product_api = "https://fakestoreapi.com/products";
  const product_api_B =
    "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json";

  const [products, setProducts] = useState([]);
  const [products_B, setProducts_B] = useState([]);


  const fetch_products = async () => {
    try {
      const responseA = await axios.get(`${product_api}`);
      const responseB = await axios.get(`${product_api_B}`);
      if (responseA) {
        setProducts(responseA.data);
      }
      if (responseB) {
        setProducts_B(responseB.data);
      }
    } catch (error) {
      if (error) {
        console.log(error.response?.data?.message);
      }
    }
  };

  useEffect(() => {
    fetch_products();
  }, []);
  return (
    <Product_api_context.Provider value={{ products, products_B }}>
      {children}
    </Product_api_context.Provider>
  );
};

export const useProduct_api_context = () => useContext(Product_api_context);
