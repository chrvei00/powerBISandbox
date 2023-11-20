import axios from "axios";
import { config } from "../config.js";
import { updateEmployeeData } from "./pbiApi.js";

axios.defaults.baseURL = "https://api-demo.poweroffice.net/";

export const authorizePogoClient = async () => {
  return axios
    .request({
      url: "oauth/token",
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + config.POGO_AUTH_KEY,
      },
      data: {
        grant_type: "client_credentials",
      },
    })
    .then(function (res) {
      console.log("Authorized pogo client");
      return res.data.access_token;
    })
    .catch(function (err) {
      console.log("Failed to authorize pogo client");
      return "";
    });
};

export const getPogoEmployees = async () => {
  return await axios
    .get("employee", {
      headers: {
        Authorization: "Bearer " + (await authorizePogoClient()),
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      const employees = [];
      res.data.data.forEach((employee) => {
        employees.push({
          gender: employee.gender.toString(),
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailAddress: employee.emailAddress,
          phoneNumber: employee.phoneNumber ?? "11111111",
          dateOfBirth: employee.dateOfBirth ?? "2000-12-29",
        });
      });
      console.log(employees);
      updateEmployeeData(employees);
      return employees;
    })
    .catch((err) => {
      console.log(err.respones);
    });
};
