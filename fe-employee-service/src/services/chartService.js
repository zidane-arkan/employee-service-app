import axios from "axios";

const API = "http://localhost:1337/api";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
});

// jumlah karywan per divisi
export const getEmployeeCountByDivision = async () => {
  const res = await axios.get(
    `${API}/employees/?populate=division`,
    authHeader()
  );
  const employees = res.data.data;

  const divisionMap = {};

  employees.forEach((employee) => {
    const divisionName = employee.division.name || "Unknown";
    divisionMap[divisionName] = (divisionMap[divisionName] || 0) + 1;
  });
  //   console.log(divisionMap);
  return divisionMap;
};

// jumlah karyawan per posisi
export const getEmployeeCountByPosition = async () => {
  const res = await axios.get(
    `${API}/employees/?populate=position`,
    authHeader()
  );
  const employees = res.data.data;

  const positionMap = {};

  employees.forEach((employee) => {
    const positionName = employee.position?.name || "Unknown";
    positionMap[positionName] = (positionMap[positionName] || 0) + 1;
  });

  return positionMap;
};

// rata2 gaji per divisi
export const getAverageSalaryByDivision = async () => {
  const res = await axios.get(
    `${API}/employees/?populate=division&populate=position`,
    authHeader()
  );
  const employees = res.data.data;

  const divisionSalaries = {};
  const divisionCounts = {};

  employees.forEach((emp) => {
    const divisionName = emp.division?.name;
    const salaryStr = emp.position?.salary;

    if (!divisionName || !salaryStr) return;

    const salary = Number(salaryStr); // 🛠️ konversi string ke number
    if (isNaN(salary)) return;

    if (!divisionSalaries[divisionName]) {
      divisionSalaries[divisionName] = 0;
      divisionCounts[divisionName] = 0;
    }

    divisionSalaries[divisionName] += salary;
    divisionCounts[divisionName] += 1;
  });

  const averageSalaryByDivision = {};
  for (const division in divisionSalaries) {
    const total = divisionSalaries[division];
    const count = divisionCounts[division];
    averageSalaryByDivision[division] = Math.round(total / count);
  }

  return averageSalaryByDivision;
};

// gaji tiap posisi
export const getSalaryPerPosition = async () => {
  const res = await axios.get(`${API}/positions`, authHeader());
  const positions = res.data.data;

  const positionSalaryMap = {};

  positions.forEach((pos) => {
    const name = pos.name;
    const salary = pos.salary;
    positionSalaryMap[name] = salary;
  });

  return positionSalaryMap;
};
