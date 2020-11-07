const express = require('express')
const enrutador = express.Router()
const Cliente = require('./modelo')

enrutador.get('/', (solicitud, respuesta) => {
  Cliente.find((error, clientes) => {

    if (error !== null) {
      respuesta.status(500).send({ error: 'No hemos podido cargar los clientes.' })
    } else {
      respuesta.send(clientes)
    }

  })

})

enrutador.post('/', (solicitud, respuesta) => {

  // Registrando un solo cliente
  const nuevoCliente = new Cliente(solicitud.body)
  nuevoCliente.save((error, clienteRegistrado) => {

    if (error !== null) {
      respuesta.send({ error: 'No pudimos almacenar el cliente' })
    } else {
      respuesta.send(clienteRegistrado)
    }

  })

})

module.exports = enrutador

