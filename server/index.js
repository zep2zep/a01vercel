const express = require('express');
const app = express();
const cors = require("cors")
const port = 3003;

const corsOptions = {
  origin: 'https://a01vercel-server.vercel.app/', // Sostituisci con l'URL del tuo frontend
  optionsSuccessStatus: 200 // Alcune versioni di CORS richiedono questo parametro
};

app.use(cors(corsOptions));
app.get("/", function(req, res) {
    res.send({"name": "Jane Doe dal backend"}) // Should be json format
  })
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   
  });