import Product from "../model/product";
import instance from "./instance";

export const List = () => {
  return instance.get("/products");
};
export const remove = (id: number) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const product = (id: number) => {
  return instance.get(`/product/${id}`);
};
export const getAll = (id: number) => {
  const url = "/products/" + id;
  return instance.get(url);
};
export const Read = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const listcate = (id: number) => {
  const url = `/products/${id}`;
  return instance.get(url);
};
export const Update = (product: Product[]) => {
  return instance.put(`/products/${product.id}`, product);
};
export const AddProduct = (product: Product[]) => {
  return instance.post("/products", product);
};
