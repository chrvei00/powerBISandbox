import axios from "axios";
import { config } from "./config.js";

axios.defaults.baseURL = "https://api-demo.poweroffice.net/";

export const authorizePogoClient = async () => {
  console.log("Authorizing pogo client...");
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
      console.log(res.data.access_token);
      return res.data.access_token;
    })
    .catch(function (err) {
      console.log("Failed to authorize pogo client");
      return "";
    });
};

export const getPogoData = async () => {
  return await axios
    .get("employee", {
      headers: {
        Authorization: "Bearer " + (await authorizePogoClient()),
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err.respones);
    });
};
