import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

export const getEmployees = async (page = 1, pageSize = 5) => {
  // const res = await axios.get(
  //   `${API}/employees/?populate=division&populate=position&sort=updatedAt:desc`,
  //   authHeader()
  // );
  // return res.data.data;
  const res = await axios.get(
    `${API}/employees/?populate=division&populate=position&sort=updatedAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    authHeader()
  );
  return res.data;
};

export const getEmployeeById = async (id) => {
  const res = await axios.get(
    `${API}/employees/${id}/?populate=division&populate=position`,
    authHeader()
  );
  return res.data.data;
};

export const createEmployee = async (employeeData) => {
  // console.log(employeeData);
  const res = await axios.post(
    `${API}/employees/?populate=division&populate=position`,
    { data: employeeData },
    authHeader()
  );
  return res.data.data;
};

export const updateEmployee = async (id, employeeData) => {
  const res = await axios.put(
    `${API}/employees/${id}/?populate=division&populate=position`,
    { data: employeeData },
    authHeader()
  );
  return res.data.data;
};

export const deleteEmployee = async (id) => {
  const res = await axios.delete(`${API}/employees/${id}`, authHeader());
  return res.data;
};
