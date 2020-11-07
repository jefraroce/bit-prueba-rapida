const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const rutasClientes = require('./componentes/clientes/rutas')

require('./baseDeDatos')

app.use(bodyParser.json())

app.use('/clientes', rutasClientes)

app.listen(3000, () => {
  console.log('¡El servidor ha sido encendido!')
})
