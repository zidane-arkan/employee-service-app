import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getPositions = async () => {
  const res = await axios.get(`${API}/positions`, authHeader());
  return res.data.data;
};
