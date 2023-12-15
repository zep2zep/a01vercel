const express = require('express');
const app = express();
const cors = require("cors")
const port = 3003;

app.use(cors())
app.use(cors({
  origin: 'https://a01vercel-server.vercel.app/'
}));
app.get("/", function(req, res) {
    res.send({"name": "Jane Doe"}) // Should be json format
  })

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });