import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const updateUser = async (id, userData) => {
  const res = await axios.put(`${API}/users/${id}`, userData, authHeader());
  localStorage.setItem("user", JSON.stringify(res.data));
  return res.data.data;
};
