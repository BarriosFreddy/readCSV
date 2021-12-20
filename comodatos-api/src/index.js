const csv = require("csv-parser");
const fs = require("fs");
const app = require('express')()
const cors = require('cors')
require('dotenv').config()

const mongodblib = require("./helper/mongodb");
const comodatosController = require('./controller/comodatos')
const { PORT = 3000 } = process.env


;(async () => {
  await mongodblib.connect();

  app.use(cors())
  app.get('/', (req, res) => {
    res.send({
      name: "Comodatos app",
      version: "0.0.1"
    })
  })
  app.get('/comodatos', comodatosController.get)
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  })
 /*  fs.createReadStream('comodatos.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    console.log(results);
    for (const comodato of results) {
      const insertId = await mongodblib.save('comodato', comodato)
      console.log({ insertId });
    }
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  }); */
})();



