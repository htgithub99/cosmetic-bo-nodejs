const express = require("express");
const morgan = require("morgan");
var cors = require('cors')
const app = express();
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const connection = require("./db");
app.use(cors())
const port = 3001;
require("./routes")(app);

connection();

app.get("/api", (req, res) => {
  res.send("Hello word!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
