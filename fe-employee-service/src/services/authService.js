import axios from "axios";

const API = "http://localhost:1337/api";

export const register = async ({ username, email, password }) => {
  const res = await axios.post(`${API}/auth/local/register`, {
    username,
    email,
    password,
  });
  return res.data;
};

export const login = async ({ identifier, password }) => {
  const res = await axios.post(`${API}/auth/local`, {
    identifier,
    password,
  });
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  console.log("User logged out successfully.");
};
