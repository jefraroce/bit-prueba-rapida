const mongoose = require('mongoose')

// Para poder utilizar MongoDB y (Consultar, Registrar, Actualizar o Eliminar) Debo hacer dos (2) cosas
// 1. Crear un Schema (Es la descripción de la estructura de mi colección)
// 2. Crear un Modelo (Es un objeto que me permitirá interactuar con la colección en MongoDB)

// Colección Clientes

const clienteSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: String,
  edad: Number
})

// mongoose.model('el nombre de la colección', El Schema)
const Cliente = mongoose.model('clientes', clienteSchema)

module.exports = Cliente

/*

  // Registrando un solo cliente
  const paola = new Cliente({ nombres: 'Paola' })
  paola.save((error, paolaGuardada) => {
    console.log('Error ', error)
    console.log('paolaGuardada ', paolaGuardada)
  })

  // Registrando varios clientes a la vez
  const arregloClientes = [
    { nombresss: 'Tomy' },
    { nombresss: 'Tomy', apellidos: 'Rosas' },
    { nombresss: 'Tomy', apellidos: 'Rosas', edad: 2 }
  ]

  Cliente.insertMany(arregloClientes, (error, clientesRegistrados) => {
    console.log('Error ', error)
    console.log('clientesRegistrados ', clientesRegistrados)
  })

*/
