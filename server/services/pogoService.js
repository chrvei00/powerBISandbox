import { getPogoEmployees, authorizePogoClient } from "../api/pogoApi.js";

export const autorizePogoClient = async () => {
  await authorizePogoClient();
};

const update = async () => {
  console.log("Updating pogo data");
  console.log(await getPogoEmployees());
};

export { update };
