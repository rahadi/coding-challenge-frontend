const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

const agents = require("../json-data/agents.json");
const logs = require("../json-data/logs.json");
const resolutions = require("../json-data/resolution.json");

app.use(cors());

app.get("/agents", (req, res) => {
  res.json(agents);
});

app.get("/logs", (req, res) => {
  res.json(logs);
});

app.get("/resolutions", (req, res) => {
  res.json(resolutions);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
