require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webRoutes = require("./routes/web");

const port = process.env.PORT || "8888";
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//routes
app.use("/v1", webRoutes);
app.use("/v2", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}`);
});
