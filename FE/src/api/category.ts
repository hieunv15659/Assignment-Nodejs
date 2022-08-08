import instance from "./instance";

export const getcate = () => {
  return instance.get("/category");
};
export const catebyId = (id: Number) => {
  const url = "/category/" + id;
  return instance.get(url);
};
export const listca = () => {
  return instance.get("/category");
};
