require("dotenv").config();

const express = require("express");
const configViewEngine = require("./config/viewEngine");
const app = express();
const webRoutes = require("./routes/web");

const port = process.env.PORT || "8888";
const hostname = process.env.HOST_NAME;

//config request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

//routes
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}`);
});
