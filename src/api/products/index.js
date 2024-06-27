import axios from "axios";

export const useProducts = async (limit) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products${limit ? `?limit=${limit}` : ""}`
  );
  return data;
};

export const useProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
