import { getPogoEmployees } from "../api/pogoApi.js";

const updateEmployees = async () => {
  await getPogoEmployees();
};

export { updateEmployees };
