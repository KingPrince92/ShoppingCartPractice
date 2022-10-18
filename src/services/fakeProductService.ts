import axios from "axios";
import StoreItem from "../Models/StoreItem";

const baseURL: string = "https://fakestoreapi.com/products";

const getAllProducts = async (): Promise<StoreItem[]> => {
  return (await axios.get(baseURL)).data;
};

const getSingleProduct = async (id: number): Promise<StoreItem> => {
  return (await axios.get(`${baseURL}${encodeURIComponent(id)}`)).data;
};

export { getAllProducts, getSingleProduct };
