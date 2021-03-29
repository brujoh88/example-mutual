const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/public'))

/* var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lista_contactos',
})

connection.connect()
let array
connection.query(
  'SELECT C.idContacto, C.nombre, C.email, C.telefono FROM contactos C',
  function (error, results, fields) {
    if (error) throw error
    call(results)
  }
)
const call = (dato) => {
  array = dato
}
app.get('/getData', (req, res) => {
  res.status(200).send(array)
}) */

app.listen(port, () =>
  console.log(`La app esta escuando en la URL http://localhost:${port}`)
)
