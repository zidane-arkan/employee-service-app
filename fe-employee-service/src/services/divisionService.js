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

export const getDivisionsPage = async (page = 1, pageSize = 6) => {
  const res = await axios.get(
    `${API}/divisions/?sort=updatedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    authHeader()
  );
  return res.data;
};

export const getDivisionById = async (id) => {
  const res = await axios.get(`${API}/divisions/${id}`, authHeader());
  return res.data.data;
};

export const createDivision = async (divisionData) => {
  // console.log(divisionData);
  const res = await axios.post(
    `${API}/divisions`,
    { data: divisionData },
    authHeader()
  );
  return res.data.data;
};

export const updateDivision = async (id, divisionData) => {
  const res = await axios.put(
    `${API}/divisions/${id}`,
    { data: divisionData },
    authHeader()
  );
  return res.data.data;
};

export const deleteDivision = async (id) => {
  const res = await axios.delete(`${API}/divisions/${id}`, authHeader());
  return res.data;
};
