console.log("--------------------------------");
import express, { Application } from "express";
import appConfig from "./app";
import envVariables from "./config/environmentVariables";

const app: Application = express();
appConfig(app);

app.listen(envVariables.PORT, () => {
  console.log(`server is up on port ${2000}`);
});
