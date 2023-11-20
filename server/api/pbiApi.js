import axios from "axios";

const employeePushURL =
  "https://api.powerbi.com/beta/09a10672-822f-4467-a5ba-5bb375967c05/datasets/58f699ba-6e09-49ee-ad78-3c981f5a6c23/rows?experience=power-bi&key=%2FBZ7ZjBi62FjUCGczKVId3VpslAdEhL1scEIkz3KX%2BP0Tr7fiznE0pe7ZzSwuDnaXG26BVhZNHTyhDX49lX%2FOA%3D%3D";

export const updateEmployeeData = async (data) => {
  axios
    .post(
      employeePushURL,
      { Employees: data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .catch((err) => {
      console.debug(err.status);
    });
};
