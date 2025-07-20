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

export const getPositionsPage = async (page = 1, pageSize = 6) => {
  const res = await axios.get(
    `${API}/positions/?sort=updatedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    authHeader()
  );
  return res.data;
};

export const getPositionById = async (id) => {
  const res = await axios.get(`${API}/positions/${id}`, authHeader());
  return res.data.data;
};

export const createPosition = async (positionData) => {
  // console.log(positionData);
  const res = await axios.post(
    `${API}/positions`,
    { data: positionData },
    authHeader()
  );
  return res.data.data;
};

export const updatePosition = async (id, positionData) => {
  const res = await axios.put(
    `${API}/positions/${id}`,
    { data: positionData },
    authHeader()
  );
  return res.data.data;
};

export const deletePosition = async (id) => {
  const res = await axios.delete(`${API}/positions/${id}`, authHeader());
  return res.data;
};
