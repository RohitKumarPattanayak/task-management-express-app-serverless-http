import express from "express";
import cors from "cors";
import { PORT } from "./utils/constants.js";
import taskCrud from "./routes/v1/taskCrudRoutes.js";
import basicAuth from "express-basic-auth";
import myAuthorizer from "./auth/basicAuthorization.js";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(basicAuth({ authorizer: myAuthorizer }));

app.use("/api/v1/tasks", taskCrud);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
