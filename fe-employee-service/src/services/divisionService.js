import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getDivisions = async () => {
  const res = await axios.get(`${API}/divisions`, authHeader());
  return res.data.data;
};
