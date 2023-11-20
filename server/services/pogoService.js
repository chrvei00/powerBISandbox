import { getPogoData, authorizePogoClient } from "../api.js";

export const autorizePogoClient = async () => {
  await authorizePogoClient();
};

const update = async () => {
  console.log("Updating pogo data");
  const data = await getPogoData();
  console.log(data.data);
  console.log(data.data.data.map((e) => e.firstName));
};

export { update };
