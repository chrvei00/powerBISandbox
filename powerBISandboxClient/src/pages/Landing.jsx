import Button from "@mui/material/Button";
import { updateEmployees } from "../assets/api.js";

export default function Landing() {
  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={() => updateEmployees()}
      >
        Update employees
      </Button>
    </>
  );
}
