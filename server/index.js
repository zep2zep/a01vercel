const express = require('express');
const app = express();
const cors = require("cors")
const port = 3003;

app.use(cors())

app.get("/", function(req, res) {
    res.send({"name": "Jane Doe"}) // Should be json format
  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });