const express = require('express');
const cors = require("cors")
const app = express();

const port = 3003;


app.use(cors());

app.get("/", function(req, res) {
    res.send({"name": "Jane Doe da Colico"}) // Should be json format
  })
 
  app.listen(port, () => {
    console.log(`Server running${port}`);
   
  });

  module.exports = app;