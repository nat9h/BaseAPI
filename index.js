const express = require("express");
const cors = require("cors");
const path = require("path");
const chalk = require("chalk");
const swaggerUi = require("swagger-ui-express");

const config = require("./schema/config");
const docs = require("./schema/endpoint");
const api = require("./router/api");
const anim = require("./lib/print");

const app = express();

// Middleware Configuration
app.enable("trust proxy");
app.set("json spaces", 2);
app.use(cors());
app.use("/api", api);
app.use(express.static(path.join(__dirname, "/resources")));

// Route Handlers
app.get("/", (req, res) => {
  res.render("index");
});

app.use(
  "/playground",
  swaggerUi.serve,
  swaggerUi.setup(docs.swaggerDocument, docs.options),
);

// 404 Error Handler
app.use((req, res, next) => {
  res.status(404).send("Sorry, can't find that!");
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the Server
app.listen(config.options.port, () => {
  console.log(chalk.cyan("HitamAPIs - Base by @Irull2nd"));
  anim(`Server is running on http://localhost:${config.options.port}`);
});
