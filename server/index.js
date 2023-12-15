const express = require('express');
const cors = require("cors")
const app = express();

const port = 3003;

const corsOptions = {
  origin: 'https://a01vercel-client.vercel.app/', // Sostituisci con l'URL del tuo frontend
  optionsSuccessStatus: 200 // Alcune versioni di CORS richiedono questo parametro
};

app.use(cors(corsOptions));
app.get("/", function(req, res) {
    res.send({"name": "Jane Doe dal backend #2"}) // Should be json format
  })
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
   
  });