import instance from "./instance";
interface user {
  name?: string;
  phone?: number;
  email: string;
  password: string;
}
export const signup = (data: user) => {
  return instance.post("/user/register", data);
};
export const signin = (data: user) => {
  return instance.post("/user/signin", data);
};
