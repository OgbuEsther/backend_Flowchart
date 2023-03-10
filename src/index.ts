console.log("--------------------------------");
import express, { Application } from "express";
import envVariables from "./config/environmentVariables";

const app: Application = express();

app.listen(envVariables.PORT, () => {
  console.log(`server is up on port ${2000}`);
});
