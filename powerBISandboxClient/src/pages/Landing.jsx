import { useState } from "react";
import Button from "@mui/material/Button";
import { updateEmployees } from "../assets/api.js";
import "./Landing.css";

export default function Landing() {
  const [POGOactive, setPOGOactive] = useState(false);

  return (
    <>
      <h1>Power BI Sandbox</h1>
      <Button
        style={{ marginRight: "20px" }}
        variant={!POGOactive ? "contained" : "outlined"}
        size="large"
        onClick={() => setPOGOactive(false)}
      >
        NPS Analyse
      </Button>
      <Button
        variant={POGOactive ? "contained" : "outlined"}
        size="large"
        onClick={() => setPOGOactive(true)}
      >
        POGO Datainnhenting
      </Button>
      <br />
      {POGOactive ? (
        <div className="reportDiv">
          <iframe
            title="POGOData"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=6a0d1e27-0449-4536-88ff-1d76b4e17801&autoAuth=true&ctid=09a10672-822f-4467-a5ba-5bb375967c05"
            allowFullScreen={true}
          ></iframe>
          <Button variant="text" size="large" onClick={() => updateEmployees()}>
            Update employees
          </Button>
        </div>
      ) : (
        <div className="reportDiv">
          <iframe
            title="NPSAnalyse"
            width="1140"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=3a728348-33ad-4a77-bad0-52a88c57acb6&autoAuth=true&ctid=09a10672-822f-4467-a5ba-5bb375967c05"
            allowFullScreen="true"
          ></iframe>
        </div>
      )}
    </>
  );
}
